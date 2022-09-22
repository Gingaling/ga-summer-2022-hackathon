<<<<<<< HEAD
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
=======
// import { useState } from 'react';
// import { useNavigate } from 'react-router';
// import './Posts.css'

// const Posts = () => {
// 	const [userName, setUserName] = useState('Shubham');
// 	const [topic, setTopic] = useState('');
// 	const [title, setTitle] = useState('');
// 	const [body, setBody] = useState('');
// 	const [isPending, setIsPending] = useState(false);
// 	const navigate = useNavigate();

>>>>>>> ffca8fe70cbb21124d7b0b1b9a3ab359cc670876
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
<<<<<<< HEAD
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
=======

// 	return <div className="create">
// 			<h2>Add a New Post</h2>
// 			<form onSubmit={handleSubmit}>

// 				<label>Post userNamer:</label>
// 				<textarea required value={userNamer} onChange={e => setUserNamer(e.target.value)} />

// 				<label>Post Topic</label>
// 				<input type="text" 
// 				required 
// 				value={topic} 
// 				onChange={e => setTopic(e.target.value)}
// 				/>

// 				<label>Post Title</label>
// 				<input type="text" 
// 				required 
// 				value={title} 
// 				onChange={e => setTitle(e.target.value)}
// 				/>

// 				<label>Post Body:</label>
// 				<textarea required 
// 				value={body} 
// 				onChange={e => setBody(e.target.value)}
// 				/>
// 				<div>
// 					<button type="submit">Add Post</button>
// 				</div>
// 			</form>
// 		</div>;
// };

// export default Posts;
>>>>>>> ffca8fe70cbb21124d7b0b1b9a3ab359cc670876
                  