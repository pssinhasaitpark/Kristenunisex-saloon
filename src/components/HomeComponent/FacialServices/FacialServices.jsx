import React from "react";
import { facial, facialservices, facialservicess } from "../../../assets/index";
import { Footer, Footermenu, Navbar } from "../../index";
import { Col, Container, Image, Row } from "react-bootstrap";

const slide = [
  {
    image: facial,
    badge: "SINCE.2015",
    heading: "Facial Services",
    subheading: "Beauty Services",
  },
];

const FacialServices = () => {
  return (
    <>
      <Navbar />
      <div
        className="vh-100 w-100"
        style={{
          backgroundColor: "#000000a1",
          backgroundImage: `url(${facial})`,
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
              <p className="fs-6 fw-light letter spacing">{item.badge}</p>
              <p className="my-fontFamily fs-1 fw-light">{item.heading}</p>
              <p className="my-fontcolor fs-3 fw-light">{item.subheading}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="salon-content p-5 m-5 ">
        <Container>
          <Row className="d-flex align-items-stretch my-5 py-5 ">
            <Col
              lg={6}
              md={6}
              className="d-flex flex-column justify-content-center  p-5 mb-5  "
            >
              <h1 className="my-fontFamily fs-2 ">
                Best Facial Services In Madhapur
              </h1>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                Pamper your skin with Kristane Spa’s luxurious facial services
                in Madhapur, designed to rejuvenate and restore your natural
                glow. Conveniently located in the heart of the city, Kristane is
                your go-to destination for personalized skincare solutions that
                cater to all skin types.
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                Whether you're preparing for a special occasion or simply
                indulging in some self-care, our expert aestheticians offer a
                range of advanced facials tailored to your needs. From hydrating
                facials to anti-aging treatments, every session is crafted with
                precision, using premium products and cutting-edge techniques.
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                Searching for facial services near me? Kristane Spa stands out
                with its serene ambiance, experienced professionals, and
                commitment to quality. Our signature facials not only cleanse
                and nourish your skin but also help reduce fine lines,
                blemishes, and dullness, leaving you feeling refreshed and
                confident.
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                At Kristane, we believe in enhancing your skin’s health while
                providing a relaxing experience. Visit us today to experience
                the finest facial services in Madhapur and redefine your
                skincare routine. Book your appointment now and let your journey
                to radiant skin begin.
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                Rediscover beauty at Kristane Unisex Salon—where every facial is
                a step toward glowing confidence.
              </p>
            </Col>
            <div className="col">
              <div className="row d-flex justify-content-between h-100">
                <div className="col-sm-6 mt-5  p-3">
                  <Image
                    src={facialservices}
                    alt="Hair treatment service at Kristane salon"
                    className="img-fluid mt-5 w-100  "
                  />
                </div>
                <div className="col-sm-6 p-3 mb-2">
                  <Image
                    src={facialservicess}
                    alt="Hair treatment service at Kristane salon"
                    className="img-fluid mb-5 w-100 "
                  />
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      <Footermenu />
      <Footer />
    </>
  );
};

export default FacialServices;
