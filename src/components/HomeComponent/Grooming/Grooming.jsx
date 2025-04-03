import React from "react";
const service = [
  {
    id: 1,
    heading: "Grooming Center",
    subheading:
      "A grooming center offers professional grooming services, including haircuts, shaves, manicures, and facials for men.,",
  },
  {
    id: 2,
    heading: "Beauty Haven",
    subheading:
      "Your one-stop-shop for all your beauty needs in a luxurious and relaxing atmosphere.",
  },
  {
    id: 3,
    heading: "Salon",
    subheading:
      "A stylish space where beauty, grooming, and relaxation come together for a luxurious experience",
  },
];
const Grooming = () => {
  return (
    <div className="bg-white py-5  ">
      <div className="container">
        <div className="row py-5 ">
          <div className="row d-flex justify-content-center">
            {service.map((item) => (
              <div className="col-sm-4 mb-4" key={item.id}>
                <p className="my-fontFamily text-dark h2">{item.heading}</p>
                <p className="my-fontFamily text-secondary">
                  {item.subheading}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grooming;
