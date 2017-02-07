import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App/App';
import './index.css';

import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import {getAllItems} from './actions'

import reducer from './reducers'

const middleware = [thunk];
if(process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}


const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

store.dispatch(getAllItems());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
