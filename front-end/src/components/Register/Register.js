import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
// import './Register.css'
// import './Login.css';

export default function Register() {
  // initial state
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "POST",
      url: "https://hackathon-summer-2022.herokuapp.com/register",
      data: {
        userName,
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
       setRegister(true);
      })
      .catch((error) => {
        error = new Error();
      });
    }
  

  return (
    <>
      <h2>Register</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* username */}
        <Form.Group controlId="formBasicUsername22">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="userName"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter username"
          />
        </Form.Group>
  
  
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        {/* submit button */}
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)} >
          Register
        </Button>

        {/* display success message */}
        {register ? (
          <p className="text-success">Success! You Are Registered!</p>
        ) : (
          <p className="text-danger">Are you registered and taking advantage <br /> of the many benefits available only to members?</p>
        )} 
      </Form>
    </>
  );
}
