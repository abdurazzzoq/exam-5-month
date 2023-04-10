import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constantas";
import FavouriteContext from "../context/FavouriteContext";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./App.css";

const Shares = () => {
  const [data, setData] = useState([]);
  const [visible, setVisile] = useState(8);
  // const [categories, setCategories] = useState([]);

  const { favouriteList, setFavouriteList } =
    useContext(FavouriteContext);


    const addToFav = (data) => {
      let has = false;
      favouriteList.forEach((product) => {
        if (product.id === data.id) {
          has = true;
        }
      });
      if (!has) {
        setFavouriteList([...favouriteList, data]);

        // toast('Product is added to wishlist', {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        //   });


      } else {
        const result =  favouriteList.filter((product) => {
          if (product.id !== data.id) {
            return product
          }
        });
        setFavouriteList(result)
      }
      console.log(favouriteList);
    };

  useEffect(() => {
    fetch(BASE_URL + "/products")
      .then((res) => res.json())
      .then((products) => {
        setData(products);
      });

    // fetch("https://api.escuelajs.co/api/v1/categories")
    //   .then((res) => res.json())
    //   .then((items) => {
    //     console.log(items);
    //     setCategories(items);
    //   });
  }, []);

  // const categoryHandler = (category) => {
  //   console.log(category);
  //   fetch("https://api.escuelajs.co/api/v1/categories/" + category)
  //     .then((res) => res.json())
  //     .then((items) => {
  //       setData(items);
  //     });
  // };

  const showMoreHandler = () => {
    setVisile((prev) => prev + 4);
  };

  return (
    <div className=" pl-28 mx-auto mt-10">

 

      
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
      {/* categories */}
      {/* <div className="">
        <ul className="flex justify-between">
          {categories.map((category) => (
            <li
              className="cursor-pointer"
              onClick={() => categoryHandler(category)}
              key={category.id}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div> */}

      <h2 className="text-3xl font-medium">Акция недели</h2>


      <div className="flex flex-wrap mt-4 gap-6">
        {data.slice(0, visible).map((data, i) => (
          <div
            style={{ maxwidth: 236, width: 236 }}
            key={i}
            className=" border rounded-lg shadow cursor-pointer"
          >
            
            <Link to={"/products/" + data.id}>
              <img
                className="rounded-t-lg w-full"
                src={data.images[0]}
                alt={data.name}
              />
          

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                {data.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {data.description}
              </p>
            </div>
            </Link>
            <button
              onClick={() => addToFav(data)}
              className="bg-violet-400 text-white font-medium py-1 px-3 rounded-xl"
            >
              add to favourites
            </button>
          </div>
        ))}
        <button
          onClick={showMoreHandler}
          className="bg-slate-300 font-bold w-96 mx-auto py-2 px-3 rounded "
        >
          Load more 4
        </button>
      </div>
    </div>
  );
};

export default Shares;
