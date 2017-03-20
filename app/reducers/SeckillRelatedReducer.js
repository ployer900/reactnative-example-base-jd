/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   08-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: SeckillRelatedReducer.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * seckill model related reducer
 */

import {
    FETCH_SECKILL_DATA,
    FETCH_SECKILL_DATA_SUCCESS,
    FETCH_SECKILL_DATA_FAILURE
} from '../actions/actionTypes';

const SeckillStoreData = (state = {
    isFetching: false,
    items: []
}, action) => {
    switch(action.type) {
        case FETCH_SECKILL_DATA:
            return Object.assign({}, state, {
                isFetching: true
            });
            break;
        case FETCH_SECKILL_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                items: [...state.items, ...action.items]
            });
            break;
        case FETCH_SECKILL_DATA_FAILURE:
        default:
            return state;
            break;
    }
}


export default SeckillStoreData;
