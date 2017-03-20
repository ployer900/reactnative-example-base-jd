/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   19-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: activeSaga.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * seckill saga
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { geth5BabelGenericChannel } from '../network/index';
import * as actions from '../actions/ActiveRelatedActions';
import { FETCH_ACTIVE_DATA } from '../actions/actionTypes';

function* fetchActiveData(action) {
    const { activityId } = action;
    try {
        const data = yield call (geth5BabelGenericChannel, activityId);
        yield put( actions.fetchActiveDataSuccess(data.floorList) );
    } catch(e) {
        yield put( actions.fetchActiveDataFailure(e.message));
    }
}

export default function* seckillSaga() {
    yield takeLatest(FETCH_ACTIVE_DATA, fetchActiveData);
}
