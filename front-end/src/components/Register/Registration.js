import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Registration.css';
import Login from './Login';
import Register from './Register';

export default function Registration() {
	return (
			<Row>
				<Col xs={12} sm={12} md={6} lg={6}>
					<Register />
				</Col>
				<Col xs={12} sm={12} md={6} lg={6}>
					<Login />
				</Col>
			</Row>
	);
}
