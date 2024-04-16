import { getUserID } from "@/app/lib";
import React, { useState } from "react";

const Sidebar = ({ onComponentChange }) => {
  const [showMatchingMessage, setShowMatchingMessage] = useState(false);

  const initateMatchingProcess = () => {
    
    const startMatching = async () => {
      const userID = await getUserID();
      await fetch("/api/matching", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: userID }),
      });
    }
    showMessage();
    startMatching();
    
  }
  const showMessage = () => {
    // Show the matching message
    setShowMatchingMessage(true);

    // Simulate sending the matching request (you can replace this with your actual logic)
    setTimeout(() => {
      // Hide the matching message after 2 seconds
      setShowMatchingMessage(false);
    }, 2000);
  };

  return (
    <div>
      <div
        id="docs-sidebar"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform fixed top-6 first-letter:start-0 bottom-0 w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700"
      >
        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            <li className="hs-accordion" id="users-accordion">
              <button
                onClick={() => onComponentChange("JobPostings")}
                type="button"
                className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-book-plus"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  <path d="M9 10h6" />
                  <path d="M12 7v6" />
                </svg>
                Job Postings
              </button>
            </li>
            <li className="hs-accordion" id="users-accordion">
              <button
                onClick={() => onComponentChange("CurrentApplications")}
                type="button"
                className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-briefcase"
                >
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>{" "}
                Matched Applications
              </button>
            </li>
            <li className="hs-accordion" id="users-accordion">
              <button
                type="button"
                onClick={() => onComponentChange("AccountSettings")}
                className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-user"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="10" r="3" />
                  <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                </svg>{" "}
                Account
              </button>
            </li>
            <li className="hs-accordion" id="users-accordion">
              <button
                type="button"
                onClick={() => onComponentChange("Payment")}
                className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Payment Plan
              </button>
            </li>
          </ul>
        </nav>
        <div>
          <li className="hs-accordion" id="users-accordion">
            <button
              type="button"
              className="block w-full py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-600"
              onClick={initateMatchingProcess}
            >
              Initiate Matching Process
            </button>
          </li>
          {showMatchingMessage && (
            <div className="mt-2 text-sm font-bold text-green-600">
              Sending Matching Request to the Agency...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
