import React from 'react';
import './NavBar.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Home from '../Home/Home';
import About from '../About/About';
import Post from '../Post/Post';
import PostsDetails from '../PostsDetails/PostsDetails';
<<<<<<< HEAD
import Contact from '../Contact/Contact';
import Account from '../../Account';
=======
// import Form from '../Postings/Posting';
import Contact from '../Contact/Contact';
import Account from '../Register/Account';
>>>>>>> ffca8fe70cbb21124d7b0b1b9a3ab359cc670876
// import AuthComponent from '../AuthComponent'
import FreeComponent from '../FreeComponent'
// import ProtectedRoutes from "../ProtectedRoutes";

export default function NavBar() {

	return (
<<<<<<< HEAD
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
        <Link to="/register" className="LinkStyle" id="even">Login/Register</Link>
      </div>
    </header>
    </div>
		<div>
=======
    <>     
      <header className="Menu">
        <div>
          <Link to="/" className="LinkStyle" id="even">Home</Link>
        </div>
        <div id="navigation">
          <a href="/free">Free Component</a><br />
          <a href="/auth">Auth Component</a>
        </div>
        <div>
          <Link to="/about" className="LinkStyle">About the LeftOver</Link>
        </div>
        <div>
          <Link to="/posts" className="LinkStyle" id="even">Create a Post</Link>
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
          <Link to="/Register" className="LinkStyle" id="even">Login/Register</Link>
        </div>

        {/* <div className="leftover-header"> */}
        <div className="leftover">
      The Leftover
        </div>
        {/* </div> */}
      </header>
>>>>>>> ffca8fe70cbb21124d7b0b1b9a3ab359cc670876
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
<<<<<<< HEAD
        path='/post'
=======
        path='/posts'
>>>>>>> ffca8fe70cbb21124d7b0b1b9a3ab359cc670876
        element={<Post />}
			/>
      	<Route
        path='/posts/:id'
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
<<<<<<< HEAD
        path='/register'
=======
        path='/Register'
>>>>>>> ffca8fe70cbb21124d7b0b1b9a3ab359cc670876
        element={<Account />}
			/>
       <Route
       exact path="/free"
       element={<FreeComponent />}
       />
		</Routes>
      {/* <ProtectedRoutes
      path="/auth"
      element={<AuthComponent />}
      /> */}

	  </div>
    </>
	);
}