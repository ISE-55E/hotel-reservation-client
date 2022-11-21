import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
        domain="http://127.0.0.1:3000"
        clientId="wwk4gzlOJENxSd97zZtbsxJp5qQq4oI3"
        redirectUri={window.location.origin}
    >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Auth0Provider>,
);

