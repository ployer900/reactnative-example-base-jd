/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   12-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: ActiveHomeViewControllerContainer.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 21-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */

////////////// ActiveHomeViewController container////////////
///
import { connect } from 'react-redux';
import ActiveHomeViewController from '../controllers/active/ActiveHomeViewController';
import { fetchActiveData } from '../actions/ActiveRelatedActions';
import { getFetchStatusAndActiveFloors } from '../selectors/activeSelector';

const mapStateToProps = (state, ownProps) => {
    let data = getFetchStatusAndActiveFloors(state);
    return {
        floorList: data.floorList,
        isFetching: data.isFetching
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchActiveHomeData: (activityId) => {
            dispatch(fetchActiveData(activityId));
        }
    };
}

const ActiveHomeViewControllerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ActiveHomeViewController);

export default ActiveHomeViewControllerContainer;
