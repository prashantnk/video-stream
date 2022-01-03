import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './reducers';
import { Router } from "react-router-dom";
import thunk from 'redux-thunk';
import history from "./history";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
    ,
    document.querySelector('#root')
);