/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   20-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: discoverSaga.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 21-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * discover sagas
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import {
    getAuthorReleaseGroup,
    getDiscoverInvetGroup,
    getJdDiscoveryAtcGroup
} from '../network/index';
import * as actions from '../actions/DiscoverRelatedActions';
import {
    FETCH_AUTHOR_DATA,
    FETCH_LIST_DATA,
    FETCH_ATC_DATA
} from '../actions/actionTypes';

////////////////// author segment ///////////////

function* fetchDiscoverAuthorData(action) {
    const { authorId, page, pageSize, offset, category } = action;
    try {
        const data = yield call(getAuthorReleaseGroup, authorId, page, pageSize, offset, category);
        yield put( actions.fetchAuthorSuccess(data.page.content) );
    } catch(e) {
        yield put( actions.fetchAuthorFailure(e.message));
    }
}

////////////////// list segment ////////////////////

function* fetchDiscoverListData(action) {
    const { offset } = action;
    try {
        const data = yield call(getDiscoverInvetGroup, offset);
        yield put( actions.fetchListSuccess(data.content) );
    } catch(e) {
        yield put( actions.fetchListFailure(e.message));
    }
}

/////////////// atc segment //////////////////////
///
function* fetchDiscoverAtcListData(action) {
    const { page, pageSize, typeId, lastTopArticleTime, lastEndArticleTime } = action;
    try {
        const data = yield call(getJdDiscoveryAtcGroup, page, pageSize, typeId, lastTopArticleTime, lastEndArticleTime);
        yield put( actions.fetchAtcListSuccess(data.content));
    } catch(e) {
        yield put( actions.fetchAtcListFailure(e.message));
    }
}


///////////////// combine segment //////////////////////
///
export default function* discoverSaga() {
    yield takeLatest(FETCH_AUTHOR_DATA, fetchDiscoverAuthorData);
    yield takeLatest(FETCH_LIST_DATA, fetchDiscoverListData);
    yield takeLatest(FETCH_ATC_DATA, fetchDiscoverAtcListData);
}
