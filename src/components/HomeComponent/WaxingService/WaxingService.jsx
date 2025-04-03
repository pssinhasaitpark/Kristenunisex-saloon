import React from "react";
import { waxing, menwax, womenwax } from "../../../assets/index";
import { Footer, Footermenu, Navbar } from "../../index";
import { Col, Container, Image, Row } from "react-bootstrap";

const slide = [
  {
    image: waxing,
    badge: "SINCE.2015",
    heading: "Waxing Service",
    subheading: "Luxury Salon",
  },
];

const WaxingService = () => {
  return (
    <>
      <Navbar />
      <div
        className="vh-100 w-100"
        style={{
          backgroundColor: "#000000a1",
          backgroundImage: `url(${waxing})`,
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
                Keratin Hair Treatment in Hyderabad
              </h1>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                Looking for smooth and flawless skin? Kristane is your go-to
                destination for the best waxing services in Madhapur. Our
                experienced professionals use premium-quality products to ensure
                a gentle, hygienic, and comfortable waxing experience tailored
                to your skin type. Whether it's a quick touch-up or full-body
                waxing, we prioritize your comfort and deliver impeccable
                results every time
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                At Kristane, we understand that every individual has unique
                skincare needs. That’s why our wide range of waxing services in
                Hyderabad includes options for sensitive skin, ensuring a
                pain-free experience with long-lasting results. Our hygienic
                practices and expert techniques guarantee smooth, radiant skin
                while minimizing redness and irritation.
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                Conveniently located in Madhapur, Kristane combines luxury and
                affordability, making us the preferred choice for waxing
                enthusiasts across Hyderabad. Whether you’re preparing for a
                special occasion or simply looking to pamper yourself, our
                waxing service will leave you feeling confident and refreshed.
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                Book your appointment today and experience the unmatched care
                and expertise Kristane is known for. With Kristane, achieve
                silky smooth skin that lasts longer. Trust us for the best in
                waxing services in Hyderabad and feel the difference!
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                Let Kristane redefine your self-care routine with a touch of
                perfection.
              </p>
            </Col>
            <div className="col">
              <div className="row d-flex justify-content-between h-100">
                <div className="col-sm-6 mt-5  p-3">
                  <Image
                    src={menwax}
                    alt="Hair treatment service at Kristane salon"
                    className="img-fluid mt-5 w-100  "
                  />
                </div>
                <div className="col-sm-6 p-3 mb-2">
                  <Image
                    src={womenwax}
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

export default WaxingService;
