import React from "react";

const Filter = ({ label, value, onChange }) => {
  return (
    <div className="filter">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Filter by ${label}`}
      />
    </div>
  );
};

export default Filter;
