import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
	<Auth0Provider
		domain={process.env.REACT_APP_AUTH0_DOMAIN}
		clientId={process.env.REACT_APP_AUTH0_CLIENTID}
		redirectUri={window.location.origin}>
			<App />
	</Auth0Provider>
	</BrowserRouter>
);
