/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   12-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: ActiveRelatedActions.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * active actions
 */

import {geth5BabelGenericChannel} from '../network/index';

export const FETCH_ACTIVE_DATA = 'fetch active data';
export const FETCH_ACTIVE_DATA_SUCCESS = 'fetch active data success';
export const FETCH_ACTIVE_DATA_FAILURE = 'fetch active data failure';

//sync action
//
export const fetchActiveDataSuccess = (floorList) => {
    return {
        type: FETCH_ACTIVE_DATA_SUCCESS,
        floorList
    };
}

export const fetchActiveDataFailure = (action) => {
    return {
        type: FETCH_ACTIVE_DATA_FAILURE,
        action
    };
}

export const fetchActiveData = (activityId) => {
    return {
        type: FETCH_ACTIVE_DATA,
        activityId
    }
}

//asyn action
// export const fetchActiveData = (activityId) => (dispatch) => {
//     dispatch(fetchingActiveData(true));
//     geth5BabelGenericChannel(activityId).then((data) => {
//         if (data.code == 0 && data.subCode == 0) {
//             dispatch(fetchActiveDataSuccess(data.floorList));
//         } else {
//             dispatch(fetchActiveDataFailure(true));
//         }
//         dispatch(fetchingActiveData(false));
//     });
// }
