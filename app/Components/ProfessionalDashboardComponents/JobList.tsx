import React from "react";
import { useEffect, useState } from "react";

const JobList = ({ onSelectJob, jobs }) => {


  
  return (
    <div className="h-auto border-r border-gray-600 overflow-y-auto max-h-screen [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
      <ul>
        {jobs.map((job, index) => (
          <li
            key={index}
            className="job-item p-3 border-b border-gray-300 cursor-pointer hover:bg-gray-300"
            onClick={() => onSelectJob(job)}
          >
            <h3 className="text-black font-extrabold">{job.positionName}</h3>
            <h5 className="font-semibold">{job.companyName}</h5>
            <p>
              Contact {job.contactEmail}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
