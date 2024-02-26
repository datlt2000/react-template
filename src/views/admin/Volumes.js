import React from "react";
import { Container, Table } from "react-bootstrap";

export default function DashBoard() {
	return (
		<Container fluid>
			<h3 className="mb-4">
				Volumes
			</h3>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Name</th>
						<th>Created</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>modbus</td>
						<td>3 month ago</td>
					</tr>
					<tr>
						<td>db-handler</td>
						<td>3 month ago</td>
					</tr>
					<tr>
						<td>aziot-agent</td>
						<td>3 month ago</td>
					</tr>
				</tbody>
			</Table>
		</Container>
	);
}