"use client"
import { useEffect, useState} from "react";
import React from "react";
import logo from "../../../public/images/logo.png"
import Image from "next/image";

const Navigation = () => {
  const [session, setSession] = useState(null);
  const [accountName, setAccountName] = useState("Sign In");

  useEffect(() => {
    const getSession = async () => {
      const data = await fetch("/api/getSession");
      const sessionData = await data.json();
      setSession(sessionData);
      if (sessionData && sessionData.user && sessionData.user.username) {
        setAccountName(sessionData.user.username);
      }
    };
    getSession();
  }, []);

  
  return (
      <header className="fixed top-0 left-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
        <nav
          className="flex items-center justify-start w-full px-4 sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex justify-left">
            <a href="/">
              <Image className="w-10" src={logo} alt="logo" />

            </a>
            <a
              className="flex-none text-xl font-semibold dark:text-white"
              href="/"
              aria-label="Brand"
            >
              &nbsp;InstaJob
            </a>
            
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              <a
                className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
                href="/signin"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
                {accountName}
              </a>
              <a
                onClick={async () => {
                  const data = await fetch("/api/signOut");
                  if (data.ok) {
                    setAccountName("Sign In");
                  }
                }}
                className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
                href="/signin"
              >
                {
                  accountName !== "Sign In" ? "Sign Out" : ""
                }
              </a>
            </div>
          </div>
        </nav>
      </header>
  );
};

export default Navigation;
