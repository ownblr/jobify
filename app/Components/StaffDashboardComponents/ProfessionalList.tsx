"use client"

import React, { useState } from "react";
type Professional = {
  id: number;
  fullName: string;
  username: string;
  email: string;
  phone: string;
  mailingAddress: string;
  degreeDetails: string;
  qualifications: {
    category: string;
    keywords: string[];
  }[];
  description: string;
};

const professionals: Professional[] = [
  {
    id: 3,
    fullName: "David Johnson",
    description: "Total Payments: $60,000 | Pending Payments: $12,000",
    username: "professional_c",
    email: "professional_c@gmail.com",
    phone: "(345) 678-9012",
    mailingAddress: "123 Professional Lane, City, Country",
    degreeDetails: "Bachelor of Arts in English Literature",
    qualifications: [
      { category: "Languages", keywords: ["Ruby, PHP"] },
      { category: "Tools", keywords: ["Atom, NetBeans"] },
      { category: "Database", keywords: ["SQLite, Redis"] },
      { category: "Experience", keywords: ["4 years"] },
    ],
  },
  {
    id: 4,
    fullName: "Emily Brown",
    description: "Total Payments: $90,000 | Pending Payments: $20,000",
    username: "professional_d",
    email: "professional_d@gmail.com",
    phone: "(456) 789-0123",
    mailingAddress: "456 Professional Street, Town, Country",
    degreeDetails: "Bachelor of Science in Computer Science",
    qualifications: [
      { category: "Languages", keywords: ["C#, Swift"] },
      { category: "Tools", keywords: ["Xcode, Visual Studio"] },
      { category: "Database", keywords: ["PostgreSQL, Firebase"] },
      { category: "Experience", keywords: ["2 years"] },
    ],
  },
  {
    id: 6,
    fullName: "Jennifer Martinez",
    description: "Total Payments: $70,000 | Pending Payments: $14,000",
    username: "professional_f",
    email: "professional_f@gmail.com",
    phone: "(678) 901-2345",
    mailingAddress: "789 Professional Court, Village, Country",
    degreeDetails: "Master of Science in Computer Engineering",
    qualifications: [
      { category: "Languages", keywords: ["Java, Python"] },
      { category: "Tools", keywords: ["IntelliJ IDEA, PyCharm"] },
      { category: "Database", keywords: ["SQLite, MongoDB"] },
      { category: "Experience", keywords: ["4 years"] },
    ],
  },
];

const ProfessionalList = () => {
  const [selectedProfessional, setSelectedProfessional] =
    useState<Professional | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleProfessionalClick = (professional: Professional) => {
    setSelectedProfessional(professional);
  };

  const filteredProfessionals = professionals.filter((professional) =>
    professional.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleInputChange = (field: keyof Professional, value: string) => {
    if (selectedProfessional) {
      setSelectedProfessional({ ...selectedProfessional, [field]: value });
    }
  };
  const handleInputChange2 = (
    field: keyof Professional,
    value: string,
    qualificationIndex: number,
    keywordIndex: number
  ) => {
    if (selectedProfessional) {
      // Create a copy of the selectedProfessional object
      const updatedProfessional = { ...selectedProfessional };
      // Update the value of the specified keyword within the specified qualification
      updatedProfessional.qualifications[qualificationIndex].keywords[
        keywordIndex
      ] = value;
      // Set the updatedProfessional object as the new selectedProfessional
      setSelectedProfessional(updatedProfessional);
    }
  };
  const handleSave = () => {
    if (!selectedProfessional) {
      console.log("Selected Professional is null. Exiting.");
      return;
    }

    const { fullName, email, phone, mailingAddress, qualifications } =
      selectedProfessional;

    if (!fullName.trim()) {
      alert("Full Name cannot be empty");
      return;
    }
    if (!email.trim().match(/^[\w-]+(\.[\w-]+)*@gmail\.com$/)) {
      alert(
        "Email address must be in the correct format (e.g., example@gmail.com)"
      );
      return;
    }
    if (!phone.trim().match(/^\(\d{3}\) \d{3}-\d{4}$/)) {
      alert("Phone number must be in the format (XXX) XXX-XXXX");
      return;
    }
    if (!mailingAddress.trim()) {
      alert("Mailing Address cannot be empty");
      return;
    }
    if (
      qualifications.some(
        (qualification) => qualification.keywords.length === 0
      )
    ) {
      alert("Qualifications cannot be empty");
      return;
    }

    // If all validations pass, you can proceed to save the changes
    alert("Saving changes...");

    // You can navigate to another page here after saving
    // navigate("/some-page");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/3 p-3">
        <input
          type="text"
          placeholder="Search professionals..."
          className="w-full p-2 mb-3 rounded-md bg-gray-800 text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul className="h-auto border-r border-gray-600 overflow-y-auto max-h-screen [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
          {filteredProfessionals.map((professional) => (
            <li
              key={professional.id}
              className="professional-item p-3 border-b border-gray-300 cursor-pointer"
              onClick={() => handleProfessionalClick(professional)}
            >
              <h3 className="text-black font-extrabold">
                {professional.fullName}
              </h3>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3 ">
        {selectedProfessional && (
          <div className="p-3">
            <h2 className="text-2xl font-bold mb-2 text-center">
              {selectedProfessional.fullName}
            </h2>
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="pr-2">Username:</td>
                  <td>
                    <input
                      type="text"
                      value={selectedProfessional.username}
                      readOnly
                      className="w-full p-2 bg-gray-500"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="pr-2">Full Name:</td>
                  <td>
                    <input
                      type="text"
                      value={selectedProfessional.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
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
                      value={selectedProfessional.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full p-2 bg-gray-200"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="pr-2">Phone:</td>
                  <td>
                    <input
                      type="text"
                      value={selectedProfessional.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
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
                      value={selectedProfessional.mailingAddress}
                      onChange={(e) =>
                        handleInputChange("mailingAddress", e.target.value)
                      }
                      className="w-full p-2 bg-gray-200"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="pr-2">Degree Details:</td>
                  <td>
                    <input
                      type="text"
                      value={selectedProfessional.degreeDetails}
                      onChange={(e) =>
                        handleInputChange("degreeDetails", e.target.value)
                      }
                      className="w-full p-2 bg-gray-200"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="pr-2">Qualifications:</td>
                  <td>
                    <ul className="text-left">
                      {selectedProfessional.qualifications.map(
                        (qualification, qualificationIndex) => (
                          <li key={qualificationIndex}>
                            <strong>{qualification.category}:</strong>{" "}
                            {/* Map through keywords and render input fields */}
                            {qualification.keywords.map(
                              (keyword, keywordIndex) => (
                                <input
                                  key={keywordIndex}
                                  type="text"
                                  value={keyword}
                                  onChange={(e) =>
                                    handleInputChange2(
                                      "qualifications",
                                      e.target.value,
                                      qualificationIndex,
                                      keywordIndex
                                    )
                                  }
                                  className="w-full p-2 bg-gray-200"
                                />
                              )
                            )}
                          </li>
                        )
                      )}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="pr-2">Description:</td>
                  <td>
                    <input
                      type="text"
                      value={selectedProfessional.description}
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

export default ProfessionalList;
