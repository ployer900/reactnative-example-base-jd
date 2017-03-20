/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   08-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: index.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * combine reducer
 */

import {combineReducers} from 'redux';
//seckill
import SeckillStoreData from './SeckillRelatedReducer';
//discover
import DiscoverAuthorStoreData from './DiscoverRelatedReducer';
import DiscoverListStoreData from './DiscoverListReducer';
//active
import ActiveStoreData from './ActiveRelatedReducer';

const rootReducer = combineReducers({
    SeckillStoreData,
    DiscoverAuthorStoreData,
    DiscoverListStoreData,
    ActiveStoreData
});


export default rootReducer;
