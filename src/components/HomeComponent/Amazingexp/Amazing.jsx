import React from "react";
import { banner2 } from "../../../assets";
import Heading from "../../Heading/Heading";

const Amazing = () => {
  return (
    <div
      className="position-relative"
      style={{
        backgroundImage: `url(${banner2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "40vh",
      }}
    >
      <div className="container py-5 ">
        <Heading
          title="Amazing Experience"
          backText=""
          subtitle1="Watch Our Video"
        />
      </div>
    </div>
  );
};

export default Amazing;
