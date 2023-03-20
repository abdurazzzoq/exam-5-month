import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "./swiper.css";

const SwiperJs = () => {
  return (
    <Swiper
      style={{ marginTop: "20px", borderRadius: "20px" }}
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img
          src="https://images.uzum.uz/cg3c2bnhgiov1qidqlj0/main_page_banner.jpg"
          alt=""
          width={"100%"}
          maxwidth={1200}
          height={413}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.uzum.uz/cg5ftsvhgiov1qie3k6g/main_page_banner.jpg"
          alt=""
          width={"100%"}
          maxwidth={1200}
          height={413}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.uzum.uz/cg9a5nfhj8j9g69a2r60/main_page_banner.jpg"
          alt=""
          width={"100%"}
          maxwidth={1200}
          height={413}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.uzum.uz/cg9a74ng49devoaaomeg/main_page_banner.jpg"
          alt=""
          width={"100%"}
          maxwidth={1200}
          height={413}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.uzum.uz/cg9a8kfhj8j9g69a2rng/main_page_banner.jpg"
          alt=""
          width={"100%"}
          maxwidth={1200}
          height={413}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.uzum.uz/cg7c9snhgiov1qieb7qg/main_page_banner.jpg"
          alt=""
          width={"100%"}
          maxwidth={1200}
          height={413}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.uzum.uz/cfv22a7hgiov1qid9m10/main_page_banner.jpg"
          alt=""
          width={"100%"}
          maxwidth={1200}
          height={413}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="	https://images.uzum.uz/cg091pnhj8j9g698sra0/main_page_banner.jpg"
          alt=""
          width={"100%"}
          maxwidth={1200}
          height={413}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.uzum.uz/cg7c81vg49devoaaf0ig/main_page_banner.jpg"
          alt=""
          width={"100%"}
          maxwidth={1200}
          height={413}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="	https://images.uzum.uz/cg7hqbfhj8j9g699qoa0/main_page_banner.jpg"
          alt=""
          width={"100%"}
          maxwidth={1200}
          height={413}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.uzum.uz/cehgelqvtie1lhbf9upg/main_page_banner.jpg"
          alt=""
          width={"100%"}
          maxwidth={1200}
          height={413}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="	https://images.uzum.uz/cfpkiung49devoa8mdcg/main_page_banner.jpg"
          alt=""
          width={"100%"}
          maxwidth={1200}
          height={413}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperJs;
