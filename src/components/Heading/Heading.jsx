import React from "react";
import "./Heading.css";

const Heading = ({ title, subtitle1, backText }) => {
  return (
    <div className="text-center py-lg-5 py-1">
      <div className="position-relative">
        <p
          className="m-0 text-uppercase sec-subtitle my-fontcolor"
          style={{
            fontSize: "calc(1rem + 0.2vw)",
          }}
        >
          {subtitle1}
        </p>
        <p
          className="sec-backtext m-0 position-absolute top-50 start-50 translate-middle opacity-25"
          style={{
            fontSize: "calc(5rem + 3vw)",
          }}
        >
          {backText}
        </p>
      </div>
      <p
        className="sec-title  m-0"
        style={{
          fontSize: "calc(1rem + 2vw)",
        }}
      >
        {title}
      </p>
    </div>
  );
};

export default Heading;
