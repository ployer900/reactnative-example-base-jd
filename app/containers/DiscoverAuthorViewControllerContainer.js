/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   11-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: DiscoverAuthorViewControllerContainer.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


///////////////////// DiscoverAuthorViewController container////////////////////
///
///

import { connect } from 'react-redux';
//author
import DiscoverAuthorViewController from '../controllers/find/DiscoverAuthorViewController';
import { fetchAuthorData } from '../actions/DiscoverRelatedActions';
import { getAuthorFetchStatus, getDiscoverAuthorContent } from '../selectors/discoverSelector';

const mapStateToProps = (state, ownProps) => {
    return {
        content: getDiscoverAuthorContent(state),
        isFetching: getAuthorFetchStatus(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAuthorReleaseData: () => {
            dispatch(fetchAuthorData(3099, 0, 10, 0, 1));
        },
        fetchMoreReleaseData: (page) => {
            dispatch(fetchAuthorData(3099, page, 10, 0, 1));
        }
    }
}

const DiscoverAuthorViewControllerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DiscoverAuthorViewController);

export default DiscoverAuthorViewControllerContainer;
