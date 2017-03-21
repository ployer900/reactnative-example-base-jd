/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   21-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: DiscoverAtcViewControllerContainer.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 21-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */

 import { connect } from 'react-redux';
 //author
 import DiscoverAtcViewController from '../controllers/find/DiscoverAtcViewController';
 import { fetchAtcListData } from '../actions/DiscoverRelatedActions';
 import { getAtcListFetchStatus, getAtcListContent } from '../selectors/discoverSelector';

 const mapStateToProps = (state, ownProps) => {
     return {
         content: getAtcListContent(state),
         isFetching: getAtcListFetchStatus(state)
     }
 }

 const mapDispatchToProps = (dispatch, ownProps) => {
     const { typeId } = ownProps;
     console.log(typeId);
     return {
         fetchAtcReleaseData: () => {
             dispatch(fetchAtcListData(1, 20, typeId, '', ''));
         },
         fetchMoreReleaseData: (page) => {
             dispatch(fetchAtcListData(page, 20, typeId, '', ''));
         }
     }
 }

 const DiscoverAtcViewControllerContainer = connect(
     mapStateToProps,
     mapDispatchToProps
 )(DiscoverAtcViewController);

 export default DiscoverAtcViewControllerContainer;
