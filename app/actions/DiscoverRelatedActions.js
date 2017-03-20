/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   11-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: DiscoverRelatedActions.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * DiscoverRelated actions
 */

import {getAuthorReleaseGroup, getDiscoverInvetGroup} from '../network/index';

//author
export const FETCH_AUTHOR_DATA = 'fetch author data';
export const FETCH_AUTHOR_DATA_SUCCESS = 'fetch author data success';
export const FETCH_AUTHOR_DATA_FAILURE = 'fetch author data failure';

//list
export const FETCH_LIST_DATA = 'fetch list data';
export const FETCH_LIST_DATA_SUCCESS = 'fetch list data success';
export const FETCH_LIST_DATA_FAILURE = 'fetch list data failure';


//////////////////author related////////////////////////
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

export const fetchAuthorData = (authorId, page, pageSize, offset, category) => {
    return {
        type: FETCH_AUTHOR_DATA,
        authorId,
        page,
        pageSize,
        offset,
        category
    };
}

//asyn action
// export const fetchAuthorData = (athID, page, pgsize, type, position) => (dispatch) => {
//     dispatch(fetchingAuthorData(true));
//     getAuthorReleaseGroup(athID, page, pgsize, type, position).then((data) => {
//         if (data && data.code == 0) {
//             dispatch(fetchAuthorSuccess(data.page.content));
//         } else {
//             dispatch(fetchAuthorFailure(true));
//         }
//         dispatch(fetchingAuthorData(false));
//     });
// }


//////////////////list related////////////////////////
//sync action
export const fetchListSuccess = (content) => {
    return {
        type: FETCH_LIST_DATA_SUCCESS,
        content
    }
}

export const fetchListFailure = (action) => {
    return {
        type: FETCH_LIST_DATA_FAILURE,
        action
    }
}

export const fetchListData = (offset) => {
    return {
        type: FETCH_LIST_DATA,
        offset
    };
}

//asyn action
// export const fetchListData = (offset) => (dispatch) => {
//     dispatch(fetchingListData(true));
//     getDiscoverInvetGroup(offset).then((data) => {
//         if (data && data.code == 0) {
//             dispatch(fetchListSuccess(data.content));
//         } else {
//             dispatch(fetchListFailure(true));
//         }
//         dispatch(fetchingListData(false));
//     });
// }
