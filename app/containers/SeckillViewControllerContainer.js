/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   08-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: SeckillViewControllerContainer.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * seckill container
 */
import { connect } from 'react-redux';
import { put } from 'redux-saga/effects';
import SecskillViewController from '../controllers/skill/SecskillViewController';
import { fetchSeckillData } from '../actions/SeckillRelatedActions';
import { getFetchStatus, getSeckillItems } from '../selectors/seckillSelector';

const mapStateToProps = (state, ownProps) => {
    return {
        isFetching: getFetchStatus(state),
        items: getSeckillItems(state)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchSeckillData: () => {
            dispatch (fetchSeckillData(43, 1424151));
        }
    }
}

const SeckillViewControllerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SecskillViewController);


export default SeckillViewControllerContainer;
