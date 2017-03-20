/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   08-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: root.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';

const store = configureStore();

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
