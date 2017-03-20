/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   11-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: DiscoverRelatedReducer.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * DiscoverRelated reducer
 */

import {
    FETCH_AUTHOR_DATA,
    FETCH_AUTHOR_DATA_SUCCESS,
    FETCH_AUTHOR_DATA_FAILURE
} from '../actions/actionTypes';

const DiscoverAuthorStoreData = (state = {
    isFetching: false,
    content: []
}, action) => {
    switch(action.type) {
        case FETCH_AUTHOR_DATA:
            return Object.assign({}, state, {
                isFetching: true
            });
            break;
        case FETCH_AUTHOR_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                content: [...state.content, ...action.content]
            });
            break;
        case FETCH_AUTHOR_DATA_FAILURE:
        default:
            return state;
            break;
    }
}


export default DiscoverAuthorStoreData;
