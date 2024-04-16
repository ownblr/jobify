"use client"
import React, { useState } from "react";

type Employer = {
  id: number;
  firstName: string;
  lastName: string;
  companyName: string;
  username: string;
  contactInformation: string;
  mailingAddress: string;
};

const employers: Employer[] = [
  {
    id: 2,
    firstName: "Employer",
    lastName: "B",
    companyName: "Example Company B",
    username: "employer_b",
    contactInformation: "(456) 789-0123 | employerB@gmail.com",
    mailingAddress: "456 Example Ave, Town, Country",
  },
  {
    id: 3,
    firstName: "Employer",
    lastName: "C",
    companyName: "Example Company C",
    username: "employer_c",
    contactInformation: "(789) 012-3456 | employerC@gmail.com",
    mailingAddress: "789 Example Blvd, Village, Country",
  },
  {
    id: 4,
    firstName: "Employer",
    lastName: "D",
    companyName: "Example Company D",
    username: "employer_d",
    contactInformation: "(012) 345-6789 | employerD@gmail.com",
    mailingAddress: "012 Example Rd, District, Country",
  },
  {
    id: 5,
    firstName: "Employer",
    lastName: "E",
    companyName: "Example Company E",
    username: "employer_e",
    contactInformation: "(234) 567-8901 | employerE@gmail.com",
    mailingAddress: "234 Example Ln, City, Country",
  },
  {
    id: 6,
    firstName: "Employer",
    lastName: "F",
    companyName: "Example Company F",
    username: "employer_f",
    contactInformation: "(567) 890-1234 | employerF@gmail.com",
    mailingAddress: "567 Example Ct, Town, Country",
  },
  {
    id: 7,
    firstName: "Employer",
    lastName: "G",
    companyName: "Example Company G",
    username: "employer_g",
    contactInformation: "(890) 123-4567 | employerG@gmail.com",
    mailingAddress: "890 Example Pl, Village, Country",
  },
  {
    id: 8,
    firstName: "Employer",
    lastName: "H",
    companyName: "Example Company H",
    username: "employer_h",
    contactInformation: "(123) 456-7890 | employerH@gmail.com",
    mailingAddress: "123 Example Rd, District, Country",
  },
  {
    id: 9,
    firstName: "Employer",
    lastName: "I",
    companyName: "Example Company I",
    username: "employer_i",
    contactInformation: "(456) 789-0123 | employerI@gmail.com",
    mailingAddress: "456 Example Ln, City, Country",
  },
  {
    id: 10,
    firstName: "Employer",
    lastName: "J",
    companyName: "Example Company J",
    username: "employer_j",
    contactInformation: "(789) 012-3456 | employerJ@gmail.com",
    mailingAddress: "789 Example Ave, Town, Country",
  },
];


const EmployerDeleteRequest = () => {
  const [currentEmployerIndex, setCurrentEmployerIndex] = useState(0);
  const [message, setMessage] = useState("");

  const currentEmployer = employers[currentEmployerIndex];

  const handleAccept = () => {
    setMessage("Employer successfully accepted.");
    setTimeout(() => {
      setMessage("");
      if (currentEmployerIndex < employers.length - 1) {
        setCurrentEmployerIndex(currentEmployerIndex + 1);
      } else {
        setCurrentEmployerIndex(0);
      }
    }, 2000);
  };

  const handleDecline = () => {
    setMessage("Employer successfully deleted.");
    setTimeout(() => {
      setMessage("");
      if (currentEmployerIndex < employers.length - 1) {
        setCurrentEmployerIndex(currentEmployerIndex + 1);
      } else {
        setCurrentEmployerIndex(0);
      }
    }, 2000);
  };

  return (
    <div className="container h-screen flex justify-center items-start">
      {currentEmployer && (
        <div className="employer-info text-center w-full">
         <table className="w-full">
            <tbody>
              <tr>
                <td className="p-3">First Name:</td>
                <td>
                  <input
                    type="text"
                    value={currentEmployer.firstName}
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
                    value={currentEmployer.lastName}
                    readOnly
                    className="w-full p-2 bg-gray-500"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-3">Preferred Username:</td>
                <td>
                  <input
                    type="text"
                    value={currentEmployer.username}
                    readOnly
                    className="w-full p-2 bg-gray-500"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-3">Contact Information:</td>
                <td>
                  <input
                    type="text"
                    value={currentEmployer.contactInformation}
                    readOnly
                    className="w-full p-2 bg-gray-500 resize-none"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-3">Company Name:</td>
                <td>
                  <input
                    type="text"
                    value={currentEmployer.companyName}
                    readOnly
                    className="w-full p-2 bg-gray-500"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-3">Mailing Address:</td>
                <td>
                  <textarea
                    value={currentEmployer.mailingAddress}
                    readOnly
                    className="w-full p-2 bg-gray-500 resize-none"
                    rows={2}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="button-container mt-4">
           
            <button onClick={handleDecline} className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Delete
            </button>
          </div>
          {message && <p className="font-bold mt-4 message">{message}</p>}
        </div>
      )}
    </div>
  );
};

export default EmployerDeleteRequest;
