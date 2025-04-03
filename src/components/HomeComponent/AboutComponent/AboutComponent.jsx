import React from "react";
import { Aboutcomponent } from "../../../assets/index";
import {
  Aboutus,
  Aboutus2,
  Experts,
  Footer,
  Footermenu,
  Navbar,
  Reservation2,
  Style1,
} from "../../index";

const slide = [
  {
    image: Aboutcomponent,
    badge: "W H O  A R E   W E",
    heading: "About Us",
    subheading: "Our History",
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
          backgroundImage: `url(${Aboutcomponent})`,
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

      <Aboutus />
      <Aboutus2 />
      <Style1 />
      <Experts />
      <Reservation2 />
      <Footermenu />
      <Footer />
    </>
  );
};

export default AboutComponent;
