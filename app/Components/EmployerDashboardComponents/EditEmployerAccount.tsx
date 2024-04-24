//@ts-nocheck

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
  const [session, setSession] = useState<session>();
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [qualifications, setQualifications] = useState<Qualification[]>([]);

  const handleInputChange = (key, value) => {
    switch (key) {
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
    const updatedQualifications = qualifications.slice(0, qualifications.length - 1);
    setQualifications(updatedQualifications);
  }

  useEffect(() => {
    try {
      setIsLoading(true);
      const getSession = async () => {
        const data = await fetch("/api/getSession");
        const sessionData = await data.json();
        setSession(sessionData);
        console.log(sessionData)
        if (sessionData.account.qualifications) {
          setQualifications(JSON.parse(sessionData.account.qualifications));
        }
      };
      getSession();
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);

    }
  }, []);

  const handleChangePassword = () => {
    router.push("/changepassword");
  };

  const handleSave = () => {
    alert("Account Updated");
    const requestAccountSave = async () => {
      await fetch("/api/employer", {
        method: "PATCH",
        body: JSON.stringify({
          id: session.user.id,
          email,
          phoneNumber,
          companyName,
          streetAddress,
          city,
          state,
          zip,
        }),
      });
    };
    requestAccountSave();
  };

  const handleDelete = () => {
    alert("Request To Delete Account Placed");
    const requestAccountDelete = async () => {
      await fetch("/api/employerDeleted", {
        method: "PATCH",
        body: JSON.stringify({
          id: session.user.id,
        }),
      });
    };
    requestAccountDelete();
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!session) {
    return <p>No session found</p>;
  }
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-2/3 mx-auto ">
        <div className="p-3">
          <h2 className="text-2xl font-bold mb-2 text-center">
            {session.account.firstName} {session.account.lastName}
          </h2>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="pr-2">Email Address:</td>
                <td>
                  <input
                    type="text"
                    placeholder={session.user.email}
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
                    placeholder={session.user.phoneNumber}
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
                    placeholder={session.account.companyName}
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
                    placeholder={session.account.streetAddress}
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
                    placeholder={session.account.city}
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
                    placeholder={session.account.state}
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
                    placeholder={session.account.zip}
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
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={handleDelete}
        >
          Delete Account
        </button>
      </div>
        </div>
      </div>
     
    </div>
  );
};
export default EditAccount;
