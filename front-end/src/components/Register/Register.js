import React, { useState } from 'react'
import axios from 'axios'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import './Register.css'

export default function Register() {
  
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [register, setRegister] = useState(false);
  
const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "https://ga-summer-2022-hackathon.herokuapp.com/register",
      data: {
        userName,
        email,
        password,
      },
    };
       
    axios(configuration)
      .then((result) => {
        setRegister(true);
      })
      .catch((error) => {
        error = new Error();
      });
   };

   return (
    <>
    <div className="main">
      <h2>Register</h2>
      <Form onSubmit={(e)=>handleSubmit(e)}>
        {/* userName */}
        <Form.Group controlId="formBasicUserName">
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
        <div id="btn-register">
         <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Register
        </Button>
        </div>
 
      {/* display success message */}
        {register ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}
      </Form>
      </div>
    </>
  )
}
