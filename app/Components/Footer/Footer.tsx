import React from "react";

const Footer = () => {
  return (
    <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="text-center">
        <div>
          <a
            className="flex-none text-xl font-semibold text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
            aria-label="Brand"
          >
            Brand
          </a>
        </div>

        <div className="mt-3">
          <p className="text-gray-500">
            We are{" "}
            <a
              className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
              href="/"
            >
              InstaJob
            </a>{" "}
          </p>
          <p className="text-gray-500">
            © InstaJob. 2024. All rights reserved.
          </p>
        </div>

        <div className="mt-3 space-x-2">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
