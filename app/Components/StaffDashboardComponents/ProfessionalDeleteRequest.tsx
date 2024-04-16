"use client"

import React, { useState } from "react";

type Professional = {
  id: number;
  name: string;
  username: string;
  contactInformation: string;
  companyAddress: string;
  firstname: string;
  lastname: string;
  degreeDetails: string;
  qualifications: {
    category: string;
    keywords: string[];
  }[];
};

const professionals: Professional[] = [
  {
    id: 1,
    name: "Professional A",
    username: "professional_a",
    contactInformation: "professional_a@gmail.com | (123) 456-7890",
    companyAddress: "123 Professional St",
    firstname: "John",
    lastname: "Doe",
    degreeDetails: "Bachelor of Science in Engineering",
    qualifications: [
      { category: "Languages", keywords: ["Python", "JavaScript"] },
      { category: "Tools", keywords: ["React", "VS Code", "Git"] },
      { category: "Database", keywords: ["MongoDB", "PostgreSQL"] },
      { category: "Experience", keywords: ["2 years"] }
    ]
  },
  {
    id: 2,
    name: "Professional B",
    username: "professional_b",
    contactInformation: "professional_b@gmail.com | (234) 567-8901",
    companyAddress: "456 Professional Ave",
    firstname: "Alice",
    lastname: "Smith",
    degreeDetails: "Master of Business Administration",
    qualifications: [
      { category: "Languages", keywords: ["Java", "C++"] },
      { category: "Tools", keywords: ["Eclipse", "Sublime Text"] },
      { category: "Database", keywords: ["MySQL", "SQLite"] },
      { category: "Experience", keywords: ["5 years"] }
    ]
  },
  {
    id: 3,
    name: "Professional C",
    username: "professional_c",
    contactInformation: "professional_c@gmail.com | (345) 678-9012",
    companyAddress: "789 Professional Blvd",
    firstname: "David",
    lastname: "Johnson",
    degreeDetails: "Bachelor of Arts in English Literature",
    qualifications: [
      { category: "Languages", keywords: ["Ruby", "PHP"] },
      { category: "Tools", keywords: ["Atom", "NetBeans"] },
      { category: "Database", keywords: ["SQLite", "Redis"] },
      { category: "Experience", keywords: ["4 years"] }
    ]
  },
  {
    id: 4,
    name: "Professional D",
    username: "professional_d",
    contactInformation: "professional_d@gmail.com | (456) 789-0123",
    companyAddress: "1011 Professional Rd",
    firstname: "Emily",
    lastname: "Brown",
    degreeDetails: "Bachelor of Science in Computer Science",
    qualifications: [
      { category: "Languages", keywords: ["C#", "Swift"] },
      { category: "Tools", keywords: ["Xcode", "Visual Studio"] },
      { category: "Database", keywords: ["PostgreSQL", "Firebase"] },
      { category: "Experience", keywords: ["2 years"] }
    ]
  },
  {
    id: 5,
    name: "Professional E",
    username: "professional_e",
    contactInformation: "professional_e@gmail.com | (567) 890-1234",
    companyAddress: "1315 Professional Ln",
    firstname: "Michael",
    lastname: "Garcia",
    degreeDetails: "Bachelor of Science in Electrical Engineering",
    qualifications: [
      { category: "Languages", keywords: ["JavaScript", "TypeScript"] },
      { category: "Tools", keywords: ["Angular", "WebStorm", "GitHub"] },
      { category: "Database", keywords: ["MongoDB", "MySQL"] },
      { category: "Experience", keywords: ["3 years"] }
    ]
  },
  {
    id: 6,
    name: "Professional F",
    username: "professional_f",
    contactInformation: "professional_f@gmail.com | (678) 901-2345",
    companyAddress: "1617 Professional Ct",
    firstname: "Jennifer",
    lastname: "Martinez",
    degreeDetails: "Master of Science in Computer Engineering",
    qualifications: [
      { category: "Languages", keywords: ["Java", "Python"] },
      { category: "Tools", keywords: ["IntelliJ IDEA", "PyCharm"] },
      { category: "Database", keywords: ["SQLite", "MongoDB"] },
      { category: "Experience", keywords: ["4 years"] }
    ]
  },
  {
    id: 7,
    name: "Professional G",
    username: "professional_g",
    contactInformation: "professional_g@gmail.com | (789) 012-3456",
    companyAddress: "1819 Professional Pl",
    firstname: "Matthew",
    lastname: "Lopez",
    degreeDetails: "Bachelor of Science in Mechanical Engineering",
    qualifications: [
      { category: "Languages", keywords: ["C", "C++"] },
      { category: "Tools", keywords: ["Visual Studio Code", "Xcode"] },
      { category: "Database", keywords: ["PostgreSQL", "SQLite"] },
      { category: "Experience", keywords: ["3 years"] }
    ]
  },
  {
    id: 8,
    name: "Professional H",
    username: "professional_h",
    contactInformation: "professional_h@gmail.com | (890) 123-4567",
    companyAddress: "2123 Professional Way",
    firstname: "Jessica",
    lastname: "Lee",
    degreeDetails: "Master of Science in Information Technology",
    qualifications: [
      { category: "Languages", keywords: ["Python", "Java"] },
      { category: "Tools", keywords: ["VS Code", "PyCharm"] },
      { category: "Database", keywords: ["MySQL", "SQLite"] },
      { category: "Experience", keywords: ["5 years"] }
    ]
  },
  {
    id: 9,
    name: "Professional I",
    username: "professional_i",
    contactInformation: "professional_i@gmail.com | (901) 234-5678",
    companyAddress: "2425 Professional Circle",
    firstname: "Daniel",
    lastname: "Walker",
    degreeDetails: "Bachelor of Science in Computer Engineering",
    qualifications: [
      { category: "Languages", keywords: ["JavaScript", "C#"] },
      { category: "Tools", keywords: ["Visual Studio", "Sublime Text"] },
      { category: "Database", keywords: ["MongoDB", "MySQL"] },
      { category: "Experience", keywords: ["2 years"] }
    ]
  },
  {
    id: 10,
    name: "Professional J",
    username: "professional_j",
    contactInformation: "professional_j@gmail.com | (012) 345-6789",
    companyAddress: "2627 Professional Park",
    firstname: "Sarah",
    lastname: "White",
    degreeDetails: "Master of Science in Data Science",
    qualifications: [
      { category: "Languages", keywords: ["Python", "R"] },
      { category: "Tools", keywords: ["Jupyter Notebook", "RStudio"] },
      { category: "Database", keywords: ["SQL Server", "PostgreSQL"] },
      { category: "Experience", keywords: ["3 years"] }
    ]
  }
];



