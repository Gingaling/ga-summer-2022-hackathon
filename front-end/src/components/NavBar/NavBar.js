import React from 'react';
import './NavBar.css';
import { Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Home from '../Home/Home';
import About from '../About/About';

export default function NavBar() {

	return (
    <>
    <header>
      <div>
        <Link to="/" className="LinkStyle">Home</Link>
      </div>
      <div>
        <Link to="/about" className="LinkStyle">About the LeftOver</Link>
      </div>
      <div>
        <Link to="/HowTo" className="LinkStyle">How to Share/Respond</Link>
      </div>
       <div>
        <Link to="/ContactUs" className="LinkStyle">Contact Us</Link>
      </div>
       <div>
        <Link to="/Login" className="LinkStyle">Login/Register</Link>
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
