import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';
import {createStore} from "redux";
import { Provider } from "react-redux";
import  {carReducer} from "./reducers/carReducer.js"

//import {rootReducer} from "./reducers/indexReducer.js"
//const store= createStore(rootReducer);

const store = createStore(carReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
rootElement
);

//createStore, Provider and reducers were added for redux
