import React, { useState } from 'react';
import SidebarCloseButton from './SidebarCloseButton';
import SidebarMenuItem from './SidebarMenuItem';
import './Sidebar.scss';
const Sidebar = props => {
  const { isActive, setIsActive } = useState(false);
  return (
    <div className={!props.isActive ? 'sidebar' : 'sidebar active'}>
      <div className="sidebar-header">
        <div className="sidebar-header-wrapper">
          <div className="sidebar-header-left">
            <div className="sidebar-header-logo-image">
              <img src="./assets/header-logo-white.png" alt="Header Logo"></img>
            </div>
            <div className="sidebar-header-logo-text">CrowFi</div>
          </div>
          <div className="sidebar-header-right">
            <SidebarCloseButton></SidebarCloseButton>
          </div>
        </div>
      </div>
      <div className="sidebar-menu">
        <SidebarMenuItem title="Home"></SidebarMenuItem>
        <SidebarMenuItem title="Token Factory"></SidebarMenuItem>
        <SidebarMenuItem title="Launchpad"></SidebarMenuItem>
        <SidebarMenuItem title="Airdropper"></SidebarMenuItem>
        <SidebarMenuItem title="Lockers"></SidebarMenuItem>
      </div>
    </div>
  );
};

export default Sidebar;
