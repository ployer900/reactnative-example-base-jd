/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   11-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: DiscoverRelatedActions.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 21-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


import {
    FETCH_AUTHOR_DATA,
    FETCH_AUTHOR_DATA_SUCCESS,
    FETCH_AUTHOR_DATA_FAILURE,
    FETCH_LIST_DATA,
    FETCH_LIST_DATA_SUCCESS,
    FETCH_LIST_DATA_FAILURE,
    FETCH_ATC_DATA,
    FETCH_ATC_DATA_SUCCESS,
    FETCH_ATC_DATA_FAILURE
} from './actionTypes';

//////////////////author related////////////////////////
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

//////////////////list related///////////////////////
///
///
export const fetchListData = (offset) => {
    return {
        type: FETCH_LIST_DATA,
        offset
    };
}

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


////////////////// atc related ///////////////////
///
///
export const fetchAtcListData = (page, pageSize, typeId, lastTopArticleTime, lastEndArticleTime) => {
    return {
        type: FETCH_ATC_DATA,
        page,
        pageSize,
        typeId,
        lastTopArticleTime,
        lastEndArticleTime
    };
}

export const fetchAtcListSuccess = (content) => {
    return {
        type: FETCH_ATC_DATA_SUCCESS,
        content
    }
}

export const fetchAtcListFailure = (action) => {
    return {
        type: FETCH_ATC_DATA_FAILURE,
        action
    }
}
