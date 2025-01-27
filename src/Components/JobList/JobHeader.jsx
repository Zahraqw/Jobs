import React, { useState } from "react";
import { FaTh, FaList } from "react-icons/fa";

const JobHeader = ({ totalJobs, startIndex, endIndex, setView }) => {
  const [sortBy, setSortBy] = useState("NewestPost");

  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div className="header-lable">
        Showing
        <span className="bold-num ms-1">
          {startIndex}-{endIndex}
        </span>
        of <span className="bold-num ms-1">{totalJobs}</span> jobs
      </div>

      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center me-3">
          <span className="me-2 header-lable">Sort By:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="form-select custom-select"
            style={{ width: "150px" }}
          >
            <option value="NewestPost" className="bold-num">
              Newest Post
            </option>
            <option value="OldestPost" className="bold-num">
              Oldest Post
            </option>
          </select>
        </div>

        <div className="d-flex">
          <button
            onClick={() => setView("grid")}
            className="btn btn-light grid-list"
            aria-label="Grid View"
          >
            <FaTh />
          </button>

          <button
            onClick={() => setView("list")}
            className="btn btn-light grid-list"
            aria-label="List View"
          >
            <FaList />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobHeader;
