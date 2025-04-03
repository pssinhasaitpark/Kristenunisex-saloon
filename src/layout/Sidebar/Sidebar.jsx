import React from "react";
import { Button, Container } from "react-bootstrap";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sticky-bar">
      <div className="d-flex  flex-column justify-content-end  ">
        <Button
          href="https://www.facebook.com"
          target="_blank"
          variant="link"
          className="social-icon"
        >
          <FaFacebook size={30} />
        </Button>

        <Button
          href="https://www.instagram.com"
          target="_blank"
          variant="link"
          className="social-icon"
        >
          <FaInstagram size={30} />
        </Button>
        <Button
          href="https://wa.me/"
          target="_blank"
          variant="link"
          className="social-icon"
        >
          <FaWhatsapp size={30} />
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
