"use client"
import React from 'react';
import Sidebar from '../Components/EmployerDashboardComponents/EmployerSidebar';
import Navigation from '../Components/Navigation/Navigation';
import CreateJob from '../Components/EmployerDashboardComponents/CreateJob';
import CurrentJobs from "../Components/EmployerDashboardComponents/CurrentJobs";
import EditEmployerAccount from '../Components/EmployerDashboardComponents/EditEmployerAccount';
import EmployerPayment from '../Components/EmployerDashboardComponents/EmployerPayment';
import { styled } from "styled-components"

const EmployerDashboard = () => {

    const [activeComponent, setActiveComponent] = React.useState("CreateJob");

    const handleComponentChange = (componentName) => {
        setActiveComponent(componentName);
      };

  return (
    <div className="overflow-hidden pb-0">
      <Navigation accountName="John Smith" />
      <div className="flex">
        <Sidebar onComponentChange={handleComponentChange}/>
        <main className="flex-grow ml-10 p-4 pb-4 bg-white">
            <DashboardContainer>
            {activeComponent === 'CurrentJobs' && <CurrentJobs />}
            {activeComponent === 'EmployerPayment' && <EmployerPayment />}
            {activeComponent === 'CreateJob' && <CreateJob onComponentChange={undefined} />}
            {activeComponent === 'EditEmployerAccount' && <EditEmployerAccount />}
            </DashboardContainer> 
        </main>
      </div>
    </div>
  );
};

export default EmployerDashboard;



const DashboardContainer = styled.div `
    padding: 30px;
    padding-bottom: 0;
    margin-bottom: 0;
    margin: 30px;
    margin-top: 25px;
    margin-left: 170px;
    height: calc(100vh - 100px);
`