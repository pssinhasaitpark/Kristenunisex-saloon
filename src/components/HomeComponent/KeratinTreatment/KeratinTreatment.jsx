import React, { useState } from "react";
import { KeratinnTreatment, before, after } from "../../../assets/index";
import { Footer, Footermenu, Navbar } from "../../index";
import { Col, Container, Image, Row } from "react-bootstrap";

const slide = [
  {
    image: KeratinnTreatment,
    badge: "SINCE.2015",
    heading: "Keratin Treatment",
    subheading: "Hair Smoothing",
  },
];

const KeratinTreatment = () => {
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
          backgroundImage: `url(${KeratinnTreatment})`,
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
            <Col lg={6} md={6} className="d-flex flex-column justify-content-center p-5 mb-5">
              <h1 className="my-fontFamily fs-2">Keratin Hair Treatment</h1>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                Looking for the perfect solution to frizzy, unmanageable hair? Our Salon offers premium Keratin Hair Treatment, delivering silky, smooth, and healthy locks that transform your look.
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                The keratin treatment not only smoothens your hair but also strengthens it, making it resistant to damage caused by heat styling and pollution.
              </p>
            </Col>
            <div className="col">
              <div className="row d-flex justify-content-between h-100">
                <div className="col-sm-6 mt-5 p-3">
                  <Image
                    src={before}
                    alt="Before Keratin Treatment"
                    className="img-fluid mt-5 w-100"
                    onClick={() => handleImageClick(before)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="col-sm-6 p-3">
                  <Image
                    src={after}
                    alt="After Keratin Treatment"
                    className="img-fluid mb-4 w-100"
                    onClick={() => handleImageClick(after)}
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

export default KeratinTreatment;
