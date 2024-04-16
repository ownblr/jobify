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
  description: string; // Added description field
};
const professionals: Professional[] = [
  {
    id: 3,
    name: "John Smith",
    description: "Total Payments: $60,000 | Pending Payments: $12,000",
    username: "John Smith",
    contactInformation: "professional_c@gmail.com | (345) 678-9012",
    companyAddress: "789 Professional Blvd",
    firstname: "John",
    lastname: "Smith",
    degreeDetails: "Bachelor of Arts in English Literature",
    qualifications: [
      { category: "Languages", keywords: ["Ruby, PHP"] },
      { category: "Tools", keywords: ["Atom, NetBeans"] },
      { category: "Database", keywords: ["SQLite, Redis"] },
      { category: "Experience", keywords: ["4 years"] },
    ],
  },
];
const EditEmployerAccount = () => {
  const [selectedProfessional, setSelectedProfessional] =
    useState<Professional | null>(professionals[0]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleProfessionalClick = (professional: Professional) => {
    setSelectedProfessional(professional);
  };

  const filteredProfessionals = professionals.filter((professional) =>
    professional.name.toLowerCase().includes(searchTerm.toLowerCase())
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

  return (
    <div className="flex h-screen overflow-hidden">
      
      <div className="w-2/3 ">
        {selectedProfessional && (
          <div className="p-3">
            <h2 className="text-2xl font-bold mb-2 text-center">
              {selectedProfessional.name}
            </h2>
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="pr-2">Contact Person's Name:</td>
                  <td>
                    <input
                      type="text"
                      value={selectedProfessional.username}
                      onChange={(e) =>
                        handleInputChange("username", e.target.value)
                      }
                      className="w-full p-2 bg-gray-200"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="pr-2">Contact Information:</td>
                  <td>
                    <input
                      type="text"
                      value={selectedProfessional.contactInformation}
                      onChange={(e) =>
                        handleInputChange("contactInformation", e.target.value)
                      }
                      className="w-full p-2 bg-gray-200"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="pr-2">Company Address:</td>
                  <td>
                    <input
                      type="text"
                      value={selectedProfessional.companyAddress}
                      onChange={(e) =>
                        handleInputChange("companyAddress", e.target.value)
                      }
                      className="w-full p-2 bg-gray-200"
                    />
                  </td>
                </tr>
                {/* <tr>
                  <td className="pr-2">Payment Info:</td>
                  <td>
                    <input
                      type="text"
                      value="[ **** **** **** 1234 ] [ Exp : 12/24 ] [ *** ]"
                      onChange={(e) =>
                        handleInputChange("degreeDetails", e.target.value)
                      }
                      className="w-full p-2 bg-gray-200"
                    />
                  </td>
                </tr> */}
               
                
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="absolute bottom-4 right-4 space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Change Password
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Delete Account
        </button>
      </div>
    </div>
  );
};


export default EditEmployerAccount