"use client"
import React from "react";
import Sidebar from "../Components/ProfessionalDashboardComponents/Sidebar";
import Navigation from "../Components/Navigation/Navigation";
import JobPostings from "../Components/ProfessionalDashboardComponents/JobPostings";
import AccountSettings from "../Components/ProfessionalDashboardComponents/AccountSettings";
import Payment from "../Components/ProfessionalDashboardComponents/Payment";
import MatchedJobs from "../Components/ProfessionalDashboardComponents/MatchedJobs";
import { styled } from "styled-components";

const ProfessionalDashboard = () => {
  const [activeComponent, setActiveComponent] = React.useState("JobPostings");

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="overflow-hidden pb-0">
      <Navigation accountName="John Smith" />
      <div className="flex">
        <Sidebar onComponentChange={handleComponentChange} />
        <main className="flex-grow ml-10 p-4 pb-4 bg-gray-700">
          <DashboardContainer>
            {activeComponent === "JobPostings" && <JobPostings />}
            {activeComponent === "CurrentApplications" && (
              <MatchedJobs />
            )}
            {activeComponent === "AccountSettings" && <AccountSettings />}
            {activeComponent === "Payment" && <Payment />}
          </DashboardContainer>
        </main>
      </div>
    </div>
  );
};

export default ProfessionalDashboard;

const DashboardContainer = styled.div`
  padding: 30px;
  padding-bottom: 0;
  margin-bottom: 0;
  margin: 30px;
  margin-top: 25px;
  margin-left: 170px;
  height: calc(100vh - 100px);
`;
