import React from "react";
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
                Looking for the perfect solution to frizzy, unmanageable hair?
                Kristane offers premium Keratin Hair Treatment in Hyderabad,
                delivering silky, smooth, and healthy locks that transform your
                look. Whether you're struggling with dryness, breakage, or
                dullness, our advanced keratin treatments are tailored to
                rejuvenate your hair and restore its natural shine.
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                Located in the heart of Madhapur, Kristane is your go-to
                destination for high-quality hair care services. Our expert
                stylists use globally trusted products and innovative techniques
                to ensure long-lasting results. The keratin treatment not only
                smoothens your hair but also strengthens it, making it resistant
                to damage caused by heat styling and pollution.
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                Why choose Kristane? We prioritize personalized care, offering a
                consultation to understand your hair’s unique needs. Our
                commitment to excellence has made us a trusted choice for
                Keratin Hair Treatment in Madhapur and surrounding areas.
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                Experience the ultimate transformation with Kristane. Say
                goodbye to frizz and hello to sleek, manageable hair. Book your
                appointment today and discover why we are the preferred
                destination for keratin hair treatments in Hyderabad and
                Madhapur!
              </p>
            </Col>
            <div className="col">
              <div className="row d-flex justify-content-between h-100">
                <div className="col-sm-6 mt-5  p-3">
                  <Image
                    src={before}
                    alt="Hair treatment service at Kristane salon"
                    className="img-fluid mt-5 w-100  "
                  />
                </div>
                <div className="col-sm-6 p-3">
                  <Image
                    src={after}
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

export default KeratinTreatment;
