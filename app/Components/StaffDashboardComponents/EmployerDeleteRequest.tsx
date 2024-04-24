import React, { useState, useEffect } from "react";

const EmployerDeleteRequest = () => {
  const [currentEmployer, setCurrentEmployer] = useState();
  const [employers, setEmployers] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEmployer = async () => {
      setIsLoading(true); 
      try {
        const response = await fetch('/api/employerDeleted', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setEmployers(data);
        if (data && data.length > 0) {
          setEmployers(data); 
          setCurrentEmployer(data[0]);
        }
        setIsLoading(false); 
      } catch (error) {
        console.error('Error fetching employers:', error);
        setIsLoading(false); 
      }
    };

    fetchEmployer();
  }, []);

  const handleAccept = async () => {
    if (!currentEmployer) return;

    const response = await fetch('/api/employerDeleted', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: currentEmployer.id }),
    });
    const data = await response.json();
    setMessage(data.message);
    setEmployers(employers.filter(employer => employer.id !== currentEmployer.id));

    if (employers.length > 0) {
      setCurrentEmployer(employers[0]);
    } else {
      setCurrentEmployer(undefined);
    }
  }


  if (isLoading) {
    return <div className="text-center mt-5">Loading...</div>;
  }
  if (!employers) {
    return <div className="text-center mt-5">No employers found</div>;
  }
  if (!currentEmployer) {
    return <div className="text-center mt-5">No new employers found</div>;
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
                    value={currentEmployer.username || ''}
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
                    value={currentEmployer.email || ''}
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

export default EmployerDeleteRequest;