const ProfessionalDeleteRequest = () => {
  const [currentProfessionalIndex, setCurrentProfessionalIndex] = useState(0);
  const [message, setMessage] = useState("");

  const currentProfessional = professionals[currentProfessionalIndex];

  const handleAccept = () => {
    setMessage("Professional successfully accepted.");
    setTimeout(() => {
      setMessage("");
      if (currentProfessionalIndex < professionals.length - 1) {
        setCurrentProfessionalIndex(currentProfessionalIndex + 1);
      } else {
        setCurrentProfessionalIndex(0);
      }
    }, 2000);
  };

  const handleDecline = () => {
    setMessage("Professional successfully deleted.");
    setTimeout(() => {
      setMessage("");
      if (currentProfessionalIndex < professionals.length - 1) {
        setCurrentProfessionalIndex(currentProfessionalIndex + 1);
      } else {
        setCurrentProfessionalIndex(0);
      }
    }, 2000);
  };

  return (
    <div className="container h-screen flex justify-center items-start">
      {currentProfessional && (
        <div className="professional-info text-center w-full">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="p-3">Firstname:</td>
                <td>
                  <input
                    type="text"
                    value={currentProfessional.firstname}
                    readOnly
                    className="w-full p-2 bg-gray-500"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-3">Lastname:</td>
                <td>
                  <input
                    type="text"
                    value={currentProfessional.lastname}
                    readOnly
                    className="w-full p-2 bg-gray-500"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-3"> Preferred Username:</td>
                <td>
                  <input
                    type="text"
                    value={currentProfessional.username}
                    readOnly
                    className="w-full p-2 bg-gray-500"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-3">Contact Information:</td>
                <td>
                  <textarea
                   
                    value={currentProfessional.contactInformation}
                    readOnly
                    className="w-full p-2 bg-gray-500 resize-none"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-3">Mailing Address:</td>
                <td>
                  <textarea
                    value={currentProfessional.companyAddress}
                    readOnly
                    className="w-full p-2 bg-gray-500 resize-none"
                    
                  />
                </td>
              </tr>
              <tr>
                <td className="p-3">Degree Completion:</td>
                <td>
                  <input
                    type="text"
                    value={currentProfessional.degreeDetails}
                    readOnly
                    className="w-full p-2 bg-gray-500"
                  />
                </td>
              </tr>
              <tr>
                <td className="p-3">Qualifications:</td>
                <td>
                  <ul className="text-left">
                    {currentProfessional.qualifications.map((qualification, index) => (
                      <li key={index}>
                        <strong>{qualification.category}:</strong>{" "}
                        {qualification.keywords.join(", ")}
                      </li>
                    ))}
                  </ul>
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

export default ProfessionalDeleteRequest;
