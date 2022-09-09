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

// 	const handleSubmit = e => { 
// 		e.preventDefault();
// 		const post = { userNamer, topic, title, body };
// 		setIsPending(true);
// 		// "https://hackathon-summer-2022.herokuapp.com/post" 
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
                  