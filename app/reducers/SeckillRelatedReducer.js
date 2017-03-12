/**
 * seckill model related reducer
 */


import {
    FETCH_SECKILL_DATA,
    FETCH_SECKILL_DATA_SUCCESS,
    FETCH_SECKILL_DATA_FAILURE,
} from '../actions/SeckillRelatedAction';
import {combineReducers} from 'redux';

export const items = (state = [], action) => {
    switch(action.type) {
        case FETCH_SECKILL_DATA_SUCCESS:
            return [...state, ...action.items];
            break;
        default:
            return state;
    }
}

export const isFetching = (state = false, action) => {
    switch(action.type) {
        case FETCH_SECKILL_DATA:
            return action.isFetching;
        default:
            return state;
    }
}

const SeckillStoreData = combineReducers({
    items,
    isFetching
});

export default SeckillStoreData;
