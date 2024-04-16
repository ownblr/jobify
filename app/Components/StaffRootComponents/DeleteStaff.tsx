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
    firstName: "staff",
    lastName: "B",
    companyName: "Example Company B",
    username: "staff_b",
    contactInformation: "(456) 789-0123 | staffB@gmail.com",
    mailingAddress: "456 Example Ave, Town, Country",
  },
  {
    id: 3,
    firstName: "staff",
    lastName: "C",
    companyName: "Example Company C",
    username: "staff_c",
    contactInformation: "(789) 012-3456 | staffC@gmail.com",
    mailingAddress: "789 Example Blvd, Village, Country",
  },
  {
    id: 4,
    firstName: "staff",
    lastName: "D",
    companyName: "Example Company D",
    username: "staff_d",
    contactInformation: "(012) 345-6789 | staffD@gmail.com",
    mailingAddress: "012 Example Rd, District, Country",
  },
  {
    id: 5,
    firstName: "staff",
    lastName: "E",
    companyName: "Example Company E",
    username: "staff_e",
    contactInformation: "(234) 567-8901 | staffE@gmail.com",
    mailingAddress: "234 Example Ln, City, Country",
  },
  {
    id: 6,
    firstName: "staff",
    lastName: "F",
    companyName: "Example Company F",
    username: "staff_f",
    contactInformation: "(567) 890-1234 | staffF@gmail.com",
    mailingAddress: "567 Example Ct, Town, Country",
  },
  {
    id: 7,
    firstName: "staff",
    lastName: "G",
    companyName: "Example Company G",
    username: "staff_g",
    contactInformation: "(890) 123-4567 | staffG@gmail.com",
    mailingAddress: "890 Example Pl, Village, Country",
  },
  {
    id: 8,
    firstName: "staff",
    lastName: "H",
    companyName: "Example Company H",
    username: "staff_h",
    contactInformation: "(123) 456-7890 | staffH@gmail.com",
    mailingAddress: "123 Example Rd, District, Country",
  },
  {
    id: 9,
    firstName: "staff",
    lastName: "I",
    companyName: "Example Company I",
    username: "staff_i",
    contactInformation: "(456) 789-0123 | staffI@gmail.com",
    mailingAddress: "456 Example Ln, City, Country",
  },
  {
    id: 10,
    firstName: "staff",
    lastName: "J",
    companyName: "Example Company J",
    username: "staff_j",
    contactInformation: "(789) 012-3456 | staffJ@gmail.com",
    mailingAddress: "789 Example Ave, Town, Country",
  },
];


const DeleteStaff = () => {
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
    setMessage("Staff successfully deleted.");
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

export default DeleteStaff;
