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
        const data = await fetch("/api/matching", {
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
      console.log("Error fetching jobs:", error);
      setIsLoading(false);
    }
  }, []);

  const handleMatching = async () => {
    if (!selectedProfessional) return;

    const response = await fetch("/api/createMatches", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: selectedProfessional.id }),
    });
    const data = await response.json();
    console.log(data.message);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!professionals || professionals.length === 0) {
    return <p>No professionals found</p>;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/3">
        <ProfessionalList
          onSelectProfessional={setSelectedProfessional}
          professionals={professionals}
        />
      </div>
      <div className="w-2/3">
        <div>
          {selectedProfessional ? (
            <ProfessionalDescription Professional={selectedProfessional} />
          ) : (
            <ProfessionalDescription Professional={professionals.at(0)} />
          )}
        </div>
        <div className="flex justify-center items-center">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            onClick={handleMatching}
          >
            Start Matching Process
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Professionals;
