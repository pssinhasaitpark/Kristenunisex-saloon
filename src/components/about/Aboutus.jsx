import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { about, about2 } from "../../assets/index";

const Aboutus = () => {
  return (
    <div className="bg-white py-5 ">
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-sm-6 d-flex flex-column justify-content-center ">
            <p className="about-badge fw-light  my-fontcolor my-fontFamily2 mb-1">
              Kristane
            </p>
            <h1 className="about-heading my-fontFamily fw-light">
              {" "}
              Few Words About Us
            </h1>
            <div className="sub-about my-fontFamily2 fw-light">
              Kristane Unisex Salon is a premier beauty destination that offers
              a wide range of professional hair and beauty services. Our salon
              is dedicated to providing high-quality services that are tailored
              to meet the unique needs and preferences of each of our clients.
              <br />
              At Kristane Unisex Salon, we believe that every person deserves to
              look and feel their best, which is why we strive to create a warm,
              welcoming environment that encourages relaxation and rejuvenation.
              Our team of skilled and experienced hairstylists, makeup artists,
              and beauty experts is passionate about their work and is committed
              to helping each client achieve their desired look.
            </div>
            <div className="d-flex pt-5">
              <div className="d-flex align-items-center justify-content-center me-3">
                <IoCallOutline className="fs-1  my-fontcolor" />
              </div>
              <div className="">
                <p className="m-0 fs-6 my-fontcolor my-fontFamily">
                  Reservation
                </p>
                <p className="m-0 fs-4  my-fontFamily">123466790</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <img
              src={about2}
              alt="about"
              className="about-image w-100 mt-lg-5 mb-lg-1"
            />
          </div>
          <div className="col-sm-3">
            <img
              src={about}
              alt="about"
              className="about-image w-100 mt-lg-1 mb-lg-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
