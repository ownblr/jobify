import React, { useState, useEffect } from "react";

const ProfessionalRequest = () => {
  const [currentProfessional, setCurrentProfessional] = useState(null);
  const [professionals, setProfessionals] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchProfessional = async () => {
      setIsLoading(true); // Set loading to true when the fetch starts
      try {
        const response = await fetch('/api/professionalRequests', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setProfessionals(data);
        if (data && data.length > 0) {
          setCurrentProfessional(data[0]); // Set the first professional as the current
        }
        setIsLoading(false); // Set loading to false once the data is fetched
      } catch (error) {
        console.error('Error fetching professionals:', error);
        setIsLoading(false); // Ensure loading is set to false even if there's an error
      }
    };

    fetchProfessional();
  }, []);

  const handleAccept = async () => {
    if (!currentProfessional) return;

    const response = await fetch('/api/professionalRequests', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: currentProfessional.id }),
    });
    const data = await response.json();
    setMessage(data.message);
    setProfessionals(professionals.filter(professional => professional.id !== currentProfessional.id));
    if (professionals.length > 1) {
      setCurrentProfessional(professionals[1]);
    } else {
      setCurrentProfessional(null);
    }
  }

  const handleDecline = async () => {
    if (!currentProfessional) return;

    const response = await fetch('/api/professionalRequests', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: currentProfessional.id }),
    });
    const data = await response.json();
    setMessage(data.message);
    if (professionals.length > 1) {
      setCurrentProfessional(professionals[1]);
    } else {
      setCurrentProfessional(null);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!currentProfessional) {
    return <div>No professionals found</div>;
  }

  // Render your component once the data has been fetched
  return (
    <div className="container h-screen flex justify-center items-start">
        <div className="professional-info text-center w-full">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="p-3">First Name:</td>
                <td>
                  <input
                    type="text"
                    value={currentProfessional.firstName || ''}
                    readOnly
                    className="w-full p-2 bg-gray-500"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-3">Last Name:</td>
                <td>
                  <input
                    type="text"
                    value={currentProfessional.lastName || ''}
                    readOnly
                    className="w-full p-2 bg-gray-500"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-3">Degree Name:</td>
                <td>
                  <input
                    type="text"
                    value={currentProfessional.degreeName || ''}
                    readOnly
                    className="w-full p-2 bg-gray-500"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="button-container mt-4">
            <button onClick={handleAccept} className="bg-blue-600 text-white px-6 py-3 rounded-lg mr-4">
              Accept
            </button>
            <button onClick={handleDecline} className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Decline
            </button>
          </div>
          {message && <p className="font-bold mt-4 message">{message}</p>}
        </div>
    </div>
  );
};

export default ProfessionalRequest;