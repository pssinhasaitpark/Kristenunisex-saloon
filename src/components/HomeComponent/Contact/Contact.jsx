import React, { useState, useEffect } from "react";
import {
  Contactinfo,
  Footer,
  Footermenu,
  Navbar,
  Reservation2,
} from "../../../components/index";
import { banner12 } from "../../../assets/index";
import "./Contact.css";

const slide = [
  {
    image: banner12,
    badge: "L O C A T I O N",
    heading: "Contact Us",
    subheading: "Get In Touch",
  },
];

const Contact = () => {
  return (
    <>
      <Navbar />
      <div
        className="vh-100 w-100"
        style={{
          backgroundColor: "#000000a1",
          backgroundImage: `url(${banner12})`,
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
      <Contactinfo />
      <Reservation2 />
      <Footermenu />
      <Footer />
    </>
  );
};

export default Contact;
