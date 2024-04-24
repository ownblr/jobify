//@ts-nocheck
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";



const EditAccount = () => {
  const router = useRouter();
  const [session, setSession] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");

  const handleInputChange = (key, value) => {
    switch (key) {
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    try {
      setIsLoading(true);
      const getSession = async () => {
        const data = await fetch("/api/getSession");
        const sessionData = await data.json();
        setSession(sessionData);
        console.log(sessionData)

      };
      getSession();
    } catch (error) {
      console.error("Error fetching session:", error);
      setIsLoading(false);

    } finally {
      setIsLoading(false)
    }
  }, []);

  const handleChangePassword = () => {
    router.push("/changepassword");
  };

  const handleSave = () => {
    alert("Account Updated");
    const requestAccountSave = async () => {
      await fetch("/api/staff", {
        method: "PATCH",
        body: JSON.stringify({
          id: session.user.id,
          email,
          phoneNumber,

        }),
      });
    };
    requestAccountSave();
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
            {session.user.username}
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
              </tbody>
              </table>
              <div>
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

      </div>
        </div>
      </div>
     
    </div>
  );
};
export default EditAccount;
