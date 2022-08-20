import React from 'react';
// import { Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
// import HomePage from './components/HomePage/HomePage';
// import LoginButton from './components/LoginButton/LoginButton';
import LogoutButton from './components/LogoutButton/LogoutButton';
// import Register from './Register';
// import Login from './Login';

export default function App() {

	return (
		<>
		{/* <header>
		<div className="login">
		<LoginButton />
		</div>
		<div className="logout">
			<LogoutButton />
		</div>
		</header> */}
		<NavBar />
		</>
	)
}
