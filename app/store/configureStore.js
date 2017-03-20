/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   18-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: configureStore.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

export default configureStore = (initialState) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);

    return store;
}
