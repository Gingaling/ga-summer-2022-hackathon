import React from 'react';
import './NavBar.css';
import { Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Home from '../Home/Home';
import About from '../About/About';
import Post from '../Post/Post';
import BlogDetails from '../BlogDetails/BlogDetails';
import Contact from '../Contact/Contact';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

// import Posts from '../Posts/Posts';

export default function NavBar() {

	return (
    <>
    <header>
      <div>
        <Link to="/" className="LinkStyle" id="even">Home</Link>
      </div>
      <div>
        <Link to="/about" className="LinkStyle">About the LeftOver</Link>
      </div>
      <div>
        <Link to="/post" className="LinkStyle" id="even">Create a Post</Link>
      </div>
      <div>
        <Link to="/blogs/:id" className="LinkStyle">Current Posts</Link>
      </div>
      <div>
        <Link to="/HowTo" className="LinkStyle" id="even">How to Share/Respond</Link>
      </div>
       <div>
        <Link to="/Contact" className="LinkStyle">Contact Us</Link>
      </div>
       {/* <div>
        <Link to="/Login" className="LinkStyle" id="even">Login/Register</Link>
      </div> */}
       <div>
        <Link to="/Profile" className="LinkStyle" id="even">Profile</Link>
      </div>
      {<LoginButton />}
      {<LogoutButton />}
    </header>
		<div>
    <Routes>
			<Route
        path='/about'
        element = {<About />}
			/>
			<Route
        exact path='/'
        element={<HomePage />}
			/>
      <Route
        exact path='/Post'
        element={<Post />}
			/>
      	<Route
        path='/blogs:id'
        element={<BlogDetails />}
			/>
      	<Route
        path='/HowTo'
        element={<Home />}
			/>
      <Route
        path='/Contact'
        element={<Contact />}
			/>
      <Route
        path='/Login'
        element={<LoginButton />}
			/>
       <Route
        path='/Profile'
        element={<Profile />}
			/>
      {/* <Route
        path='/*'
        element={<NotFound />}
      /> */}
        
		</Routes>
	  </div>
    </>
	);
}
