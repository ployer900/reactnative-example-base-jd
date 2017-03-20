/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   13-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: DiscoverListViewControllerContainer.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * DiscoverAuthorViewController container
 */

import { connect } from 'react-redux';
//list
import DiscoverListViewController from '../controllers/find/DiscoverListViewController';
import { fetchListData } from '../actions/DiscoverRelatedActions';
import { getListFetchStatus, getDiscoverListContent } from '../selectors/discoverSelector';

const mapStateToProps = (state, ownProps) => {
    return {
        content: getDiscoverListContent(state),
        isFetching: getListFetchStatus(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchListReleaseData: () => {
            dispatch(fetchListData(-1));
        },
        fetchMoreListReleaseData: () => {
            dispatch(fetchListData(-1));
        }
    }
}

const DiscoverListViewControllerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DiscoverListViewController);

export default DiscoverListViewControllerContainer;
