/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   17-Sep-2016
 * @Email:  yuhongliang900@163.com
 * @Filename: DiscoverListViewController.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 *
 *
 * 发现-清单页
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
    ScrollView,
    Animated,
    Easing,
    TouchableHighlight,
    Dimensions
} from 'react-native';

import {SCREEN_W, SCREEN_H, createStyles} from '../../util/common';
import DiscoverListViewCell from '../../component/cell/discover/DiscoverListViewCell';
//refresh
import RefreshInfiniteListview from '@remobile/react-native-refresh-infinite-listview';
import JDBaseListViewController from '../JDBaseListViewController';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});

export default class  DiscoverListViewController extends JDBaseListViewController {
    constructor(props) {
        super(props);
        this.state = {
            opacityValue: new Animated.Value(0)
        };
    }

    /**
     * DOM挂载
     */
    componentDidMount() {
        this.props.fetchListReleaseData();
        Animated.timing(this.state.opacityValue, {
            toValue: 1,
            duration: 350,
            easing: Easing.linear
        }).start();
    }

    loadInitialData() {}

    loadMoreData() {}

    renderRefreshInfiniteListview() {
        return (
            <RefreshInfiniteListview
              ref = {(list) => {this.list = list}}
              dataSource={ds.cloneWithRows(this.props.content ? this.props.content : [])}
              renderRow={(rowData) =>
                  <DiscoverListViewCell
                      rowData = {rowData}
                      opacityValue = {this.state.opacityValue}
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
