import React from 'react';
import { useDispatch } from 'react-redux';
import {
	Button,
	Navbar,
	Container,
	Nav
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SidebarNav } from 'components/sidebar/SidebarNav';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "components/bases/TopbarComponents";

const Sidebar = (props) => {
	const dispatch = useDispatch();

	return (
		<Navbar className="sidebar">
			<Container className="border-bottom">
				<Logo src={props.logo} title={props.title} />
				<Button
					variant='link'
					onClick={() => dispatch({ type: 'set', sidebarShow: false })}
				>
					<FontAwesomeIcon icon={faBars} />
				</Button>
			</Container>
			<Container>
				<Nav className="d-md-block w-100">
					<SidebarNav items={props.navigation} />
				</Nav>
			</Container>
		</Navbar>
	)
}

export default Sidebar
