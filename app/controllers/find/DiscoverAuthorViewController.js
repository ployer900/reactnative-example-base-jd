/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   17-Sep-2016
 * @Email:  yuhongliang900@163.com
 * @Filename: DiscoverAuthorViewController.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 *
 *
 * 发现栏目，作者页
 *
 *
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
import DiscoverAuthorSummaryAndRecommendCell from '../../component/cell/discover/DiscoverAuthorSummaryAndRecommendCell';
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

export default class DiscoverAuthorViewController extends JDBaseListViewController {
    /**
     * 触发请求
     */
    componentDidMount() {
        this.loadInitialData();
    }

    loadInitialData() {
        this.props.fetchAuthorReleaseData();
    }

    loadMoreData() {
        this.props.fetchMoreReleaseData(nextPage++);
    }

    /**
     * 导航栏
     */
    tapItem() {
        //viewcontroller挂载到navigatorController
        //上后，拿到navigator属性，指向navigatorController
        this.props.navigator.push({
            //目的ViewController
            component: DiscoverListViewControllerContainer,

            //目的ViewController导航栏显示名称
            title: '发现清单',

            //传递给目的ViewController的参数
            //目的ViewController通过属性获取
            passProps: {netWorkType: 0}
        });
    }

    renderRefreshInfiniteListview() {
        return (
            <RefreshInfiniteListview
              ref = {(list) => {this.list = list}}
              dataSource={ds.cloneWithRows(this.props.content ? this.props.content : [])}
              renderRow={(rowData) =>
                  <DiscoverAuthorSummaryAndRecommendCell
                      rowData = {rowData}
                      tapItem = {this.tapItem.bind(this)}
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
