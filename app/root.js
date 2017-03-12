import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from './containers/App';
import rootReducer from './reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class Root extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Provider store = {store}>
                <App />
            </Provider>
        );
    }
}
