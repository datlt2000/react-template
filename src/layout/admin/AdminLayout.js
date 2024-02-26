import React from 'react';
import TopbarAvatar from 'components/topbar/TopbarAvatar';
import Sidebar from 'components/sidebar/Sidebar';
import SimpleThreeColumnFooter from 'components/footer/SimpleThreeColumnFooter';
import { footer } from 'const/DressPageDemo';
import LayoutContent from 'components/bases/LayoutContent';
import adminRoute from 'routes/AdminRoute';
import _nav from 'const/AdminNav';
import logo from "images/logo.svg";
import avatar from "images/profile-1.png";
import { Col, Row } from 'react-bootstrap';

const AdminLayout = () => {
	return (
		<Row>
			<Col xs={2} style={{ maxWidth: '400px', minWidth: '200px' }}>
				<Sidebar navigation={_nav} logo={logo} title="Treact" />
			</Col>
			<Col xs={10}>
				<div className="wrapper d-flex flex-column min-vh-100">
					<TopbarAvatar type="relative" avatar={avatar} notiFunction={() => { }} messageFunction={() => { }} />
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
