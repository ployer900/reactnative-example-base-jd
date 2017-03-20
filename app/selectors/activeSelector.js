/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   20-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: activeSelector.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


import { createSelector } from 'reselect';

const activeStoreData = (state) => state.ActiveStoreData;

export const getFetchStatus = createSelector(
    activeStoreData,
    (data) => data.isFetching
);

export const getActiveFloors = createSelector(
    activeStoreData,
    (data) => data.floorList
);

// export const getFetchStatusAndActiveFloors = createSelector(
//     activeStoreData,
//     (data) => ({isFetching: data.isFetching, floorList: data.floorList})
// );
