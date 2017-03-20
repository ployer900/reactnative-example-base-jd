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


import {
    FETCH_ACTIVE_DATA,
    FETCH_ACTIVE_DATA_SUCCESS,
    FETCH_ACTIVE_DATA_FAILURE
} from './actionTypes';

export const fetchActiveData = (activityId) => {
    return {
        type: FETCH_ACTIVE_DATA,
        activityId
    }
}

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
