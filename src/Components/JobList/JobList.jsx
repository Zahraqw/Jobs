import React, { useState } from "react";
import dummyJobData from "dummyData";
import { JobCard, JobHeader, Pagination } from "Components";
import "./JobList.css";

const JobList = () => {
  const totalJobs = dummyJobData.length;
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // Number of items per page (adjust as needed)

  const indexOfLastJob = currentPage * itemsPerPage;
  const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  const currentJobs = dummyJobData.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="job-list-wrapper">
      <div className="row">
        {/* Filter Section - takes 4 columns */}
        <div className="col-3">
          <div className="filter-container">
            <div>Filters</div>
            {/* Add filter elements here */}
          </div>
        </div>

        <div className="col-8 mt-2">
          <JobHeader
            totalJobs={totalJobs}
            startIndex={indexOfFirstJob + 1}
            endIndex={indexOfLastJob}
            setView={setView}
          />

          <div className="row">
            {currentJobs.map((job) => (
              <div
                key={job.id}
                className={`${
                  view === "grid"
                    ? "col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-3"
                    : "col-12 mb-3"
                }`}
              >
                <JobCard job={job} view={view} />
              </div>
            ))}
          </div>
          <div className="d-flex">
            <Pagination
              currentPage={currentPage}
              totalItems={totalJobs}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;
