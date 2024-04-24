import { useEffect, useState } from "react";
import EmployerList from "./EmployerList";
import EmployerDescription from "./EmployerDescription";

const Employers = () => {
  const [selectedEmployer, setSelectedEmployer] = useState(null);
  const [employers, setEmployers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    try {
      const getEmployers = async () => {
        const data = await fetch("/api/employer", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const employers = await data.json();
        setEmployers(employers);
        setIsLoading(false);
      };
      getEmployers();
    } catch (error) {
      console.log('Error fetching jobs:', error);
    } finally {
        setIsLoading(false);
    }
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!employers || employers.length === 0) {
    return <p>No employees found</p>;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/3">
        <EmployerList onSelectedEmployer={setSelectedEmployer} employers={employers} />
      </div>
      <div className="w-2/3">
        {selectedEmployer ? <EmployerDescription Employer={selectedEmployer} /> : <EmployerDescription Employer={employers.at(0)}/> }
      </div>
    </div>
  ); 
};

export default Employers;
