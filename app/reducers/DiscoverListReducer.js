/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   13-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: DiscoverListReducer.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * DiscoverRelated reducer
 */
import {
    FETCH_LIST_DATA,
    FETCH_LIST_DATA_SUCCESS,
    FETCH_LIST_DATA_FAILURE
} from '../actions/DiscoverRelatedActions';
import {combineReducers} from 'redux';

const DiscoverListStoreData = (state = {
    isFetching: false,
    content: []
}, action) => {
    switch(action.type) {
        case FETCH_LIST_DATA:
            return Object.assign({}, state, {
                isFetching: true
            });
            break;
        case FETCH_LIST_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                content: [...state.content, ...action.content]
            });
            break;
        case FETCH_LIST_DATA_FAILURE:
        default:
            return state;
            break;
    }
}

export default DiscoverListStoreData;
