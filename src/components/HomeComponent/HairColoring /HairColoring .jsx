import React from "react";
import { haircolor, haircolor2, coloring } from "../../../assets/index";
import { Footer, Footermenu, Navbar } from "../../index";
import { Col, Container, Image, Row } from "react-bootstrap";

const slide = [
  {
    image: haircolor,
    badge: "SINCE.2015",
    heading: "Hair Coloring Services",
    subheading: "Unisex Salon",
  },
];

const HairColoring = () => {
  return (
    <>
      <Navbar />
      <div
        className="vh-100 w-100"
        style={{
          backgroundColor: "#000000a1",
          backgroundImage: `url(${haircolor})`,
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

      <div className="salon-content p-5 m-5 ">
        <Container>
          <Row className="d-flex align-items-stretch my-5 py-5 ">
            <Col
              lg={6}
              md={6}
              className="d-flex flex-column justify-content-center  p-5 mb-5  "
            >
              <h1 className="my-fontFamily fs-2 ">
                Best Hair Coloring Services In Madhapur
              </h1>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                Looking for the best hair coloring services in Madhapur? Look no
                further than Kristane, where artistry meets expertise. Located
                in the heart of Hyderabad, Kristane has earned a reputation for
                transforming hair into stunning works of art.
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                Our salon offers a wide range of hair coloring services in
                Hyderabad, tailored to suit your style and personality. Whether
                you’re looking for bold highlights, a subtle balayage, or a
                complete color transformation, our experienced stylists use
                premium products and advanced techniques to deliver exceptional
                results.
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                At Kristane, we believe in creating looks that are not only
                trendy but also enhance your natural beauty. Our team takes the
                time to understand your preferences, ensuring every session is
                personalized to your needs. From vibrant shades to natural
                tones, our color palette is as versatile as our clients’ unique
                tastes.
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                Why choose Kristane? We prioritize hair health, using only
                high-quality, ammonia-free products that nourish while coloring.
                Our welcoming ambiance and professional approach make every
                visit a relaxing experience.
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                Redefine your style with the best hair coloring services in
                Madhapur. Visit Kristane today and discover why we are the go-to
                destination for hair coloring services in Hyderabad! Let’s color
                your world with confidence.
              </p>
            </Col>
            <div className="col">
              <div className="row d-flex justify-content-between h-100">
                <div className="col-sm-6 mt-5  p-3">
                  <Image
                    src={haircolor2}
                    alt="Hair treatment service at Kristane salon"
                    className="img-fluid mt-5 w-100  "
                  />
                </div>
                <div className="col-sm-6 p-3">
                  <Image
                    src={coloring}
                    alt="Hair treatment service at Kristane salon"
                    className="img-fluid mb-4 w-100 "
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

export default HairColoring;
