/**
 * seckill action
 */

import {getSecskillProductGroup} from '../network/index';

export const FETCH_SECKILL_DATA = 'fetch seckill data';
export const FETCH_SECKILL_DATA_SUCCESS = 'fetch seckill data success';
export const FETCH_SECKILL_DATA_FAILURE = 'fetch seckill data failure';


//sync action
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

export const fetchingData = (isFetching) => {
    return {
        type: FETCH_SECKILL_DATA,
        isFetching
    }
}

//asyn action
export const fetchData = (gid, wareId) => (dispatch) => {
    dispatch(fetchingData(true));
    getSecskillProductGroup(gid, wareId).then((data) => {
        let seckillInfo = data.seckillInfo;
        if (seckillInfo && seckillInfo.code == 0) {
            dispatch(fetchSeckillSuccess(seckillInfo.itemList));
        } else {
            dispatch(fetchSeckillFailure(true));
        }
        dispatch(fetchingData(false));
    });
}
