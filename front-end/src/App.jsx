import './App.css';
import HomePage from './components/HomePage/HomePage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
function App() {
	const [user, setLoginUser] = useState({});
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						{user && user._id ? <HomePage /> : <Login />}
						<HomePage />
					</Route>
					<Route path="/Login">
						<Login setLoginUser={setLoginUser} />
					</Route>
					<Route path="/Register">
						<Register />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
