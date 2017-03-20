/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   19-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: index.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


import { fork } from 'redux-saga/effects';
import seckillSaga from './seckillSaga';
import activeSaga from './activeSaga';
import discoverSaga from './discoverSaga';

export default function* rootSaga() {
    yield [
        fork(seckillSaga),
        fork(activeSaga),
        fork(discoverSaga)
    ];
}
