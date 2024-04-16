import React, { useState, useEffect } from "react";

const UserForm = ({ onValidityChange }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");

  // Validation function for username
  const validateUsername = (username) => {
    return /^[A-Za-z][A-Za-z0-9_]{7,}$/.test(username); // Username starts with an alphabet, followed by at least 7 characters (alphabets, digits, or underscores)
  };

  useEffect(() => {
    const isFormValid = firstName.trim() !== "" && lastName.trim() !== "" && validateUsername(username);
    onValidityChange(isFormValid);
  }, [firstName, lastName, username, onValidityChange]);

  return (
    <div>
      <form>
        <div className="grid gap-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm mb-2 dark:text-white">First Name</label>
            <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm mb-2 dark:text-white">Last Name</label>
            <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
          </div>
          <div>
            <label htmlFor="username" className="block text-sm mb-2 dark:text-white">Preferred Username</label>
            <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
            {!validateUsername(username) && username.length > 0 && (
              <p className="text-red-500 text-xs mt-1">Username must be at least 8 characters long and start with a letter.</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
