"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Qualification = {
  category: string;
  keywords: string[];
};

type session = {
  user: {
    id: number;
    email: string;
    phoneNumber: string;
  };
  account: {
    firstName: string;
    lastName: string;
    degreeName: string;
    institutionName: string;
    monthComplete: number;
    yearComplete: number;
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
    qualifications: string;
  };
};


const EditAccount = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleInputChange = (key, value) => {
    switch (key) {
      case "firstname":
        setFirstName(value);
        break;
      case "lastname":
        setLastName(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "companyName":
        setCompanyName(value);
        break;
      case "streetAddress":
        setStreetAddress(value);
        break;
      case "city":
        setCity(value);
        break;
      case "state":
        setState(value);
        break;
      case "zip":
        setZip(value);
        break;
      default:
        break;
    }
  };


  const handleSubmit = () => {
    const requestAccountCreation = async () => {
      await fetch("/api/employer", {
        method: "POST",
        body: JSON.stringify({
          username,
          email,
          phoneNumber,
          firstName,
          lastName,
          companyName,
          streetAddress,
          city,
          state,
          zip,
        }),
      });
    };
    requestAccountCreation();
    router.push("/")
  };


  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-2/3 mx-auto ">
        <div className="p-3">
          <h2 className="text-2xl font-bold mb-2 text-center">
          </h2>
          <table className="w-full">
            <tbody>
            <tr>
                <td className="pr-2">Username:</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => handleInputChange("username", e.target.value)}
                    className="w-full p-2 bg-blue-200 text-black"
                  />
                </td>
              </tr>
              <tr>
                <td className="pr-2">First Name:</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => handleInputChange("firstname", e.target.value)}
                    className="w-full p-2 bg-blue-200 text-black"
                  />
                </td>
              </tr>
              <tr>
                <td className="pr-2">Last Name:</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => handleInputChange("lastname", e.target.value)}
                    className="w-full p-2 bg-blue-200 text-black"
                  />
                </td>
              </tr>
              <tr>
                <td className="pr-2">Email Address:</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full p-2 bg-blue-200 text-black"
                  />
                </td>
              </tr>
              <tr className="mt-2">
                <td className="pr-2">Phone Number:</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full p-2 bg-blue-200"
                  />
                </td>
              </tr>
              <tr className="mb-5">
                <td className="pr-2">Comapny Name:</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) =>
                      handleInputChange("companyName", e.target.value)
                    }
                    className="w-full p-2 bg-blue-200"
                  />
                </td>
              </tr>
              <tr className="mb-5">
                <td className="pr-2">Street Address:</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) =>
                      handleInputChange("streetAddress", e.target.value)
                    }
                    className="w-full p-2 bg-blue-200"
                  />
                </td>
              </tr>
              <tr>
                <td className="pr-2">City:</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="w-full p-2 bg-blue-200"
                  />
                </td>
              </tr>
              <tr className="mt-2">
                <td className="pr-2">State:</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    className="w-full p-2 bg-blue-200"
                  />
                </td>
              </tr>
              <tr className="mt-2">
                <td className="pr-2">Zip:</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => handleInputChange("zip", e.target.value)}
                    className="w-full p-2 bg-blue-200"
                  />
                </td>
              </tr>
             
            </tbody>
          </table>
          <div className="mt-5 flex justify-between">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={handleSubmit}
        >
          Create Account
        </button>
 
      </div>
        </div>
      </div>
     
    </div>
  );
};
export default EditAccount;
