"use client"

import React, { useState } from "react";

// Define the type for a professional

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
        contactInformation: "professional_a@gmail.com",
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
        contactInformation: "professional_b@gmail.com",
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
        contactInformation: "professional_c@gmail.com",
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
        contactInformation: "professional_d@gmail.com",
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
        contactInformation: "professional_e@gmail.com",
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
        contactInformation: "professional_f@gmail.com",
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
        contactInformation: "professional_g@gmail.com",
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
        contactInformation: "professional_h@gmail.com",
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
        contactInformation: "professional_i@gmail.com",
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
        contactInformation: "professional_j@gmail.com",
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
    
    const MatchingProcess = () => {
        const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);
        const [searchTerm, setSearchTerm] = useState<string>("");
        const [matched, setMatched] = useState<boolean>(false);
        const [matchingMessage, setMatchingMessage] = useState<string>("");

        const startMatching = () => {
          setMatchingMessage("Finding suitable jobs...");
        };
      
        const handleProfessionalClick = (professional: Professional) => {
          setSelectedProfessional(professional);
        };
      
        const filteredProfessionals = professionals.filter((professional) =>
          professional.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
       
       
      
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
                    <h3 className="text-black font-extrabold">{professional.name}</h3>
                  </li>
                ))}
              </ul>
              
            </div>
            <div className="w-2/3">
              {selectedProfessional && (
                <div className="p-3">
                  <h2 className="text-2xl font-bold mb-2 text-center">{selectedProfessional.name}</h2>
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
                        <td className="p-3">Degree Completion:</td>
                        <td>
                          <textarea
                            value={selectedProfessional.degreeDetails}
                            readOnly
                            className="w-full p-2 bg-gray-200 resize-none"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">Qualifications:</td>
                        <td>
                          <ul className="text-left">
                            {selectedProfessional.qualifications.map((qualification, index) => (
                              <li key={index}>
                                <strong>{qualification.category}:</strong> {qualification.keywords.join(", ")}
                              </li>
                            ))}
                            <button
  className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4"
  onClick={startMatching}
>
  Start Matching
</button>
{matchingMessage && <p className="font-bold">{matchingMessage}</p>}
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              
            </div>
          </div>
        );
      };
      
      export default MatchingProcess;
