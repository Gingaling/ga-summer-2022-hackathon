import React from 'react';
// import { Router, Routes, Route, Link } from 'react-router-dom';
import './Registration.css';
import Login from './Login';
import { Container, Col, Row } from "react-bootstrap";
import Register from './Register';


export default function Registration() {
    return (
    <Container>
    <Row>
		<Col xs={12} sm={12} md={6} lg={6}>
			<Register />
		</Col>
		<Col xs={12} sm={12} md={6} lg={6}>
            <Login />
            </Col>
	</Row>
    </Container>
    )
}