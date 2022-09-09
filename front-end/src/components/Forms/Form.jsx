import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Form.css';

function Post() {
	const navigate = useNavigate();
	const [post, setPost] = useState({
		userName: '',
		topic: '',
		title: '',
		body: ''
	});

	const handleChange = event => {
		setPost({ ...post, [event.target.id]: event.target.value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log(post);
		axios
			.POST('https://hackathon-summer-2022.herokuapp.com/Post', post)
			.then(res => {
				console.log(res);
				if (res.status === 200) {
					navigate('/');
				} else {
					alert('Oops your request was not able to submit. Please verify you have all of the required fields and try again.');
				}
			})
			.catch(err => console.log(err));
	};

	return <div className="master-container">
			<div className="card-title">
				<p className="addPost">Create Your Own Post</p>
			</div>
		

			<div className="form-container">
				<form onSubmit={handleSubmit} className="addForm">
					<div className="addDetails-container">
						<div className="userName-container">
							<div className="userName-label">
								<label htmlFor="userName">Username </label>
							</div>
							<div className="userName-input">
								<input onChange={handleChange} type="text" id="userName" value={post.userName} placeholder="First Last" required />
							</div>
						</div>
						
						<div className="topic-container">
							<div className="topic-label">
								<label htmlFor="topic">Topic</label>
							</div>
							<div className="topic-input">
								<input onChange={handleChange} id="topic" value={post.topic} placeholder="e.g. food, clothes, appliances..." required />
							</div>
						</div>
						
						<div className="title-container">
							<div className="title-label">
								<label htmlFor="title">Title </label>
							</div>
							<div className="title-input">
								<input onChange={handleChange} id="title" value={post.title} placeholder="The Title" required />
							</div>
						</div>
						<div className="body-container">
							<div className="body-label">
								<label htmlFor="body">Body of Post </label>
							</div>
							<div className="body-input">
								<input onChange={handleChange} list="bodys" id="body" value={post.body} placeholder="body" required />
							</div>
						</div>


						<div className="addPostButton-container">
							<button type="submit" onSubmit={handleSubmit}>
								Submit Post
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>;
}
export default Post;
