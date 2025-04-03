import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { chef1, chef2, chef3 } from "../../../assets/index";
import "./Experts.css";
import Heading from "../../Heading/Heading";

const Experts = () => {
  const swiperRef = useRef(null);

  return (
    <div className="container py-5 ">
      <Heading
        title="OUR EXPERTS"
        backText="luxury "
        subtitle1="MEET OUR STYLISTS"
      />

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay, Mousewheel]}
        slidesPerView={3}
        spaceBetween={10}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        mousewheel={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="image-container position-relative">
            <img src={chef1} alt="Chef 1" className="w-100 image-slide" />
            <div className="overlay"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="image-container position-relative">
            <img src={chef2} alt="Chef 2" className="w-100 image-slide" />
            <div className="overlay"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="image-container position-relative">
            <img src={chef3} alt="Chef 3" className="w-100 image-slide" />
            <div className="overlay"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Experts;
