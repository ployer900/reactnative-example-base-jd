/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   01-Dec-2016
 * @Email:  yuhongliang900@163.com
 * @Filename: ActiveHomeViewController.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * 活动模块相关页面入口
 */

import React, {Component} from 'react';
import {
    Image,
    View,
    Text,
    ListView,
    ScrollView,
    TouchableHighlight
} from 'react-native';

import {createStyles, SCREEN_W, SCREEN_H} from '../../util/common';
import JDBaseListViewController from '../JDBaseListViewController';
import ActiveHomeCell from '../../component/active/ActiveHomeCell';
//refresh
import RefreshInfiniteListview from '@remobile/react-native-refresh-infinite-listview';
//webview
import WebViewController from '../../component/WebViewController';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});

export default class ActiveHomeViewController extends JDBaseListViewController {
    componentDidMount() {
        //请求数据
        this.props.fetchActiveHomeData(this.props.activityId);
    }

    loadInitialData() {}

    loadMoreData() {}

    //jump page
    goToPage(url) {
        this.props.navigator.push({
            component: WebViewController,
            title: '',
            passProps: {url: url}
        });
    }

    renderRefreshInfiniteListview() {
        return (
            <RefreshInfiniteListview
              ref = {(list) => {this.list = list}}
              dataSource={ds.cloneWithRows(this.props.floorList ? this.props.floorList : [])}
              renderRow={(rowData) =>
                  <ActiveHomeCell
                    rowData = {rowData}
                    goToPage = {this.goToPage.bind(this)}
                  ></ActiveHomeCell>
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
 * style
 */
const styles = createStyles({
});
