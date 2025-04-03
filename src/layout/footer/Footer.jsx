import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../footer/Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer py-4">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col xs={12} md={6} className="mb-2 mb-md-0">
            <p className="mb-0">
              © {new Date().getFullYear()} by virtuesys.com
            </p>
          </Col>
          <Col xs={12} md={6} className="text-md-end">
            <p className="mb-0">Privacy & Policy</p>
          </Col>
        </Row>
      </Container>
      <div className="scroll-to-top" onClick={scrollToTop}>
        &#8679;
      </div>
    </footer>
  );
};

export default Footer;
