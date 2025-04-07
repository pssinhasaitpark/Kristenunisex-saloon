import React from "react";
import Heading from "../../Heading/Heading";
const services = [
  {
    title: "Hair Care",
    description:
      "At our salon, we take great pride in bringing out the best in every client, and we are dedicated to helping you achieve the look you desire.",
  },
  {
    title: "Skin Care",
    description:
      "Our salon offers a comprehensive range of skincare treatments for women, men, and teens, catering to all their unique needs.",
  },
  {
    title: "Body Care",
    description:
      "Step into our tranquil spa and salon, and you'll instantly feel why your body truly deserves the best care.",
  },
  {
    title: "Makeup",
    description:
      "With over 40 years of combined experience in wedding makeup, hairstyling, fashion, and photographic makeup,.",
  },
  {
    title: "Colour",
    description:
      "Our color expert will carefully listen to your goals and preferences, eye color, and hair texture to create the perfect shade for you.",
  },
  {
    title: "Treatment",
    description:
      "Our expert hairdressers will recommend the ideal treatment and haircare routine to keep your hair vibrant and your scalp healthy.",
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
