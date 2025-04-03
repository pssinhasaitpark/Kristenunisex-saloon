import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { FaStar } from "react-icons/fa";
import "./Reservation.css";
import Button from "../../Button/Button";
import { IoCallOutline } from "react-icons/io5";
import { banner12 } from "../../../assets";

const slides = [
  {
    id: 1,
    text: "Experience All That Salon U Has To Offer…",
    stars: 4,
  },
];

const Reservation2 = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${banner12})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        // height:"80vh",
      }}
    >
      <div className="container">
        <div className="row ">
          <div className="col-sm-6 mt-5 ">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              loop={false}
              speed={2000}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="d-flex flex-column  reservation-box">
                    <div className="mb-3">
                      {[...Array(slide.stars)].map((_, index) => (
                        <FaStar key={index} color="#ffcc00" size={20} />
                      ))}
                    </div>

                    <p className="testinomial-text text-white">{slide.text}</p>

                    <div className="">
                      <div className="d-flex ">
                        <div className="d-flex">
                          <div className="border rounded-circle d-flex align-items-center justify-content-center me-3">
                            <IoCallOutline className="fs-2 p-1 m-2" />
                          </div>
                          <div className="">
                            <p className="m-0 fs-6 my-fontcolor my-fontFamily ">
                              Reservation
                            </p>
                            <p className="m-0 fs-4  my-fontFamily text-white">
                              123466790
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="col-sm-6 mt-4 ">
            <div className=" text-center ">
              <div
                className="mb-4  py-5"
                style={{ backgroundColor: "#f2eee9" }}
              >
                <h3 className="text-dark">Make A Reservation</h3>
                <form action="">
                  <div className="row">
                    <div className="col-sm-6 p-3">
                      <input
                        type="text"
                        className="form-control my-2"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="col-sm-6 p-3">
                      <input
                        type="text"
                        className="form-control my-2"
                        placeholder="Phone"
                      />{" "}
                    </div>
                    <div className="col-sm-6 p-3">
                      <input
                        type="email"
                        className="form-control my-2"
                        placeholder="email address"
                      />{" "}
                    </div>
                    <div className="col-sm-6 p-3">
                      <input
                        type="date"
                        className="form-control my-2"
                        placeholder="date"
                      />{" "}
                    </div>
                    <div className="col-sm-6 p-3">
                      <input
                        type="text"
                        className="form-control my-2"
                        placeholder="1 person"
                      />{" "}
                    </div>
                    <div className="col-sm-6 p-3">
                      <input
                        type="time"
                        className="form-control my-2"
                        placeholder="time"
                      />{" "}
                    </div>
                    <div className="w-100">
                      <Button
                        buttonText="CHECK AVAILABILTY"
                        navigateTo="/appointment"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation2;
