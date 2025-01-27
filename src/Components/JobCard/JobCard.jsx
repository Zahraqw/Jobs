import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaClock, FaMapMarkerAlt, FaCheck, FaBookmark } from "react-icons/fa";
import CustomBadge from "../CustomBadge/CustomBadge";
import "./JobCard.css";

const JobCard = ({ job, view }) => {
  return (
    <Card className={`mb-4 ${view === "grid" ? "grid-view" : "list-view"}`}>
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between ">
          <div className="d-flex align-items-center">
            <div className="image-wrapper">
              <img
                src={job.image}
                alt="company-logo"
                className="rounded-circle"
                width={"20px"}
                height={"20px"}
              />
            </div>
            <Card.Title className="mb-1 ms-2 card-title">
              {job.title}
            </Card.Title>
          </div>

          <CustomBadge color="#f4f4f4" textColor="white">
            {job.type}
          </CustomBadge>
        </div>

        <Card.Text className="description mt-4 mb-3">
          {job.description}
        </Card.Text>

        <div className="d-flex align-items-center mb-3 time-location">
          <FaClock className="me-1 icons-card" />
          <span className="me-2">{job.timePosted}</span>
          <FaMapMarkerAlt className="ml-3 me-1 icons-card" />
          <span>{job.location}</span>
        </div>

        <div className="d-flex justify-content-between">
          <span className="salary">
            ${job.salary}
            <span className="perMonth">/month</span>
          </span>

          <div>
            <Button size="sm" className="footer-icons">
              <FaCheck />
            </Button>
            <Button size="sm" className="mr-2 footer-icons">
              <FaBookmark />
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default JobCard;
