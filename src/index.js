import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// import reducer from './store/reducer';
import counterReducer from './store/reducers/counterreducer';
import resultsReducer from './store/reducers/resultsreducer';


const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer
})


const store = createStore(rootReducer);


ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));



