import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { banner, banner12, banner2 } from "../../assets/index.jsx";
import { IoCallOutline } from "react-icons/io5";
import Button from "../Button/Button.jsx";

const slides = [
  {
    id: 1,
    image: banner,
    badge: "SINCE. 2012",
    heading: "Welcome to Kristane",
    subHeading: "Hair and beauty Salon",
    discount: "Indore ,Indore",
  },
  {
    id: 2,
    image: banner2,
    badge: "HAIR CUT",
    heading: "Efficient Styling Experience",
    subHeading: "with Professional tools ",
    discount: "UPTO 20% off beauty Services",
  },
  {
    id: 3,
    image: banner12,
    badge: "BEAUTY SALON",
    heading: "Experience luxurious",
    subHeading: "Hair botox treatment",
    discount: "20% off",
  },
];

const HomeSlider = () => {
  const swiperRef = useRef(null);

  return (
    <div className="slider-container vh-100 position-relative overflow-hidden">
      <div className="position-absolute top-50 start-0 translate-middle-y text-white z-3 ms-3 d-none d-md-block">
        <div className="d-flex align-items-center" style={{ rotate: "-90deg" }}>
          <div className="border rounded-circle d-flex align-items-center justify-content-center p-2 me-3 bg-light text-dark">
            <IoCallOutline className="fs-4" />
          </div>
          <div className="text-nowrap">
            <p className="m-0 fs-6 my-Font-Family my-fontcolor">Reservation</p>
            <p className="m-0 fs-5 fw-bold my-Font-Family ">123466790</p>
          </div>
        </div>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loopAdditionalSlides={3}
        speed={1000}
        className="w-100 h-100"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="slide d-flex justify-content-center align-items-center position-relative w-100 h-100 text-center"
              style={{
                backgroundColor: "#000000a1",
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "overlay",
              }}
            >
              <div className="slide-content text-white p-3">
                <p className="my-fontFamily fs-6 fw-light letter-spacing">
                  {slide.badge}
                </p>
                <p className="my-fontFamily fs-1 fw-light">{slide.heading}</p>
                <p className="my-fontFamily my-fontcolor fs-3 fw-light">
                  {slide.subHeading}
                </p>
                <p className="fs-5 fw-light text-white">{slide.discount}</p>
                <Button buttonText="Check Our Menu" navigateTo="/menu" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="position-absolute top-50 start-0 translate-middle-y btn btn-light opacity-75 d-none d-md-block"
        onClick={() => swiperRef.current.swiper.slidePrev()}
      >
        ❮
      </button>
      <button
        className="position-absolute top-50 end-0 translate-middle-y btn btn-light opacity-75 d-none d-md-block"
        onClick={() => swiperRef.current.swiper.slideNext()}
      >
        ❯
      </button>
    </div>
  );
};

export default HomeSlider;
