//@ts-nocheck

"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const ChangePasswordProf = () => {
  const [currentPassword, setCurrentPassword] = useState(""); // Initialize currentPassword state
  const [newPassword, setNewPassword] = useState("");
  const [retypeNewPassword, setRetypeNewPassword] = useState("");
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const data = await fetch("/api/getSession");
      const sessionData = await data.json();
      setSession(sessionData);

    };
    getSession();
  }, []);

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleRetypeNewPasswordChange = (e) => {
    setRetypeNewPassword(e.target.value);
  };

  const handleSubmit = () => {
    // Check if any field is empty
    if (!currentPassword || !newPassword || !retypeNewPassword) {
      alert("Please fill in all fields.");
      return;
    }

    // Check if the new password matches the retype password
    if (newPassword !== retypeNewPassword) {
      alert("New password and retype new password must match.");
      return;
    }

    // Check if the new password meets the format requirements
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(newPassword)) {
      alert(
        "New password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one symbol."
      );
      return;
    }
    if (session.user.password !== currentPassword) {
      alert("Current password is incorrect");
      return;
    }
    const updatePassword = async () => {
      const response = await fetch("/api/passwordChange", {
        method: "PATCH",
        body: JSON.stringify({ id: session.user.id, newPassword }),
      });
      if (response.ok) {
        alert("Password updated successfully");
        router.back();
      } else {
        alert("Error updating password");
      }
    }
    updatePassword();
  };

  const handleCancel = () => {
    router.back()
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-500">
      <div className="bg-gray-200 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Change Password</h2>
        <div className="mb-4">
          <label htmlFor="currentPassword" className="block mb-2">
            Current Password:
          </label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
            className="w-full p-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block mb-2">
            New Password:
          </label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={handleNewPasswordChange}
            className="w-full p-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="retypeNewPassword" className="block mb-2">
            Retype New Password:
          </label>
          <input
            type="password"
            id="retypeNewPassword"
            value={retypeNewPassword}
            onChange={handleRetypeNewPasswordChange}
            className="w-full p-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Submit
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordProf;
