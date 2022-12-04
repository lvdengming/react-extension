import React from "react";
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter><App/></BrowserRouter>);

// 5s后自动卸载应用
// setTimeout(() => root.unmount(), 5000);
