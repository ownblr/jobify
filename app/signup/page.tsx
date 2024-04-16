import React from "react";
import AccountSelectorCard from "../Components/AccountSelectorCard/AccountSelectorCard";

const AccountTypeSelector = () => {
  return (
    <div className="dark:bg-slate-900 bg-gray-100 min-h-screen w-full flex flex-col items-center py-16">
      <h1 className="mt-3 block font-medium text-gray-200 text-4xl sm:text-5xl md:text-3xl lg:text-4xl">
        Create an account
      </h1>
      <div className="flex items-center justify-center space-x-4">
        <a href="/signup/professional">
          <AccountSelectorCard accountType="Professional" />
        </a>
        <a href="/signup/employer">
          <AccountSelectorCard accountType="Employer" />
        </a>
      </div>
      <div>
        <p className="text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-600">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default AccountTypeSelector;
