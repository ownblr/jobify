"use client"
import React, { useState } from "react";

const StaffRoot = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [preferredUsername, setPreferredUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(generatePassword());

    // Function to generate a random password
    function generatePassword() {
        const length = 8;
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }

    // Function to handle form submission
    const handleAddStaff = (e) => {
        e.preventDefault(); // Prevent form submission from refreshing the page
        // Here, you can handle the logic to add staff using the form values
        console.log("Adding staff...");
        console.log({
            firstName,
            lastName,
            preferredUsername,
            phone,
            email,
            password
        });
    };

    return (
        <div className="flex justify-center items-start h-screen">
            <form onSubmit={handleAddStaff} className="bg-gray-200 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block mb-2">First Name:</label>
                    <input 
                        type="text" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Last Name:</label>
                    <input 
                        type="text" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Preferred Username:</label>
                    <input 
                        type="text" 
                        value={preferredUsername} 
                        onChange={(e) => setPreferredUsername(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Phone:</label>
                    <input 
                        type="text" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Password:</label>
                    <input 
                        type="text" 
                        value={password} 
                        readOnly 
                        disabled
                        className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                    Add Staff
                </button>
            </form>
        </div>
    );
};

export default StaffRoot;
