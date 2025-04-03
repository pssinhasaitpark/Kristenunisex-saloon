import React from "react";
import { banner8 } from "../../../assets";
import {
  Footer,
  Footermenu,
  Menubook,
  Navbar,
  Reservation2,
} from "../../index";

const slide = [
  {
    image: banner8,
    badge: "S A L O N",
    heading: "Menu Book",
    subheading: "Hair & Beauty",
  },
];

const MenuComponent = () => {
  return (
    <>
      <Navbar />
      <div
        className="vh-100 w-100"
        style={{
          backgroundColor: "#000000a1",
          backgroundImage: `url(${banner8})`,
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
      <Menubook />
      <Reservation2 />
      <Footermenu />
      <Footer />
    </>
  );
};

export default MenuComponent;
