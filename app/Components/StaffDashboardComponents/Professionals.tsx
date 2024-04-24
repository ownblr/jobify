import { useEffect, useState } from "react";
import ProfessionalList from "./ProfessionalList";
import ProfessionalDescription from "./ProfessionalDescription";

const Professionals = () => {
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [professionals, setProfessionals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    try {
      const getJobs = async () => {
        const data = await fetch("/api/professional", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const professioanls = await data.json();
        setProfessionals(professioanls);
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
  if (!professionals || professionals.length === 0) {
    return <p>No jobs found</p>;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/3">
        <ProfessionalList onSelectProfessional={setSelectedProfessional} professionals={professionals} />
      </div>
      <div className="w-2/3">
        {selectedProfessional ? <ProfessionalDescription Professional={selectedProfessional} /> : <ProfessionalDescription Professional={professionals.at(0)}/> }
      </div>
    </div>
  ); 
};

export default Professionals;
