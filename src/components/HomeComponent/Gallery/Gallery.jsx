import React from "react";
import {
  banner2,
  reser3,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
} from "../../../assets/index";
import { Footer, Footermenu, Navbar, Reservation2 } from "../../index";

const slide = [
  {
    image: banner2,
    badge: "P O R T P O L I O",
    heading: "Our Gallery",
    subheading: "Image Gallery",
  },
];

const AboutComponent = () => {
  return (
    <>
      <Navbar />
      <div
        className="vh-100 w-100"
        style={{
          backgroundColor: "#000000a1",
          backgroundImage: `url(${banner2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        {slide.map((item, index) => (
          <div
            key={index}
            className="slide d-flex justify-content-center align-items-center position-relative w-100 h-100 text-center"
          >
            <div className="slide-content text-white p-3">
              <p className="fs-6 fw-light">{item.badge}</p>
              <p className="my-fontFamily display-2 ">{item.heading}</p>
              <p className="my-fontcolor fs-3 fw-light">{item.subheading}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white my-5 py-5 ">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <img src={reser3} alt="Gallery 1" className="img-fluid" />
            </div>
            <div className="col-12 col-md-4">
              <img src={gallery2} alt="Gallery 2" className="img-fluid h-75" />
            </div>
            <div className="col-12 col-md-4">
              <img src={gallery3} alt="Gallery 3" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-4 mb-2">
          <div className="col-12 col-md-6">
            <img src={gallery4} alt="Gallery 4" className="img-fluid" />
          </div>
          <div className="col-12 col-md-6">
            <img src={gallery5} alt="Gallery 5" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-4 mt-1 py-5">
          <div className="col-12 col-md-4">
            <img src={gallery6} alt="Gallery 6" className="img-fluid" />
          </div>
          <div className="col-12 col-md-4">
            <img src={gallery7} alt="Gallery 7" className="img-fluid" />
          </div>
          <div className="col-12 col-md-4">
            <img src={gallery8} alt="Gallery 8" className="img-fluid" />
          </div>
        </div>
      </div>

      <Reservation2 />
      <Footermenu />
      <Footer />
    </>
  );
};

export default AboutComponent;
