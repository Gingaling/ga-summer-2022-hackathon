import React from 'react';
import './App.css';
import { Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Home from './views/Home/Home';
// import Form from './components/Form/Form';
import About from './components/About/About';

export default function App() {
	return (
    <>
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About the LeftOver</Link>
      </div>
      <div>
        <Link to="/HowTo">How to Share/Respond</Link>
      </div>
       <div>
        <Link to="/ContactUs">Contact Us</Link>
      </div>
       <div>
        <Link to="/Login">Login/Register</Link>
      </div>
    </header>
		<div>
    <Routes>
			<Route
        path='/about'
        element = {<About />}
			/>
			<Route
        path='/'
        element={<HomePage />}
			/>
      	<Route
        path='/HowTo'
        element={<Home />}
			/>
		</Routes>
	  </div>
    </>
	);
}
