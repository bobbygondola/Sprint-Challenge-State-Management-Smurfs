import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

//redux imports
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './store/reducer/reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger';

export const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById("root"));
