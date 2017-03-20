/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   11-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: DiscoverAuthorSummaryAndRecommendCell.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


import React, {Component} from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Dimensions
} from 'react-native';

import DiscoverAuthorRecommendCell from './DiscoverAuthorRecommendCell';
import DiscoverAuthorSummaryCell from './DiscoverAuthorSummaryCell';

export default class DiscoverAuthorSummaryAndRecommendCell extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let rowData = this.props.rowData;
        let releaseType = rowData.releaseType;
        if (releaseType == 2) {
            //DiscoverAuthorRecommendCell
            return (
                <DiscoverAuthorRecommendCell
                    goodsPic = {rowData.goodsPic}
                    recommendTheme = {rowData.recommendTheme}
                    recommendReason = {rowData.recommendReason}
                    likeNum = {rowData.likeNum}
                    tapItem = {this.props.tapItem}
                />
            );
        } else if (releaseType == 3) {
            //DiscoverAuthorSummaryCell
            return (
                <DiscoverAuthorSummaryCell
                    inventoryImg = {rowData.inventoryImg}
                    mainTitle = {rowData.mainTitle}
                    desc = {rowData.desc}
                />
            );
        } else {
            return (
                <View></View>
            );
        }
    }
}
