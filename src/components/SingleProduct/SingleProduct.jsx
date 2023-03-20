import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constantas";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import FavouriteContext from "../context/FavouriteContext";

const SIngleProduct = () => {
  const { id } = useParams();
  const [products, setProduct] = useState({});

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(BASE_URL + "/products/" + id);
      const data = await res.json();
      setProduct(data);
      console.log(data);
    };
    getData();
  }, []);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { favouriteList, setFavouriteList } = useContext(FavouriteContext);

  const addToFav = (data) => {
    let has = false;
    favouriteList.forEach((product) => {
      if (product.id === data.id) {
        has = true;
      }
    });
    if (!has) {
      setFavouriteList([...favouriteList, data]);

      toast('Product is added to wishlist', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    } else {
      const result = favouriteList.filter((product) => {
        if (product.id !== data.id) {
          return product;
        }
      });
      setFavouriteList(result);
    }
    console.log(favouriteList);
  };

  return (
    <div className="mt-16">

<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />


      <div className="">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={true}
          loop={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src={products.images} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={products.images} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={products.images} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={products.images} />
          </SwiperSlide>
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={products.images} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={products.images} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={products.images} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={products.images} />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="">
        <h3 className="font-medium">
          <span className="text-black"> Name:</span> {products.title}
        </h3>
        <p className="text-blue-500">
          <span className="text-black"> Price:</span>
          {products.price}$
        </p>
        <p className="text-blue-500 w-96">
          <span className="text-black"> About the product:</span>
          {products.description}
        </p>
      </div>
      <button
        onClick={() => addToFav(products)}
        className="bg-violet-400 text-white font-medium py-1 px-3 rounded-xl"
      >
        add to favourites
      </button>
    </div>
  );
};

export default SIngleProduct;
