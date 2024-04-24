"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Qualification = {
  category: string;
  keywords: string[];
};


const SignUpProfessional = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [monthComplete, setMonthComplete] = useState(0);
  const [yearComplete, setYearComplete] = useState(0);
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [qualifications, setQualifications] = useState<Qualification[]>([]);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    addQualification();
  }, [])
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
      case "degreeName":
        setDegreeName(value);
        break;
      case "institutionName":
        setInstitutionName(value);
        break;
      case "monthComplete":
        setMonthComplete(value);
        break;
      case "yearComplete":
        setYearComplete(value);
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
      case "qualifications":
        setQualifications(value);
        break;
      default:
        break;
    }
  };

  const handleQualificationChange = (
    index: number,
    field: keyof Qualification,
    value: string | string[]
  ) => {
    const updatedQualifications = qualifications.map((qual, idx) => {
      if (idx === index) {
        return { ...qual, [field]: value };
      }
      return qual;
    });
    setQualifications(updatedQualifications);
  };

  const addQualification = () => {
    setQualifications([...qualifications, { category: "", keywords: [] }]);
  };
  const removeQualification = () => {
    const updatedQualifications = qualifications.slice(
      0,
      qualifications.length - 1
    );
    setQualifications(updatedQualifications);
  };

  const handleSubmit = () => {
    const requestNewAccount = async () => {
      await fetch("/api/professional", {
        method: "POST",
        body: JSON.stringify({
          username,
          email,
          phoneNumber,
          firstName,
          lastName,
          degreeName,
          institutionName,
          monthComplete,
          yearComplete,
          streetAddress,
          city,
          state,
          zip,
          qualifications
        }),
      });
    };
    requestNewAccount();
    router.push("/")
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-2/3 mx-auto ">
        <div className="p-3">
          <h2 className="text-2xl font-bold mb-2 text-center"></h2>
          <table className="w-full">
            <tbody>
            <tr>
                <td className="pr-2">Usename:</td>
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
                <td className="pr-2">Degree Name:</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) =>
                      handleInputChange("degreeName", e.target.value)
                    }
                    className="w-full p-2 bg-blue-200"
                  />
                </td>
              </tr>
              <tr>
                <td className="pr-2">Institution Name:</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) =>
                      handleInputChange("institutionName", e.target.value)
                    }
                    className="w-full p-2 bg-blue-200"
                  />
                </td>
              </tr>
              <tr className="mt-2">
                <td className="pr-2">Month Completed:</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) =>
                      handleInputChange("monthComplete", e.target.value)
                    }
                    className="w-full p-2 bg-blue-200"
                  />
                </td>
              </tr>
              <tr className="mt-2">
                <td className="pr-2">Year Completed:</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) =>
                      handleInputChange("yearComplete", e.target.value)
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
              Qualifications
              {qualifications.map((qual, index) => (
                <tr key={index} className="mt-2">
                  <td className="pr-2">
                    <input
                      type="text"
                      value={qual.category}
                      className="w-full p-2 bg-blue-200"
                      onChange={(e) =>
                        handleQualificationChange(
                          index,
                          "category",
                          e.target.value
                        )
                      }
                    />
                  </td>
                  <td key={index} className="mt-2">
                    <input
                      type="text"
                      value={qual.keywords.join(", ")}
                      onChange={(e) =>
                        handleQualificationChange(
                          index,
                          "keywords",
                          e.target.value
                            .split(",")
                            .map((keyword) => keyword.trim())
                        )
                      }
                      className="w-full p-2 bg-blue-200"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-5 flex justify-between">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              onClick={addQualification}
            >
              Add Qualification
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={removeQualification}
            >
              Remove Qualification
            </button>
          </div>
          <div className="mt-5 flex justify-between">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              onClick={handleSubmit}
            >
              Create Account{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUpProfessional;
