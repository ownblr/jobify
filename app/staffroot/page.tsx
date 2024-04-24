//@ts-nocheck

"use client"
import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import StaffRoot from '../Components/StaffDashboardComponents/StaffRoot';
import Sidebar from '../Components/StaffRootComponents/Sidebar';
import AddStaff from '../Components/StaffRootComponents/AddStaff';
import DeleteStaff from '../Components/StaffRootComponents/DeleteStaff';
import { styled } from "styled-components"

const StaffRootAccount = () => {
    const [activeComponent, setActiveComponent] = React.useState("AddStaff");

    const handleComponentChange = (componentName) => {
        setActiveComponent(componentName);
      };
      return (
        <div className="overflow-hidden pb-0">
          <Navigation accountName="root root" />
          <div className="flex">
          <Sidebar onComponentChange={handleComponentChange}/>
            <main className="flex-grow ml-10 p-4 pb-4 bg-white">
            <DashboardContainer>
            {activeComponent === 'AddStaff' && <AddStaff />}
            {activeComponent === 'DeleteStaff' && <DeleteStaff />}

            </DashboardContainer> 
            </main>
          </div>
        </div>
      );
};
export default StaffRootAccount;

const DashboardContainer = styled.div `
    padding: 30px;
    padding-bottom: 0;
    margin-bottom: 0;
    margin: 30px;
    margin-top: 25px;
    margin-left: 170px;
    height: calc(100vh - 100px);
`
