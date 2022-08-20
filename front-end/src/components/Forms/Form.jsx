import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Post.css';

function Post() {
	const navigate = useNavigate();
	const [post, setPost] = useState({
		title: '',
		author: '',
		body: ''
	});

	const handleChange = event => {
		setPost({ ...post, [event.target.id]: event.target.value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		console.log(post);
		axios
			.post('https://ga-summer-2022-hackathon.herokuapp.com/Posts', post)
			.then(res => {
				console.log(res);
				if (res.status === 200) {
					navigate('/');
				} else {
					alert(
						'Oops your request was not able to submit. Please verify you have all of the required fields and try again.'
					);
				}
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="master-container">
			<div className="form-container">
				<div className="card-title">
					<p className="addBook">Add A Post</p>
				</div>
				<form onSubmit={handleSubmit} className="addForm">
					<div className="addDetails-container">
						<div className="author-container">
							<div className="author-label">
								<label htmlFor="author">Author </label>
							</div>
							<div className="author-input">
								<input
									onChange={handleChange}
									type="text"
									id="author"
									value={post.author}
									placeholder="First Last"
									required
								/>
							</div>
						</div>
						<div className="title-container">
							<div className="title-label">
								<label htmlFor="title">Title </label>
							</div>
							<div className="title-input">
								<input
									onChange={handleChange}
									id="title"
									value={post.title}
									placeholder="The Title"
									required
								/>
							</div>
						</div>
						<div className="body-container">
							<div className="body-label">
								<label htmlFor="body">Body of Post </label>
							</div>
							<div className="body-input">
								<input
									onChange={handleChange}
									list="bodys"
									id="body"
									value={post.body}
									placeholder="body"
									required
								/>
			
							</div>
						</div>
						</div>
						
						
					</div>
					<div className="addBookButton-container">
						<button type="submit" className="addBookButton">
							Submit Post
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Post;
