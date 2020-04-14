import React from 'react';
import './Sidebar.css';

function SidebarIcon({navItem}) {
	return (
		<div className="sidebar-icon">
            <i className={ navItem["active"] ? "fas active " + navItem["class"] : "fas " + navItem["class"] }></i>
		</div>
	);
}

export default SidebarIcon;