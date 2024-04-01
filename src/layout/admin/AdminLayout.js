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
import { Col, Container, Row } from 'react-bootstrap';

const AdminLayout = () => {
	return (
		<Container fluid>
			<Row>
				<Col xs={3} style={{ maxWidth: '300px', minWidth: '200px' }} className='p-0'>
					<div style={{ height: '100vh' }}>
						<Sidebar navigation={_nav} logo={logo} title="Treact"className="bg-white pt-0 shadow-right" />
					</div>
				</Col>
				<Col xs={9} className='p-0 flex-fill' style={{ height: '100vh', overflow: 'auto' }}>
					<div className="wrapper d-flex flex-column min-vh-100">
						<TopbarAvatar type="relative" avatar={avatar} notiFunction={() => { }} messageFunction={() => { }} className="bg-white py-1 shadow-right" />
						<div className="body flex-grow-1">
							<LayoutContent routes={adminRoute} />
						</div>
						<SimpleThreeColumnFooter {...footer} />
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default AdminLayout
