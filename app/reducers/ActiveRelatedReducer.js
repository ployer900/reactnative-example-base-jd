/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   12-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: ActiveRelatedReducer.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * active reducer
 */

import {
    FETCH_ACTIVE_DATA,
    FETCH_ACTIVE_DATA_SUCCESS,
    FETCH_ACTIVE_DATA_FAILURE
} from '../actions/ActiveRelatedActions';
import {combineReducers} from 'redux';

const ActiveStoreData = (state = {
    isFetching: false,
    floorList: []
}, action) => {
    switch(action.type) {
        case FETCH_ACTIVE_DATA:
            return Object.assign({}, state, {
                isFetching: true
            });
            break;
        case FETCH_ACTIVE_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                floorList: [...state.floorList, ...action.floorList]
            });
        case FETCH_ACTIVE_DATA_FAILURE:
        default:
            return state;
            break;
    }
}

export default ActiveStoreData;
