/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   08-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: SeckillRelatedActions.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */

import {
    FETCH_SECKILL_DATA,
    FETCH_SECKILL_DATA_SUCCESS,
    FETCH_SECKILL_DATA_FAILURE
} from './actionTypes';

export const fetchSeckillSuccess = (items) => {
    return {
        type: FETCH_SECKILL_DATA_SUCCESS,
        items
    };
}

export const fetchSeckillFailure = (action) => {
    return {
        type: FETCH_SECKILL_DATA_FAILURE,
        action
    };
}

export const fetchSeckillData = (gid, wareId) => {
    return {
        type: FETCH_SECKILL_DATA,
        gid,
        wareId
    };
}
