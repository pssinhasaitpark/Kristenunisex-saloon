import React from "react";
import { Style, haircut, womenhairstyle } from "../../assets/index";
import "./Style1.css";
import Heading from "../Heading/Heading";

const Style1 = () => {
  return (
    <div className="container py-5 my-5 ">
      <Heading
        title="Style Recommended"
        backText="Salon"
        subtitle1="Should Try"
      />

      <div className="row">
        <div className="col-sm-4">
          <div className="image-container position-relative">
            <img src={Style} alt="Style" className="w-100 image-slide" />
            <div className="overlay"></div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="image-container position-relative">
            <img src={haircut} alt="Haircut" className="w-100 image-slide" />
            <div className="overlay"></div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="image-container position-relative">
            <img
              src={womenhairstyle}
              alt="Women Hairstyle"
              className="w-100 image-slide"
            />
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Style1;
