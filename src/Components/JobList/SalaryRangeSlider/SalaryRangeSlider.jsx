import React, { useState } from "react";
import "./SalaryRangeSlider.css";

const MIN_SALARY = 1000;
const MAX_SALARY = 100000;
const STEP = 1000;

const SalaryRangeSlider = () => {
  const [minValue, setMinValue] = useState(30000);
  const [maxValue, setMaxValue] = useState(80000);

  const handleMinChange = (event) => {
    const newValue = Number(event.target.value);
    if (newValue <= maxValue) setMinValue(newValue);
  };

  const handleMaxChange = (event) => {
    const newValue = Number(event.target.value);
    if (newValue >= minValue) setMaxValue(newValue);
  };

  return (
    <div className="salary-range-slider">
      <div className="slider-container">
        <div className="track"></div>

        <div
          className="range"
          style={{
            left: `${(minValue / MAX_SALARY) * 100}%`,
            width: `${((maxValue - minValue) / MAX_SALARY) * 100}%`,
          }}
        ></div>

        {/* Min slider */}
        <input
          type="range"
          min={MIN_SALARY}
          max={MAX_SALARY}
          step={STEP}
          value={minValue}
          onChange={handleMinChange}
          className="slider"
        />

        {/* Max slider */}
        <input
          type="range"
          min={MIN_SALARY}
          max={MAX_SALARY}
          step={STEP}
          value={maxValue}
          onChange={handleMaxChange}
          className="slider"
        />
      </div>
      <div className="salary-values">
        <div>
          From
          <div className="d-flex justify-content-center align-items-center salary-wrapper mt-2">{`$${minValue}`}</div>
        </div>
        <div>
          To
          <div className="d-flex justify-content-center align-items-center salary-wrapper mt-2">{`$${maxValue}`}</div>
        </div>
      </div>
    </div>
  );
};

export default SalaryRangeSlider;
