//@ts-nocheck

import React, { useState, useEffect } from "react";

const ProfessionalDeleteRequest = () => {
  const [currentProfessional, setCurrentProfessional] = useState();
  const [professionals, setProfessionals] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfessional = async () => {
      setIsLoading(true); 
      try {
        const response = await fetch('/api/professionalDeleted', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        console.log(data)
        if (data && data.length > 0) {
          setProfessionals(data); 
          setCurrentProfessional(data[0]);
        }
        setIsLoading(false); 
      } catch (error) {
        console.error('Error fetching employers:', error);
        setIsLoading(false); 
      }
    };

    fetchProfessional();
  }, []);

  const handleAccept = async () => {
    if (!currentProfessional) return;

    const response = await fetch('/api/professionalDeleted', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: currentProfessional.id }),
    });
    const data = await response.json();
    setMessage(data.message);
    setProfessionals(professionals.filter(professional => professional.id !== currentProfessional.id));

    if (professionals.length > 0) {
      setCurrentProfessional(professionals[0]);
    } else {
      setCurrentProfessional(undefined);
    }
  }


  if (isLoading) {
    return <div className="text-center mt-5">Loading...</div>;
  }
  if (!professionals) {
    return <div className="text-center mt-5">No professionals found</div>;
  }
  if (!currentProfessional) {
    return <div className="text-center mt-5">No new professionals found</div>;
  }

  return (
    <div className="container h-screen flex justify-center items-start">
        <div className="professional-info text-center w-full">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="p-3">Username:</td>
                <td>
                  <input
                    type="text"
                    value={currentProfessional.username || ''}
                    readOnly
                    className="w-full p-2 bg-gray-500"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-3">Email:</td>
                <td>
                  <input
                    type="text"
                    value={currentProfessional.email || ''}
                    readOnly
                    className="w-full p-2 bg-gray-500"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="button-container mt-4">
            <button onClick={handleAccept} className="bg-blue-600 text-white px-6 py-3 rounded-lg mr-4">
              Delete
            </button>
          </div>
          {message && <p className="font-bold mt-4 message">{message}</p>}
        </div>
    </div>
  );
};

export default ProfessionalDeleteRequest;