import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
// import './Posting.css';

export default function Post() {
	const [userName, setUserName] = useState("");
	const [topic, setTopic] = useState("");
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [posted, setPosted] = useState(false);

  const handleSubmit = e => {
		// prevent the form from refreshing the whole page
		e.preventDefault();

		// set configurations
		const configuration = {
			method: 'POST',
			url: 'https://hackathon-summer-2022.herokuapp.com/posts',
			data: {
				userName,
				topic,
				title,
				body
			},
		};

		// make the API call
		axios(configuration)
			.then(result => {
				setPosted(true);
			})
			.catch(error => {
				error = new Error();
			});
	}
  
	return (
    <>
      <h2>Create your own posting</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* username */}
        <Form.Group controlId="formBasicUsername1">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="userName"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter username"
          />
        </Form.Group>
  
	    {/* topic */}
        <Form.Group controlId="formBasicTopic">
          <Form.Label>Topic</Form.Label>
          <Form.Control
            type="topic"
            name="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. clothes, appliances, even food"
          />
        </Form.Group>

        {/* title */}
        <Form.Group controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
          />
        </Form.Group>

		     {/* body */}
        <Form.Group controlId="formBasicBody">
          <Form.Label>Body</Form.Label>
          <Form.Control
            type="body"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="body"
          />
        </Form.Group>

        {/* submit button */}
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Post Your Opp
        </Button>

        {/* display success message */}
        {posted ? (
          <p className="text-success">Success! You Have Posted!</p>
        ) : (
          <p className="text-danger">You Did Not Post</p>
        )} 
      </Form>
    </>
  );
}
