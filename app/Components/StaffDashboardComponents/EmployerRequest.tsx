import React, { useState, useEffect } from "react";

const EmployerRequests = () => {
  const [currentEmployer, setCurrentEmployer] = useState(null);
  const [employers, setEmployers] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchEmployer = async () => {
      setIsLoading(true); // Set loading to true when the fetch starts
      try {
        const response = await fetch('/api/employerRequests', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setEmployers(data);
        if (data && data.length > 0) {
          setCurrentEmployer(data[0]); // Set the first professional as the current
        }
        setIsLoading(false); // Set loading to false once the data is fetched
      } catch (error) {
        console.error('Error fetching professionals:', error);
        setIsLoading(false); // Ensure loading is set to false even if there's an error
      }
    };

    fetchEmployer();
  }, []);

  const handleAccept = async () => {
    if (!currentEmployer) return;

    const response = await fetch('/api/employerRequests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: currentEmployer.id }),
    });
    const data = await response.json();
    setMessage(data.message);
    setEmployers(employers.filter(employer => employer.id !== currentEmployer.id));
  }

  const handleDecline = async () => {
    if (!currentEmployer) return;

    const response = await fetch('/api/employerRequests', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: currentEmployer.id }),
    });
    const data = await response.json();
    setMessage(data.message);
  }

  if (isLoading) {
    return <div className="text-center mt-5">Loading...</div>;
  }
  if (!currentEmployer) {
    return <div className="text-center mt-5">No employers found</div>;
  }

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
                    value={currentEmployer.firstName || ''}
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
                    value={currentEmployer.lastName || ''}
                    readOnly
                    className="w-full p-2 bg-gray-500"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-3">Company Name:</td>
                <td>
                  <input
                    type="text"
                    value={currentEmployer.companyName || ''}
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

export default EmployerRequests;