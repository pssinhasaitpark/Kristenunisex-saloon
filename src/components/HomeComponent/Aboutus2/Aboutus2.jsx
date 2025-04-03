import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { salon } from "../../../assets/index";

const Aboutus2 = () => {
  return (
    <div className="bg-dark py-5">
      <div className="container py-5 my-5">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-1 col-md-6 mb-4 mb-md-0">
            <img
              src={salon}
              alt="about"
              className="img-fluid w-100 mx-auto d-block d-md-inline"
            />
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
            <p className="about-badge fw-light my-fontcolor my-fontFamily2 mb-1">
              10 Years of Experience
            </p>
            <h1 className="about-heading my-fontFamily text-white">
              Hair Stylist
            </h1>
            <p className="sub-about my-fontFamily2 fw-light text-white">
              At Kristane Unisex Salon, we are dedicated to providing
              exceptional customer service and creating a memorable experience
              for each and every one of our clients. We believe that beauty is
              more than just skin deep, and we strive to help each client feel
              confident and empowered, both inside and out.
              <br />
              Visit Kristane Unisex Salon today and let us help you look and
              feel your best!
            </p>
            <div className="d-flex pt-4 justify-content-center justify-content-md-start">
              <div className="d-flex align-items-center justify-content-center me-3">
                <IoCallOutline className="fs-1 my-fontcolor" />
              </div>
              <div>
                <p className="m-0 fs-6 my-fontcolor my-fontFamily">
                  Reservation
                </p>
                <p className="m-0 fs-4 my-fontFamily text-white">123466790</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus2;
