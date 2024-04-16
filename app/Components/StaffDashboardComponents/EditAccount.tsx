"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"

type Professional = {
  id: number;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  degreeName: string;
  institutionName: string;
  qualifcations: string;
};



const EditAccount = () => {

  const [session, setSession] = useState(null);

  const router = useRouter();
  useEffect(() => {
    const getSession = async () => {
      const data = await fetch("/api/getSession");
      const sessionData = await data.json();
      setSession(sessionData);
      // Assuming the structure of the session data is the one provided in the question
      if (sessionData && sessionData.user && sessionData.user.username) {
        // Update accountName with the username from the session
        setAccountName(sessionData.user.username);
      }
    };
    getSession();
  }, []);

  


  const handleChangePassword = () => {
    router.push("/changepassword");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-2/3 mx-auto">
        {selectedProfessional && (
          <div className="p-3">
            <h2 className="text-2xl font-bold mb-2 text-center">
              {selectedProfessional.name}
            </h2>
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="pr-2">Username:</td>
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
                  <td className="pr-2">Email Address:</td>
                  <td>
                    <input
                      type="text"
                      value={selectedProfessional.contactInformation1}
                      onChange={(e) =>
                        handleInputChange("contactInformation1", e.target.value)
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
                      value={selectedProfessional.contactInformation2}
                      onChange={(e) =>
                        handleInputChange("contactInformation2", e.target.value)
                      }
                      className="w-full p-2 bg-gray-200"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="pr-2">Password:</td>
                  <td>
                    <input
                      type="password"
                      value="*****"
                      className="w-full p-2 bg-gray-200 resize-none"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="absolute bottom-4 right-4 space-x-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={handleChangePassword}
        >
          Change Password
        </button>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={handleSave}
        >
          Save
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Delete
        </button>
      </div>
    </div>
  );
};

export default EditAccount;
