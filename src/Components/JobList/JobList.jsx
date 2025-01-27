import React, { useState } from "react";
import {
  DUMMY_JOB_DATA,
  FILTER_OPTIONS,
  CATEGORIES,
  LOCATIONS,
  ITEMS_PER_PAGE,
} from "constants";
import {
  JobCard,
  JobHeader,
  Pagination,
  FilterForm,
  EmailInputForm,
} from "Components";
import "./JobList.css";

const JobList = () => {
  const totalJobs = DUMMY_JOB_DATA.length;
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastJob = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstJob = indexOfLastJob - ITEMS_PER_PAGE;
  const currentJobs = DUMMY_JOB_DATA.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="job-list-wrapper ps-5 pt-5">
      <div className="row">
        <div className="col-3 p-4">
          <EmailInputForm />
          <div className="filter-container">
            <FilterForm
              DUMMY_JOB_DATA={DUMMY_JOB_DATA}
              FILTER_OPTIONS={FILTER_OPTIONS}
              CATEGORIES={CATEGORIES}
              LOCATIONS={LOCATIONS}
            />
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
              itemsPerPage={ITEMS_PER_PAGE}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;
