import React from "react";

const AccountSelectorCard = ({ accountType }) => {
  return (
    <main className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 cursor-default">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              {accountType}
            </h1>
          </div>

          <div className="mt-5">
            <img
              src={
                accountType === "Professional"
                  ? "https://cdn.mos.cms.futurecdn.net/Rvu47br3EoaSrWTbdqFc3b.jpg"
                  : "https://4236008.fs1.hubspotusercontent-na1.net/hub/4236008/hubfs/iStock-1152447561.jpeg?width=858&name=iStock-1152447561.jpeg"
              }
              alt="account type"
              className="rounded-xl  w-full h-48 object-cover object-center"
            />

            <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
              {accountType === "Professional"
                ? "For professional seeking to be hired for job opportunities and contracts"
                : "For employers and businesses looking to higher professionals"}
            </p>
            <div className="mt-3 py-3 flex items-center text-xs text-gray-400 uppercase border-t border-gray-200 dark:border-gray-600"></div>

            <div className=" text-center">
            <button
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              {accountType} sign up
            </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AccountSelectorCard;
