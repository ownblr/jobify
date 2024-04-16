"use client"

import React, { useState } from "react";

// Define the type for an employer
type Employer = {
  id: number;
  firstName: string;
  lastName: string;
  companyName: string;
  username: string;
  emailAddress: string;
  contactNumber: string;
  contactPerson: string;
  mailingAddress: string;
  description: string;
};

const employers: Employer[] = [
  {
    id: 2,
    firstName: "Employer",
    lastName: "B",
    companyName: "Example Company B",
    username: "employer_b",
    emailAddress: "employerB@gmail.com",
    contactNumber: "(456) 789-0123",
    contactPerson: "Employer B",
    mailingAddress: "456 Example Ave, Town, Country",
    description: "Total payment: $10,000 | Pending payment: $5000",
  },
  {
    id: 3,
    firstName: "Employer",
    lastName: "C",
    companyName: "Example Company C",
    username: "employer_c",
    emailAddress: "employerC@gmail.com",
    contactNumber: "(789) 012-3456",
    contactPerson: "Employer C",
    mailingAddress: "789 Example Blvd, Village, Country",
    description: "Total payment: $12,000 | Pending payment: $6000",
  },
  // Add other employers here
];

// Now each employer has separate fields for emailAddress, contactNumber, and contactPerson.

const EmployerList = () => {
  const [selectedEmployer, setSelectedEmployer] = useState<Employer | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleEmployerClick = (employer: Employer) => {
    setSelectedEmployer(employer);
  };

  const handleInputChange = (field: keyof Employer, value: string) => {
    if (selectedEmployer) {
      setSelectedEmployer({ ...selectedEmployer, [field]: value });
    }
  };

  const filteredEmployers = employers.filter((employer) =>
    `${employer.firstName} ${employer.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
  const handleSave = () => {
    if (!selectedEmployer) {
      console.log("Selected Employer is null. Exiting.");
      return;
    }

    const {
      companyName,
      mailingAddress,
      contactPerson,
      emailAddress,
      contactNumber,
    } = selectedEmployer;

    if (!companyName.trim()) {
      alert("Company Name cannot be empty");
      return;
    }
    if (!mailingAddress.trim()) {
      alert("Mailing Address cannot be empty");
      return;
    }
    if (!contactPerson.trim()) {
      alert("Contact Person cannot be empty");
      return;
    }
    if (!emailAddress.trim().endsWith("@gmail.com")) {
      alert("Email address must end with @gmail.com");
      return;
    }
    if (!/^\d{10,}$/.test(contactNumber.replace(/\D/g, ""))) {
      alert("Phone number must contain at least 10 digits");
      return;
    }
    // If all validations pass, you can proceed to save the changes
    // For now, let's just log the selected professional
    alert("Saving changes...");

    // You can navigate to another page here after saving
    // navigate("/some-page");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/3 p-3">
        <input
          type="text"
          placeholder="Search employers..."
          className="w-full p-2 mb-3 rounded-md bg-gray-800 text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul className="h-auto border-r border-gray-600 overflow-y-auto max-h-screen [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
          {filteredEmployers.map((employer) => (
            <li
              key={employer.id}
              className="employer-item p-3 border-b border-gray-300 cursor-pointer"
              onClick={() => handleEmployerClick(employer)}
            >
              <h3 className="text-black font-extrabold">
                {`${employer.firstName} ${employer.lastName}`}
              </h3>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3">
        {selectedEmployer && (
          <div className="p-3">
            <h2 className="text-2xl font-bold mb-2 text-center">
              {`${selectedEmployer.firstName} ${selectedEmployer.lastName}`}
            </h2>
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="pr-2">Username:</td>
                  <td>
                    <input
                      type="text"
                      value={selectedEmployer.username}
                      readOnly
                      className="w-full p-2 bg-gray-500"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="pr-2">Contact Person:</td>
                  <td>
                    <input
                      type="text"
                      value={selectedEmployer.contactPerson}
                      onChange={(e) =>
                        handleInputChange("contactPerson", e.target.value)
                      }
                      className="w-full p-2 bg-gray-200"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="pr-2">Contact Number:</td>
                  <td>
                    <input
                      type="text"
                      value={selectedEmployer.contactNumber}
                      onChange={(e) =>
                        handleInputChange("contactNumber", e.target.value)
                      }
                      className="w-full p-2 bg-gray-200"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="pr-2">Email Address:</td>
                  <td>
                    <input
                      type="text"
                      value={selectedEmployer.emailAddress}
                      onChange={(e) =>
                        handleInputChange("emailAddress", e.target.value)
                      }
                      className="w-full p-2 bg-gray-200"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="pr-2">Mailing Address:</td>
                  <td>
                    <input
                      type="text"
                      value={selectedEmployer.mailingAddress}
                      onChange={(e) =>
                        handleInputChange("mailingAddress", e.target.value)
                      }
                      className="w-full p-2 bg-gray-200"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="pr-2">Company name:</td>
                  <td>
                    <input
                      type="text"
                      value={selectedEmployer.companyName}
                      onChange={(e) =>
                        handleInputChange("companyName", e.target.value)
                      }
                      className="w-full p-2 bg-gray-200"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="pr-2">Description:</td>
                  <td>
                    <input
                      type="text"
                      value={selectedEmployer.description}
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                      className="w-full p-2 bg-gray-200 resize-none"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="absolute bottom-4 right-4 space-x-4">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployerList;
