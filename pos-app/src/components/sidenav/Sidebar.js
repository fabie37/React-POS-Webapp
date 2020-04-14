import React from 'react';
import './Sidebar.css';
import SidebarIcon from './SidebarIcon';

function Sidebar({ navItems }) {
	return (
		<div className="sidebar">
			{navItems.map( navItem => (
				<SidebarIcon navItem={navItem} />
			))}
		</div>
	);
}

export default Sidebar;