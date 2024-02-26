import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faCalendar, faDollarSign, faComment } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Row, Col, Container, Table, Button, Stack, Form, Modal } from "react-bootstrap";
import ValueCard from "components/bases/ValueCard";

const stat = [
	{
		'title': 'Images',
		'value': '8',
		'color': 'primary',
		'icon': <FontAwesomeIcon icon={faCalendar} size="2x" className="text-black-50" style={{ opacity: '.3' }} />
	},
	{
		'title': 'Total Size',
		'value': '2.59GB',
		'color': 'danger',
		'icon': <FontAwesomeIcon icon={faDollarSign} size="2x" className="text-black-50" style={{ opacity: '.3' }} />
	},
	{
		'title': 'in use',
		'value': '3',
		'color': 'info',
		'icon': <FontAwesomeIcon icon={faClipboardList} size="2x" className="text-black-50" style={{ opacity: '.3' }} />
	},
	{
		'title': 'Unused',
		'value': '5',
		'color': 'warning',
		'icon': <FontAwesomeIcon icon={faComment} size="2x" className="text-black-50" style={{ opacity: '.3' }} />
	}
]

const data = [
	{
		'name': 'modbus',
		'status': 'in use',
		'tag': 'latest',
		'imageId': 'asdasdasd',
		'created': '3 month ago',
		'size': '55.45GB'
	},
	{
		'name': 'db-handler',
		'status': 'in use',
		'tag': 'latest',
		'imageId': 'asdasdasd',
		'created': '3 month ago',
		'size': '55.45GB'
	},
	{
		'name': 'aziot-agent',
		'status': 'in use',
		'tag': 'latest',
		'imageId': 'asdasdasd',
		'created': '3 month ago',
		'size': '55.45GB'
	}
]
export default function Images() {
	const [show, setShow] = useState(false);
	const [item, setItem] = useState(null);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const runImage = (imageId) => {

	}
	return (
		<Container fluid>
			<h3 className="mb-4">
				Images
			</h3>
			<Row className="mb-5">
				{stat.map((item, idx) => {
					return <Col xl={3} md={6} key={idx}>
						<ValueCard {...item} />
					</Col>
				})}
			</Row>
			<Row className="mb-5">
				<Col md={6}>
					<Stack gap={2} direction="horizontal">
						<Form.Control className="me-auto" placeholder="link to reponsitory..." />
						<Button variant="secondary">Download</Button>
					</Stack>
				</Col>
			</Row>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Name</th>
						<th>Status</th>
						<th>Tag</th>
						<th>Images ID</th>
						<th>Created</th>
						<th>Size</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, idx) => {
						return (
							<tr>
								<td>{item.name}</td>
								<td>{item.status}</td>
								<td>{item.tag}</td>
								<td>{item.imageId}</td>
								<td>{item.created}</td>
								<td>{item.size}</td>
								<td>
									<Button variant="primary" onClick={() => { handleShow(); setItem(item); }}>
										Run
									</Button>
								</td>
							</tr>);
					})}
				</tbody>
			</Table>
			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Run image {item.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Select>
							<option>Select Environment</option>
							<option>Production</option>
							<option>Staging</option>
							<option>Development</option>
							<option>Testing</option>
						</Form.Select>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={() => runImage(item.imageId)}>Run</Button>
				</Modal.Footer>
			</Modal>
		</Container >
	);
}