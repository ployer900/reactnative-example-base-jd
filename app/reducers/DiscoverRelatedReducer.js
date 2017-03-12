/**
 * DiscoverRelated reducer
 */

import {
    FETCH_AUTHOR_DATA,
    FETCH_AUTHOR_DATA_SUCCESS
} from '../actions/DiscoverRelatedActions';
import {combineReducers} from 'redux';

export const content = (state = [], action) => {
    switch(action.type) {
        case FETCH_AUTHOR_DATA_SUCCESS:
            return [...state, ...action.content];
            break;
        default:
            return state;
    }
}

export const isFetching = (state = false, action) => {
    switch(action.type) {
        case FETCH_AUTHOR_DATA:
            return action.isFetching;
            break;
        default:
            return state;
    }
}

const DiscoverAuthorStoreData = combineReducers({
    content,
    isFetching
});

export default DiscoverAuthorStoreData;
