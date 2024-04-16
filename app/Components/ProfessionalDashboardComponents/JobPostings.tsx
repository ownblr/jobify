import { useEffect, useState } from "react";
import JobList from "./JobList";
import JobDescription from "./JobDescription";

const JobPostings = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    try {
      const getJobs = async () => {
        const data = await fetch("/api/jobs", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const jobs = await data.json();
        setJobs(jobs);
        setIsLoading(false);
      };
      getJobs();
    } catch (error) {
      console.log('Error fetching jobs:', error);
      setIsLoading(false)
    }
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!jobs || jobs.length === 0) {
    return <p>No jobs found</p>;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/3">
        <JobList onSelectJob={setSelectedJob} jobs={jobs} />
      </div>
      <div className="w-2/3">
        {selectedJob ? <JobDescription Job={selectedJob} /> : <JobDescription Job={jobs.at(0)}/> }
      </div>
    </div>
  ); 
};

export default JobPostings;
