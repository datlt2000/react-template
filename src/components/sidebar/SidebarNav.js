import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Badge, NavDropdown, NavItem } from 'react-bootstrap'

export const SidebarNav = (props) => {
	const location = useLocation()
	const navLink = (name, icon, badge, indent = false) => {
		return (
			<>
				{icon
					? icon
					: indent && (
						<span className="nav-icon">
							<span className="nav-icon-bullet"></span>
						</span>
					)}
				{name && name}
				{badge && (
					<Badge color={badge.color} className="ms-auto">
						{badge.text}
					</Badge>
				)}
			</>
		)
	}

	const navItem = (item, index, indent = false) => {
		const { component, name, badge, icon, ...rest } = item;
		const Component = component;
		return (
			<Component
				key={index}
				{...rest}
			>
				{navLink(name, icon, badge, indent)}
			</Component>
		)
	}
	const navGroup = (item, index) => {
		const { name, icon, items, to, ...rest } = item
		return (
			<NavDropdown
				key={index}
				id={name}
				title={name}
				{...rest}
			>
				{item.items?.map((item, index) =>
					item.items ? navGroup(item, index) : navItem(item, index, true),
				)}
			</NavDropdown>
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
