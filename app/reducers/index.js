/**
 * combine reducer
 */

import {combineReducers} from 'redux';
//seckill
import SeckillStoreData from './SeckillRelatedReducer';
//discover
import DiscoverAuthorStoreData from './DiscoverRelatedReducer';

const rootReducer = combineReducers({
    SeckillStoreData,
    DiscoverAuthorStoreData
});


export default rootReducer;
