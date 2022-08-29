import React, { useState } from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import './Login.css'
import axios from 'axios'
import Cookies from "universal-cookie"

const cookies = new Cookies()

export default function Login() {
  // initial state
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "https://ga-summer-2022-hackathon.herokuapp.com/login",
      data: {
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        // set the cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        // redirect user to the auth page
        window.location.href = "/auth";

        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <>
     <div className="main">
      <h2>Login</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
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
          Login
        </Button>
</div>
        {/* display success message */}
        {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}
      </Form>
      </div>
    </>
  );
}