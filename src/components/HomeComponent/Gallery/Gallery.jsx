import React, { useState } from "react";
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

const gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null); 

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closePreview = () => {
    setSelectedImage(null);
  };

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
              <img
                src={reser3}
                alt="Gallery 1"
                className="img-fluid"
                onClick={() => handleImageClick(reser3)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="col-12 col-md-4">
              <img
                src={gallery2}
                alt="Gallery 2"
                className="img-fluid h-75"
                onClick={() => handleImageClick(gallery2)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="col-12 col-md-4">
              <img
                src={gallery3}
                alt="Gallery 3"
                className="img-fluid"
                onClick={() => handleImageClick(gallery3)}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-4 mb-2">
          <div className="col-12 col-md-6">
            <img
              src={gallery4}
              alt="Gallery 4"
              className="img-fluid"
              onClick={() => handleImageClick(gallery4)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="col-12 col-md-6">
            <img
              src={gallery5}
              alt="Gallery 5"
              className="img-fluid"
              onClick={() => handleImageClick(gallery5)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-4 mt-1 py-5">
          <div className="col-12 col-md-4">
            <img
              src={gallery6}
              alt="Gallery 6"
              className="img-fluid"
              onClick={() => handleImageClick(gallery6)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="col-12 col-md-4">
            <img
              src={gallery7}
              alt="Gallery 7"
              className="img-fluid"
              onClick={() => handleImageClick(gallery7)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="col-12 col-md-4">
            <img
              src={gallery8}
              alt="Gallery 8"
              className="img-fluid"
              onClick={() => handleImageClick(gallery8)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="modal show d-block"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1050,
          }}
          onClick={closePreview}
        >
          <div
            className="modal-dialog modal-lg"
            style={{
              marginTop: "10vh",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="modal-content">
              <img
                src={selectedImage}
                alt="Preview"
                className="img-fluid"
                style={{ objectFit: "contain", maxHeight: "80vh" }}
              />
            </div>
          </div>
        </div>
      )}

      <Reservation2 />
      <Footermenu />
      <Footer />
    </>
  );
};

export default gallery;
