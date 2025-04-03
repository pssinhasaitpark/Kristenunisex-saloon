import React from "react";
import Heading from "../../Heading/Heading";
const services = [
  {
    title: "Hair Care",
    description:
      "At Kristane, we take immense pride in transforming people. Our hair experts offer the perfect solutions.",
  },
  {
    title: "Skin Care",
    description:
      "Kristane offers a wide range of skin care treatments for women, men and teens, meeting their diverse needs.",
  },
  {
    title: "Body Care",
    description:
      "Walk in to our ever so bliss-inspiring Spa and Salon and you will exactly know why your body is the temple of life.",
  },
  {
    title: "Makeup",
    description:
      "A combined man years of 40 years in wedding make-up and hair, fashion and photographic make-up.",
  },
  {
    title: "Colour",
    description:
      "Your colour expert will listen to your colour goals and needs whilst assessing your skin tone, eye colour and hair texture.",
  },
  {
    title: "Treatment",
    description:
      "Your hairdresser will prescribe the perfect treatment and haircare solution to maintain beautiful hair and a healthy scalp.",
  },
];
const OurServices = () => {
  return (
    <div className="bg-common ">
      '
      <div className="container">
        <Heading
          title="Our Services"
          backText="Services"
          subtitle1="hair & beauty"
        />

        <div className="row">
          {services.map((service, index) => (
            <div className="col-sm-4 py-3" key={index}>
              <div className="text-center  service-border p-4">
                <p className="my-fontFamily fs-4  ">{service.title}</p>
                <p className="my-fontFamily2 fs-6  ">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
