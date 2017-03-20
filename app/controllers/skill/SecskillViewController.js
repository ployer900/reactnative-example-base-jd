/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   28-Nov-2016
 * @Email:  yuhongliang900@163.com
 * @Filename: SecskillViewController.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * jd秒杀模块
 * 目前只支持单张列表
 */
'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ListView,
    View,
    TabBarIOS,
    NavigatorIOS,
    Image,
    Dimensions
} from 'react-native';

//引入单元格组件
import SeckillCell from '../../component/cell/SeckillCell';
//refresh
import RefreshInfiniteListview from '@remobile/react-native-refresh-infinite-listview';
//enhancer
import JDBaseListViewController from '../JDBaseListViewController';

/**
 * 定义数据源显示框架
 */
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});

export default class SecskillViewController extends JDBaseListViewController {
    componentDidMount() {
        //请求数据
        this.loadInitialData();
    }

    loadInitialData() {
        this.props.fetchSeckillData();
    }

    loadMoreData() {
        this.props.fetchSeckillData();
    }

    renderRefreshInfiniteListview() {
        return (
            <RefreshInfiniteListview
              ref = {(list) => {this.list = list}}
              dataSource={ds.cloneWithRows(this.props.items ? this.props.items : [])}
              renderRow={(rowData) =>
                  <SeckillCell
                      soldRate={rowData.soldRate}
                      price={rowData.miaoShaPrice}
                      imgURL={rowData.imageurl}
                      title={rowData.wname}
                      oriPrice={rowData.jdPrice}
                  ></SeckillCell>
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
