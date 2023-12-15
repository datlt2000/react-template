import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	Button,
	Navbar,
	Container,
	Nav,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SidebarNav } from 'components/sidebar/SidebarNav'
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ navigation }) => {
	const dispatch = useDispatch()
	const unfoldable = useSelector((state) => state.sidebarUnfoldable)
	const sidebarShow = useSelector((state) => state.sidebarShow)

	return (
		<Navbar
			className="border-end"
			position="fixed"
		>
			<Container className="border-bottom">
				<Navbar.Brand to="/">
					<FontAwesomeIcon customClassName="sidebar-brand-full" icon={faFacebook} height={32} />
				</Navbar.Brand>
				<Button
					className="d-lg-none"
					dark
					onClick={() => dispatch({ type: 'set', sidebarShow: false })}
				>
					<FontAwesomeIcon customClassName="sidebar-brand-narrow" icon={faBars} height={32} />
				</Button>
			</Container>
			<Nav>
				{/* <SidebarNav items={navigation} /> */}
				<Nav.Item>
					<Nav.Link href="/home">Active</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-1">Link</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-2">Link</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="disabled" disabled>
						Disabled
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</Navbar>
	)
}

export default Sidebar
