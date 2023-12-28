import React from 'react';
import TopbarSimple from 'components/topbar/TopbarSimple';
import Sidebar from 'components/sidebar/Sidebar';
import SimpleThreeColumnFooter from 'components/footer/SimpleThreeColumnFooter';
import { footer, navLink } from 'const/DressPageDemo';
import LayoutContent from 'components/bases/LayoutContent';
import adminRoute from 'routes/AdminRoute';
import _nav from 'const/AdminNav';
import logo from "images/logo.svg";
import { Col, Row } from 'react-bootstrap';

const AdminLayout = () => {
	return (
		<Row>
			<Col xs={2}>
				<Sidebar navigation={_nav} logo={logo} title="Treact" />
			</Col>
			<Col xs={10}>
				<div className="wrapper d-flex flex-column min-vh-100">
					<TopbarSimple type="relative" navLink={navLink} logo={logo} title="Treact" />
					<div className="body flex-grow-1">
						<LayoutContent routes={adminRoute} />
					</div>
					<SimpleThreeColumnFooter {...footer} />
				</div>
			</Col>
		</Row>
	)
}

export default AdminLayout
