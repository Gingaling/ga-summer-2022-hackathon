import React from 'react';
import './NavBar.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Home from '../Home/Home';
import About from '../About/About';
// import Posts from '../Posts/Posts';
import PostsDetails from '../PostsDetails/PostsDetails';
import Form from '../Forms/Form';
import Contact from '../Contact/Contact';
import Registration from '../Register/Registration';
import AuthComponent from '../AuthComponent'
import FreeComponent from '../FreeComponent'
import ProtectedRoutes from "../ProtectedRoutes";

export default function NavBar() {

	return (
    <>
    <div className="main">
    <header>
      <div>
        <Link to="/" className="LinkStyle" id="even">Home</Link>
      </div>
      <section id="navigation">
        <a href="/free">Free Component</a>
        <a href="/auth">Auth Component</a>
      </section>
      <div>
        <Link to="/about" className="LinkStyle">About the LeftOver</Link>
      </div>
      <div>
        <Link to="/post" className="LinkStyle" id="even">Create a Post</Link>
      </div>
      <div>
        <Link to="/posts/:id" className="LinkStyle">Current Posts</Link>
      </div>
      <div>
        <Link to="/HowTo" className="LinkStyle" id="even">How to Share/Respond</Link>
      </div>
       <div>
        <Link to="/Contact" className="LinkStyle">Contact Us</Link>
      </div>
       <div>
        <Link to="/Login" className="LinkStyle" id="even">Login/Register</Link>
      </div>
    </header>
    </div>
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
        path='/post'
        element={<Form />}
			/>
      	<Route
        path='/posts:id'
        element={<PostsDetails />}
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
        element={<Registration />}
			/>
       <Route
       exact path="/free"
       element={<FreeComponent />}
       />
      <ProtectedRoutes
      path="/auth"
      element={<AuthComponent />}
      />

		</Routes>
	  </div>
    </>
	);
}
