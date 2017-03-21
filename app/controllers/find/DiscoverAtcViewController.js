/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   21-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: DiscoverAtcViewController.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 21-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */

 import React, {Component} from 'react';
 import {
     Image,
     View,
     Text,
     StyleSheet,
     ListView,
     TouchableHighlight,
     Dimensions
 } from 'react-native';

 //cell
 import DiscoverAtcListCell from '../../component/cell/discover/DiscoverAtcListCell';
 //indicator
 import Spinner from 'react-native-spinkit';
 //refresh
 import RefreshInfiniteListview from '@remobile/react-native-refresh-infinite-listview';
 //base controller
 import JDBaseListViewController from '../JDBaseListViewController';

 /**
  * 发现清单页
  */
 import DiscoverListViewControllerContainer from '../../containers/DiscoverListViewControllerContainer';

 /**
  * 定义数据源显示层
  * @type {ListView}
  */
 const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});

 //next page
 let nextPage = 1;

 export default class DiscoverAtcViewController extends JDBaseListViewController {
     /**
      * 触发请求
      */
     componentDidMount() {
         this.loadInitialData();
     }

     loadInitialData() {
         this.props.fetchAtcReleaseData();
     }

     loadMoreData() {
         this.props.fetchMoreReleaseData(nextPage++);
     }

     renderRefreshInfiniteListview() {
         return (
             <RefreshInfiniteListview
               ref = {(list) => {this.list = list}}
               dataSource={ds.cloneWithRows(this.props.content ? this.props.content : [])}
               renderRow={(rowData) =>
                   <DiscoverAtcListCell
                       rowData = {rowData}
                   />
               }
               renderSeparator={this.renderSeparator}
               scrollEventThrottle = {20}
               enableEmptySections={true}
               onRefresh = {this.onRefresh.bind(this)}
               onInfinite = {this.onInfinite.bind(this)}
               style = {{backgroundColor: 'transparent'}}
               pullDistance = {20}
               footerHeight = {40}
               renderEmptyRow = {this.renderEmptyRow}
               renderHeaderRefreshIdle = {this.renderHeaderRefreshIdle}
               renderHeaderWillRefresh = {this.renderHeaderWillRefresh}
               renderHeaderRefreshing = {this.renderHeaderRefreshing}
               renderFooterWillInifite = {this.renderFooterWillInifite}
               renderFooterInifiting = {this.renderFooterInifiting}
               renderFooterInifiteLoadedAll = {this.renderFooterInifiteLoadedAll}
             />
         );
     }
 }

 /**
  * 样式定义
  * @type {[type]}
  */
 const styles = StyleSheet.create({
     line: {
         height: 0,
         backgroundColor: '#ffffff'
     }
 });
