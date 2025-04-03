import React from "react";
import {
  Navbar,
  ImageSlider,
  Aboutus,
  Aboutus2,
  Style1,
  Menubook,
  Amazing,
  Experts,
  OurServices,
  Reservation2,
  Footer,
  Footermenu,
  Reservation,
} from "../components/index";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <ImageSlider />
      <Aboutus />
      <Aboutus2 />
      <Style1 />
      <Reservation />
      <Menubook />
      <Amazing />
      <Experts />
      <OurServices />
      <Reservation2 />
      <Footermenu />
      <Footer />
    </>
  );
};

export default Homepage;
