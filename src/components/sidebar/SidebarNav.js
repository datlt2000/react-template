import React from 'react';
import PropTypes from 'prop-types';

import { Badge, NavItem, NavLink } from 'react-bootstrap'

export const SidebarNav = (props) => {
	const navLink = (name, to, icon, badge, indent = false) => {
		return (
			<NavLink className='d-flex align-items-center' href={to}>
				{icon
					? icon
					: indent && (
						<span className="nav-icon">
							<span className="nav-icon-bullet"></span>
						</span>
					)}
				<div className='mx-3 fs-5' style={{ fontWeight: 500 }}>
					{name && name}
				</div>
				{badge && (
					<Badge color={badge.color} className="ms-auto">
						{badge.text}
					</Badge>
				)}
			</NavLink>
		)
	}

	const navItem = (item, index, indent = false) => {
		const { name, to, badge, icon, ...rest } = item;
		return (
			<NavItem
				key={index}
				{...rest}
			>
				{to ? navLink(name, to, icon, badge, indent) : <div className='sidenav-menu-heading'>{name}</div>}
			</NavItem>
		)
	}
	const navGroup = (item, index) => {
		const { name, icon, items, to, ...rest } = item
		return (
			<NavItem
				key={index}
				id={name}
				{...rest}
			>
				<NavLink>{item.icon}<span className='ms-2'>{name}</span></NavLink>
				<div>
					{item.items?.map((item, index) =>
						item.items ? navGroup(item, index) : navItem(item, index, true),
					)}
				</div>
			</NavItem>
		)
	}
	return (
		<>
			{props.items &&
				props.items.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
		</>
	)
}

SidebarNav.propTypes = {
	items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
