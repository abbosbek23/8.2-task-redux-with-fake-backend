import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux";
import store from "./store/store";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <ToastContainer/>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);