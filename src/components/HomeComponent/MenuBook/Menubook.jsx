import { useState } from "react";
import Heading from "../../Heading/Heading";

export default function Menubook() {
  const [activeCategory, setActiveCategory] = useState("Womens");

  const categories = [
    { id: "Womens", label: "Womens", color: "#c0a080" },
    { id: "Facials", label: "Facials", color: "#c0a080" },
    { id: "Mens", label: "Mens", color: "#c0a080" },
  ];

  const services = {
    Womens: [
      { name: "Hair Styling", price: "250" },
      { name: "Head Massage", price: "250" },
      { name: "Hair Colour", price: "1000" },
      { name: "Hair Spa Starts", price: "1200+" },
      { name: "Hair Fall Treatment Starts", price: "1500+" },
      { name: "Dandruff Treatment Starts", price: "1500+" },
      { name: "Dryness Treatment Starts", price: "1500+" },
      { name: "Hair Styling", price: "850+" },
      { name: "Child Hair Styling", price: "750+" },
    ],
    Facials: [
      { name: "Fruit Facial", price: "600" },
      { name: "Banana Facial", price: "700" },
      { name: "Shahnaz Facial", price: "2000" },
      { name: "Pearl Facial", price: "1000" },
      { name: "Aroma Facial", price: "800" },
      { name: "O3+ Facial", price: "3500" },
      { name: "Anti Tan Clean Up", price: "500" },
      { name: "O3 Anti Tan Clean Up", price: "450" },
      { name: "Fruit Clean Up", price: "500" },
      { name: "Body Polishing", price: "8000" },
      { name: "Hands Polishing", price: "1500" },
      { name: "Full Back Polishing", price: "1500" },
    ],
    Mens: [
      { name: "Beard Trim", price: "150" },
      { name: "Shave", price: "150" },
      { name: "Amonia Free Colour", price: "1000+" },
      { name: "Highlights Global", price: "1500+" },
      { name: "Per Streak", price: "175" },
      { name: "Hair Spa", price: "1000" },
      { name: "Hair Fall Treatment", price: "1000+" },
      { name: "Balayage", price: "4000+" },
      { name: "Foilyage", price: "4000+" },
      { name: "Ombre Colour", price: "3000+" },
      { name: "Global Highlights", price: "5000+" },
      { name: "Root Touch Up", price: "1000+" },
      { name: "Highlight Per Streak", price: "350+" },
    ],
  };

  return (
    <div className="py-5 bg-dark text-white">
      <div className="container py-5 my-5">
        <Heading title="Menu Book" backText="" subtitle1="Hair & Beauty" />

        <div className="text-center mt-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`btn mx-2 ${
                activeCategory === category.id
                  ? "btn-light"
                  : "btn-outline-light"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="row mt-4">
          {services[activeCategory].map((service, index) => (
            <div
              key={index}
              className="col-12 col-md-6 d-flex justify-content-between align-items-center mb-3"
            >
              <span className="font-weight-light">{service.name}</span>
              <div className="d-flex align-items-center w-50">
                <div className="border-bottom border-dotted border-secondary flex-grow-1 mx-2"></div>
                <span className="text-warning font-weight-bold">
                  {service.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
