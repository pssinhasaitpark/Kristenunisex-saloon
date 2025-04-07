import React from "react";
import Button from "../../Button/Button";
import "./Footermenu.css";

const Footermenu = () => {
  return (
    <div className="bg-dark   py-5 ">
      <div className="container my-5 py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 text-center text-md-start mb-4">
            <h3 className="my-fontcolor my-fontFamily">About Us</h3>
            <p className="text-white footer-text fw-light">
              With rave reviews from Indore locals and glowing online
              feedback, our Unisex Salon has quickly become a go-to destination
              for those in the area. Whether you're in need of a fresh haircut,
              rejuvenating treatment, or a full makeover, we’ve got everything
              you need.
            </p>
            <Button buttonText="English" navigateTo="/menu" />
          </div>
          <div className="col-12 col-md-3 text-center text-md-start mb-4">
            <h3 className="my-fontcolor my-fontFamily">Contact Info</h3>
            <p className="text-white footer-text fw-light">
              Flat No 1-98/7/1 Fresh & Quality Supermarket Building, Arunodaya
              Colony, Indore , Madhya Pradesh-452001
            </p>
            <h3 className="my-fontcolor my-fontFamily">123456789</h3>
            <h3 className="my-fontcolor my-fontFamily">123455678</h3>
          </div>
          <div className="col-12 col-md-4 text-center text-md-start">
            <h3 className="my-fontcolor my-fontFamily">Subscribe</h3>
            <p className="text-white footer-text fw-light">
              Want to be notified when we launch a new template or an update?
              Just sign up and we'll send you a notification by email.
            </p>
            <form action="">
              <div className="d-flex border p-1 rounded">
                <input
                  type="email"
                  className="form-control bg-transparent border-0 text-white"
                  placeholder="Enter your email"
                />
                <Button buttonText="SUBSCRIBE" navigateTo="/#" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footermenu;
