import { useEffect, useState } from "react";
import JobList from "./JobList";
import JobDescription from "./JobDescription";

const JobPostings = () => {
  const [selectedJob, setSelectedJob] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [matchedJobs, setMatchedJobs] = useState([]);

  useEffect(() => {
    try {
      const getMatchedJobs = async () => {
        const session = await fetch("/api/getSession");
        const sessionData = await session.json();
        const userID = sessionData.user.id;
        const jobs = await fetch("/api/matchedjobs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: userID }),
        });
        const matchedJobs = await jobs.json();
        setMatchedJobs(matchedJobs);
      };
      getMatchedJobs();
    } catch (error) {
      console.log("Error fetching jobs:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!matchedJobs || matchedJobs.length === 0) {
    return <p>No jobs found</p>;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/3">
        <JobList onSelectJob={setSelectedJob} jobs={matchedJobs} />
      </div>

      <div className="w-2/3">
        {selectedJob ? (
          <JobDescription Job={selectedJob} />
        ) : (
          <JobDescription Job={matchedJobs.at(0)} />
        )}
      </div>
    </div>
  );
};

export default JobPostings;
