import { useState } from 'react';
import { useNavigate } from 'react-router';
import './Posts.css'

const Posts = () => {
	const [topic, setTopic] = useState('');
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('Shubham');
	const [isPending, setIsPending] = useState(false);
	const navigate = useNavigate();

<<<<<<< HEAD:front-end/tempStorage/Posts/Posts.jsx
// 	const handleSubmit = e => { 
// 		e.preventDefault();
// 		const post = { userNamer, topic, title, body };
// 		setIsPending(true);
// 		"https://hackathon-summer-2022.herokuapp.com/post" 
// 		fetch('', {
// 			method: 'POST',
// 			headers: { 'Content-Type': 'application/json' },
// 			mode: 'no-cors',
// 			credentials: 'include',
// 			body: JSON.stringify(post)
// 		}).then(() => {
// 			setIsPending(false);
// 			navigate('/');
// 		});
// 	};
=======
	const handleSubmit = e => {
		e.preventDefault();
		const post = { topic, title, body, author };
		setIsPending(true);
		fetch ('https://ga-summer-2022-hackathon.herokuapp.com/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			mode: 'no-cors',
			credentials: 'include',
			body: JSON.stringify(post)
		}).then(() => {
			setIsPending(false);
			navigate('/');
		});
	};
>>>>>>> parent of 219b2ee (Committing files):front-end/src/components/Posts/Posts.jsx

	return <div className="create">
			<h2>Add a New Post</h2>
			<form onSubmit={handleSubmit}>

				<label>Post Topic</label>
				<input type="text" 
				required 
				value={title} 
				onChange={e => setTopic(e.target.value)}
				/>

				<label>Post Title</label>
				<input type="text" 
				required 
				value={title} 
				onChange={e => setTitle(e.target.value)}
				/>

				<label>Post Body:</label>
				<textarea required 
				value={body} 
				onChange={e => setBody(e.target.value)}
				/>
				<label>Post author:</label>
				<textarea required value={author} onChange={e => setAuthor(e.target.value)} />
				<div>
					<button type="submit">Add Post</button>
				</div>
			</form>
		</div>;
};

export default Posts;
                  