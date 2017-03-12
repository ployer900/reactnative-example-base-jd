/**
 * seckill container
 */


import {connect} from 'react-redux';
import SecskillViewController from '../controllers/skill/SecskillViewController';
import {fetchData} from '../actions/SeckillRelatedAction';

const mapStateToProps = (state, ownProps) => {
    return {
        isFetching: state.SeckillStoreData.isFetching,
        items: state.SeckillStoreData.items
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchSeckillData: () => {
            dispatch(fetchData(43, 1424151));
        }
    }
}

const SeckillViewControllerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SecskillViewController);


export default SeckillViewControllerContainer;
