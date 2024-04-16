import { useEffect, useState } from "react";
import JobList from "./JobList";
import JobDescription from "./JobDescription";
import { getUserID } from "@/app/lib";

const JobPostings = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userID, setUserID] = useState(null);
  const [matchedJobs, setMatchedJobs] = useState([]);

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
        setIsLoading(false);
        const userID = getUserID();
        setUserID(userID);
        const matchedJobs = jobs.filter(job => {
            const matchedIDS = JSON.parse(job.matched || "[]");
            return matchedIDS.includes(userID);
        })
        setJobs(matchedJobs)
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
