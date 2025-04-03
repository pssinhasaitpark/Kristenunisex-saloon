import React from "react";
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
          <Row className="d-flex align-items-stretch  ">
            <Col
              lg={6}
              md={12}
              className="d-flex flex-column justify-content-center "
            >
              <h1 className="my-fontFamily fs-2 ">
                Best Hair Salon in Hyderabad
              </h1>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                At Kristane, we believe that your hair is more than just
                strands; it's an extension of your personality. Nestled in the
                heart of Madhapur, our salon is renowned as the best hair salon
                in Madhapur and Hyderabad, offering a blend of expertise,
                creativity, and care that sets us apart.
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                When it comes to hair care, we prioritize the health of your
                hair above all. From customized treatments to luxurious hair
                spas, we ensure your hair looks stunning and stays healthy. Our
                team of best hair stylists are skilled in crafting hairstyles
                that suit your features, lifestyle, and preferences, making
                every visit a transformational experience.
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                Looking for a salon that offers the latest trends in haircuts,
                coloring, and styling? Kristane is your go-to destination. Our
                expert stylists stay updated with global trends, so whether
                you're looking for a sleek bob, vibrant highlights, or a classic
                cut, we've got you covered. We also specialize in wedding and
                party hairstyles, ensuring you shine on your special day.
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                Being the best hair salon in Hyderabad, we use only
                premium-quality, hair-friendly products that protect and nourish
                your tresses. Our services include precision haircuts,
                rejuvenating treatments, and advanced hair coloring techniques
                that ensure perfection every time.
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                At Kristane, every client receives personalized attention,
                ensuring you leave with a look that turns heads and a confidence
                that speaks volumes. Whether you're in need of a simple trim or
                a complete makeover, our team is here to make it happen.
              </p>
              <p className="text-secondary my-fontFamily2 fw-lighter">
                Visit Kristane and experience why we are celebrated as the best
                hair salon in Madhapur. Elevate your hair game with us and
                discover the ultimate blend of hair care and style. Your dream
                hair is just an appointment away!
              </p>
            </Col>
            <div className="col">
              <div className="row d-flex justify-content-between h-100">
                <div className="col-sm-6 mt-5 ">
                  <Image
                    src={hairsalonmen}
                    alt="Hair treatment service at Kristane salon"
                    className="img-fluid mt-5 w-100  "
                  />
                </div>
                <div className="col-sm-6">
                  <Image
                    src={hairsalonwomen}
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

export default HairSalon;
