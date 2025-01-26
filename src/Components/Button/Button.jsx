import React from "react";
import "./Button.css";

const Button = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  className = "",
}) => {
  return (
    <button
      className={`my-btn btn-${variant} ${className} ${
        disabled ? "btn-disabled" : ""
      }`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
