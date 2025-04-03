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
              From Hyderabad recommendations to online reviews, more people in
              the Madhapur area are finding their way to Kristane Unisex Salon!
              Call us today to schedule an appointment, or stop in and find out
              more.
            </p>
            <Button buttonText="English" navigateTo="/menu" />
          </div>
          <div className="col-12 col-md-3 text-center text-md-start mb-4">
            <h3 className="my-fontcolor my-fontFamily">Contact Info</h3>
            <p className="text-white footer-text fw-light">
              Flat No 1-98/7/1 Fresh & Quality Supermarket Building, Arunodaya
              Colony, Madhapur, Hyderabad, Telangana-500081
            </p>
            <h3 className="my-fontcolor my-fontFamily">8106597380</h3>
            <h3 className="my-fontcolor my-fontFamily">7286912437</h3>
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
