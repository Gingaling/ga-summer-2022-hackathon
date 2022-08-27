import React from 'react';
// import { Router, Routes, Route, Link } from 'react-router-dom';
import './Registration.css';
import Login from './Login';
import Register from './Register';
import { Container, Col, Row } from "react-bootstrap";


export default function Registration() {
    return (
    <Container>
    <Row>
		<Col xs={12} sm={12} md={6} lg={6}>
			<Register />
		</Col>
		<Col xs={12} sm={12} md={6} lg={6} />
            <Login />
	</Row>
    </Container>
    )
}