import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import { reser1, reser2, reser3, banner5 } from "../../../assets/index";
import "./Reservation.css";
import { Row, Col } from "react-bootstrap";
import { MapPin } from "lucide-react";
import Button from "../../Button/Button";
import Grooming from "../Grooming/Grooming";

const slides = [
  {
    id: 1,
    text: "The prices at Kristane Unisex Salon are reasonable, especially given the quality of the services they provide. You can feel confident that you're getting a good value for your money.",
    image: reser2,
    username: "Emily Brown",
    review: "Customer Review ",
    stars: 5,
  },

  {
    id: 2,
    text: "The prices at Kristane Unisex Salon are reasonable, especially given the quality of the services they provide. You can feel confident that you're getting a good value for your money.",
    image: reser2,
    username: "Emily Brown",
    review: "Customer Review ",
    stars: 5,
  },
  {
    id: 3,
    text: "The prices at Kristane Unisex Salon are reasonable, especially given the quality of the services they provide. You can feel confident that you're getting a good value for your money.",
    image: reser3,
    username: "Emily Brown",
    review: "Customer Review ",
    stars: 5,
  },
];

const Reservation = () => {
  return (
    <div
      className="position-relative"
      style={{
        backgroundImage: `url(${banner5})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container  z-3">
        <div className="row ">
          <div className="col-sm-6">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              loop={true}
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
                        <div className="testinomial-data d-flex align-items-center justify-content-center me-3 ">
                          <img
                            src={reser1}
                            alt=""
                            className="rounded-circle  w-100"
                          />
                        </div>
                        <div className="">
                          <p className="m-0 fs-6 my-fontcolor my-fontFamily ">
                            {slide.username}{" "}
                          </p>
                          <p className="m-0 fs-6  my-fontFamily text-white">
                            {slide.review}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="col-sm-6 ">
            <div className=" text-center ">
              <div className="mt-4  mb-4 bg-dark ">
                <div className="p-4">
                  <h2 className="mb-4 text-white my-fontFamily ">
                    Opening Hours
                  </h2>

                  <Row className="mb-4">
                    <Col xs={6} className="text-center">
                      <p className="text-white">Sunday to Tuesday</p>
                      <p className="text-white fs-3 my-fontFamily">10:00 AM</p>
                      <p className="text-white fs-3 my-fontFamily">09:00 PM</p>
                    </Col>

                    <Col xs={6} className="text-center">
                      <p className="text-white">Friday to Saturday</p>
                      <p className="text-white fs-3 my-fontFamily">10:00 AM</p>
                      <p className="text-white fs-3 my-fontFamily">09:00 PM</p>
                    </Col>
                  </Row>

                  <Button
                    buttonText="MAKE A RESERVATION"
                    navigateTo="/appointment"
                  />

                  <div className="mt-4 text-white ">
                    <p className="mb-2 ">
                      You can also call: <span>8106597380</span> to make a
                      reservation.
                    </p>
                    <p className="d-flex align-items-center justify-content-center">
                      <MapPin size={16} />
                      Plot No 1-98/77, Madhapur, Hyderabad
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Grooming />
    </div>
  );
};

export default Reservation;
