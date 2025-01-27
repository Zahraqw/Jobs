import React from "react";
import "./CustomCheckbox.css";

const CustomCheckbox = ({ id, label }) => {
  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        id={id}
        style={{
          color: "white",
        }}
      />
      {label}
    </label>
  );
};

export default CustomCheckbox;
