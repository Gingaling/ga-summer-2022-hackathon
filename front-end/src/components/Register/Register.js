import React from 'react'
import { Form, Button } from "react-bootstrap"
import './Register.css'

export default function Register() {
    return (
    <>
    <div className="main">
             <h2>Register</h2>
      <Form>
        {/* userName */}
        <Form.Group controlId="formBasicUserName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="userName" placeholder="Enter username" />
        </Form.Group>

        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        {/* submit button */}
        <div id="button">
        <button id="register" type="submit">
          Submit
        </button>
        </div>
      </Form>
    
    </div>
      </>
    )
}
