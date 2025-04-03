import React from "react";
import { useNavigate } from "react-router-dom";
import "../Button/Button.css";

const Button = ({ buttonText, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <div>
      <button className="custom-btn " onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
