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
