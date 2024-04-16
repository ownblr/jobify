import React from "react";

const StatsSection = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8 text-center"> 
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-800"> 
            Global Outreach
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
            5,000+
          </p>
          <p className="mt-1 text-gray-500">Professionals in 100+ countries</p>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-800"> 
            Success Stories
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
            10,000+
          </p>
          <p className="mt-1 text-gray-500">Projects fulfilled on InstaJob</p>
        </div>

        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-800"> 
            Community Growth
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600">
            500+
          </p>
          <p className="mt-1 text-gray-500">Professionals joining monthly</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
