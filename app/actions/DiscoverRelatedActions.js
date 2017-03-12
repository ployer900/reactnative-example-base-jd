/**
 * DiscoverRelated actions
 */

import {getAuthorReleaseGroup} from '../network/index';

export const FETCH_AUTHOR_DATA = 'fetch author data';
export const FETCH_AUTHOR_DATA_SUCCESS = 'fetch author data success';
export const FETCH_AUTHOR_DATA_FAILURE = 'fetch author data failure';


//sync action
export const fetchAuthorSuccess = (content) => {
    return {
        type: FETCH_AUTHOR_DATA_SUCCESS,
        content
    }
}

export const fetchAuthorFailure = (action) => {
    return {
        type: FETCH_AUTHOR_DATA_FAILURE,
        action
    }
}

export const fetchingAuthorData = (isFetching) => {
    return {
        type: FETCH_AUTHOR_DATA,
        isFetching
    }
}

//asyn action
export const fetchAuthorData = (athID, page, pgsize, type, position) => (dispatch) => {
    dispatch(fetchingAuthorData(true));
    getAuthorReleaseGroup(athID, page, pgsize, type, position).then((data) => {
        if (data && data.code == 0) {
            dispatch(fetchAuthorSuccess(data.page.content));
        } else {
            dispatch(fetchAuthorFailure(true));
        }
        dispatch(fetchingAuthorData(false));
    });
}
