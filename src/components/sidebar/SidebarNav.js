import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Badge } from 'react-bootstrap'

export const SidebarNav = ({ items }) => {
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
		const { component, name, badge, icon, ...rest } = item
		const Component = component
		return (
			<Component
				{...(rest.to &&
					!rest.items && {
					component: NavLink,
				})}
				key={index}
				{...rest}
			>
				{navLink(name, icon, badge, indent)}
			</Component>
		)
	}
	const navGroup = (item, index) => {
		const { component, name, icon, items, to, ...rest } = item
		const Component = component
		return (
			<Component
				compact
				idx={String(index)}
				key={index}
				toggler={navLink(name, icon)}
				visible={location.pathname.startsWith(to)}
				{...rest}
			>
				{item.items?.map((item, index) =>
					item.items ? navGroup(item, index) : navItem(item, index, true),
				)}
			</Component>
		)
	}

	return (
		<React.Fragment>
			{items &&
				items.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
		</React.Fragment>
	)
}

SidebarNav.propTypes = {
	items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
