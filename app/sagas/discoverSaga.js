/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   20-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: discoverSaga.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * discover sagas
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { getAuthorReleaseGroup, getDiscoverInvetGroup } from '../network/index';
import * as actions from '../actions/DiscoverRelatedActions';
import { FETCH_AUTHOR_DATA, FETCH_LIST_DATA } from '../actions/actionTypes';

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
    const data = yield call(getDiscoverInvetGroup, offset);
    yield put( actions.fetchListSuccess(data.content) );
}


///////////////// combine segment //////////////////////
///
export default function* discoverSaga() {
    yield takeLatest(FETCH_AUTHOR_DATA, fetchDiscoverAuthorData);
    yield takeLatest(FETCH_LIST_DATA, fetchDiscoverListData);
}
