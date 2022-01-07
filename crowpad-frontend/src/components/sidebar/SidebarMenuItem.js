import React from 'react';
import './SidebarMenuItem.scss';

const SidebarMenuItem = props => {
  return (
    <div
      className={
        !props.isSelected ? 'sidebarmenuitem' : 'sidebarmenuitem selected'
      }
    >
      <div className="sidebarmenuitem-title">{props.title}</div>
    </div>
  );
};

export default SidebarMenuItem;
