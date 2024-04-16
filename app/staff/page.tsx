"use client"
import React from 'react';
import Sidebar from '../Components/StaffDashboardComponents/Sidebar';

import Navigation from '../Components/Navigation/Navigation';
import EmployerList from '../Components/StaffDashboardComponents/EmployerList';
import ProfessionalList from '../Components/StaffDashboardComponents/ProfessionalList';
import EmployerRequest from '../Components/StaffDashboardComponents/EmployerRequest';
import ProfessionalRequest from '../Components/StaffDashboardComponents/ProfessionalRequest';
import MatchingProcess from '../Components/StaffDashboardComponents/MatchingProcess';
import EditAccount from '../Components/StaffDashboardComponents/EditAccount';
import EmployerDeleteRequest from '../Components/StaffDashboardComponents/EmployerDeleteRequest';
import ProfessionalDeleteRequest from '../Components/StaffDashboardComponents/ProfessionalDeleteRequest';
import { styled } from "styled-components"
const StaffDashboard = () => {
    const [activeComponent, setActiveComponent] = React.useState("EmployerList");

    const handleComponentChange = (componentName) => {
        setActiveComponent(componentName);
      };

      return (
        <div className="overflow-hidden pb-0">
          <Navigation accountName="John Smith" />
          <div className="flex">
            <Sidebar onComponentChange={handleComponentChange}/>
            <main className="flex-grow ml-10 p-4 pb-4 bg-gray-500">
            <DashboardContainer>
            {activeComponent === 'EmployerList' && <EmployerList />}
            {activeComponent === 'ProfessionalList' && <ProfessionalList/>}
            {activeComponent === 'EmployerRequest' && <EmployerRequest/>}
            {activeComponent === 'ProfessionalRequest' && <ProfessionalRequest/>}
            {activeComponent === 'MatchingProcess' && <MatchingProcess/>}
            {activeComponent === 'EditAccount' && <EditAccount/>}
            {activeComponent === 'EmployerDeleteRequest' && <EmployerDeleteRequest/>}
            {activeComponent === 'ProfessionalDeleteRequest' && <ProfessionalDeleteRequest/>}

            </DashboardContainer> 
            </main>
          </div>
        </div>
      );
};
export default StaffDashboard;

const DashboardContainer = styled.div `
    padding: 30px;
    padding-bottom: 0;
    margin-bottom: 0;
    margin: 30px;
    margin-top: 25px;
    margin-left: 170px;
    height: calc(100vh - 100px);
`