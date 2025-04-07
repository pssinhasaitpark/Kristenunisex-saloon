import React, { useState } from "react";
import { hairsalon, hairsalonmen, hairsalonwomen } from "../../../assets/index";
import { Footer, Footermenu, Navbar } from "../../index";
import { Col, Container, Image, Row } from "react-bootstrap";

const slide = [
  {
    image: hairsalon,
    badge: "SINCE.2015",
    heading: "Hair Salon",
    subheading: "Hair Care",
  },
];

const HairSalon = () => {
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
          backgroundImage: `url(${hairsalon})`,
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

      <div className="salon-content p-2 m-4">
        <Container>
          <Row className="d-flex align-items-stretch">
            <Col
              lg={6}
              md={12}
              className="d-flex flex-column justify-content-center"
            >
              <h1 className="my-fontFamily fs-2 ">Best Hair Salon</h1>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                At Our Salon, we believe that your hair is more than just
                strands; it's an extension of your personality. Our salon is
                renowned for offering a blend of expertise, creativity, and care
                that sets us apart.
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                When it comes to hair care, we prioritize the health of your
                hair above all. From customized treatments to luxurious hair
                spas, we ensure your hair looks stunning and stays healthy.
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                Looking for a salon that offers the latest trends in haircuts,
                coloring, and styling? Kristane is your go-to destination.
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
              At Our Salon, every client receives personalized attention,
                ensuring you leave with a look that turns heads and a confidence
                that speaks volumes.
              </p>
            </Col>
            <div className="col">
              <div className="row d-flex justify-content-between h-100">
                <div className="col-sm-6 mt-5">
                  <Image
                    src={hairsalonmen}
                    alt="Hair treatment service at Kristane salon"
                    className="img-fluid mt-5 w-100"
                    onClick={() => handleImageClick(hairsalonmen)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="col-sm-6">
                  <Image
                    src={hairsalonwomen}
                    alt="Hair treatment service at Kristane salon"
                    className="img-fluid mb-4 w-100"
                    onClick={() => handleImageClick(hairsalonwomen)}
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

export default HairSalon;
