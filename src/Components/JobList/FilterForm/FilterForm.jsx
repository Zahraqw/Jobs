import React, { useState } from "react";
import { FaMapMarkerAlt, FaBox } from "react-icons/fa";
import { Form, FormGroup, InputGroup } from "react-bootstrap";
import {
  Button,
  CustomBadge,
  CustomCheckbox,
  SalaryRangeSlider,
} from "Components";
import "./FilterForm.css";

const FilterForm = ({ DUMMY_JOB_DATA, FILTER_OPTIONS, CATEGORIES }) => {
  const getJobCount = (title, value) => {
    if (title === "Job Types") {
      return DUMMY_JOB_DATA.filter((job) => job.type === value).length;
    }
    if (title === "Experience Levels") {
      return DUMMY_JOB_DATA.filter((job) => job.experienceLevel === value)
        .length;
    }
    return 0;
  };

  return (
    <div className="filter-form">
      <Form.Group controlId="formLocation">
        <Form.Label className="filter-title my-4">Location</Form.Label>
        <InputGroup>
          <InputGroup.Text className="py-3">
            <FaMapMarkerAlt />
          </InputGroup.Text>
          <Form.Control type="text" placeholder="Search by location" />
        </InputGroup>
      </Form.Group>

      <Form.Group controlId="formCategory">
        <Form.Label className="filter-title my-4">Category</Form.Label>
        <InputGroup>
          <InputGroup.Text className="py-3">
            <FaBox />
          </InputGroup.Text>
          <Form.Control as="select">
            <option value="">Select Category</option>
            {CATEGORIES.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </Form.Control>
        </InputGroup>
      </Form.Group>

      <Form.Group>
        {FILTER_OPTIONS.map((option, index) => (
          <div key={index} className="filter-section mb-4">
            <Form.Label className="filter-title my-4">
              {option.title}
            </Form.Label>

            <div className="checkbox-group">
              {option.values.map((value, idx) => (
                <div
                  key={idx}
                  className="checkbox-wrapper d-flex justify-content-between align-items-center m-2"
                >
                  <CustomCheckbox id={value} label={value} />
                  <CustomBadge color="#f4f4f4" textColor="#5a6268">
                    {getJobCount(option.title, value)}
                  </CustomBadge>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Form.Group>
      <FormGroup>
        <Form.Label className="filter-title my-4">Salary Range</Form.Label>
        <SalaryRangeSlider />
      </FormGroup>
      <div className="d-flex mb-2 mt-5">
        <Button variant="primary" className="me-2" label="Apply Filter" />
        <Button variant="tertiary" label="Reset Filter" />
      </div>
    </div>
  );
};

export default FilterForm;
