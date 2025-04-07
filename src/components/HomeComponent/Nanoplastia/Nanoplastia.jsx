import React, { useState } from "react";
import {
  nanoplastia,
  nanoplastiabefore,
  nanoplastiaafter,
} from "../../../assets/index";
import { Footer, Footermenu, Navbar } from "../../index";
import { Col, Container, Image, Row } from "react-bootstrap";

const slide = [
  {
    image: nanoplastia,
    badge: "SINCE.2015",
    heading: "Nanoplastia Hair Treatment",
    subheading: "Hair Care",
  },
];

const Nanoplastia = () => {
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
          backgroundImage: `url(${nanoplastia})`,
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
              <p className="fs-6 fw-light letter-spacing">{item.badge}</p>
              <p className="my-fontFamily fs-1 fw-light">{item.heading}</p>
              <p className="my-fontcolor fs-3 fw-light">{item.subheading}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="salon-content p-5 m-5">
        <Container>
          <Row className="d-flex align-items-stretch my-5 py-5">
            <Col
              lg={6}
              md={6}
              className="d-flex flex-column justify-content-center p-5 mb-5"
            >
              <h1 className="my-fontFamily fs-2">Best Nanoplastia Hair Treatment In Indore</h1>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                Discover the secret to smooth, frizz-free, and healthy hair with
                Nanoplastia Hair Treatment in Indore. At Salon, we
                specialize in transforming dull and damaged hair into silky,
                manageable locks. Nanoplastia is a revolutionary, chemical-free
                treatment designed to deeply nourish and repair your hair.
                Unlike traditional straightening methods, it uses nano-molecular
                technology to penetrate the hair shaft and restore its natural
                strength, shine, and elasticity.
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                If you’re in search of Nanoplastia Hair Treatment in Indore,
                Salon is your go-to destination. Our salon is equipped with
                experienced professionals who tailor the treatment to suit your
                unique hair type and concerns. Whether you’re dealing with split
                ends, dryness, or unmanageable frizz, our Nanoplastia treatment
                works wonders to deliver long-lasting results without harsh
                chemicals.
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                Located in the bustling heart of Indore, our salon offers a
                relaxing environment for all your hair care needs. Say goodbye
                to harmful straightening techniques and hello to healthier,
                naturally beautiful hair with Nanoplastia.
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                Visit Salon in Indore or Indore to experience the
                difference. Book your appointment today and embark on a journey
                to rediscover your hair’s true potential! Your dream hair is
                just a treatment away.
              </p>
            </Col>
            <div className="col">
              <div className="row d-flex justify-content-between h-100">
                <div className="col-sm-6 mt-5 p-3">
                  <Image
                    src={nanoplastiabefore}
                    alt="Nanoplastia Hair Treatment Before"
                    className="img-fluid mt-5 w-100"
                    onClick={() => handleImageClick(nanoplastiabefore)} 
                    style={{ cursor: "pointer" }} 
                  />
                </div>
                <div className="col-sm-6 p-3">
                  <Image
                    src={nanoplastiaafter}
                    alt="Nanoplastia Hair Treatment After"
                    className="img-fluid mb-4 w-100"
                    onClick={() => handleImageClick(nanoplastiaafter)} 
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
          </Row>
        </Container>
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

      <Footermenu />
      <Footer />
    </>
  );
};

export default Nanoplastia;
