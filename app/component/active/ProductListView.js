/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   08-Nov-2016
 * @Email:  yuhongliang900@163.com
 * @Filename: ProductListView.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 *
 *  轮播组件
 *
 */

import React, {Component} from 'react';
import {
    Image,
    ScrollView,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import {createStyles} from '../../util/common';

export default class ProuctListView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.pdWrap}>
                <Image
                    style={styles.pdPic}
                    source={{uri: this.props.imgUrl}}
                />
                <View style={styles.pdContent}>
                    <Text style={styles.pdTitle} numberOfLines={2}>{this.props.name}</Text>
                    <Text style={styles.pdTag}>{this.props.tag}</Text>
                    <View style={styles.pdInfo}>
                        <Text style={styles.price}>{this.props.price ? '￥' + this.props.price : ''}</Text>
                        <Text style={styles.oriPrice}>{this.props.oriPrice ? '￥' + this.props.oriPrice : ''}</Text>
                    </View>
                    <TouchableHighlight
                        style={styles.touch}
                    >
                        <Text style={styles.buyBtn}>加入购物车</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

/**
 * 相关样式
 * @type {[type]}
 */
const styles = createStyles({
    pdWrap: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#ffffff'
    },
    pdPic: {
        width: 110,
        height: 110,
        backgroundColor: '#cccccc'
    },
    pdContent: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 10,
        marginLeft: 10
    },
    pdTitle: {
        fontSize: 14,
        color: '#333333',
        padding: 2,
        lineHeight: 16
    },
    pdTag: {
        fontSize: 10,
        color: '#ff334d',
        marginTop: 6
    },
    pdInfo: {
        flexDirection: 'row',
        position: 'absolute',
        left: 0,
        bottom: 0
    },
    price: {
        color: '#ff334d',
        fontSize: 14,
        fontWeight: '600'
    },
    oriPrice: {
        color: '#999999',
        fontSize: 10,
        textDecorationLine: 'line-through',
        marginTop: 4
    },
    touch: {
        position: 'absolute',
        bottom: 0,
        right: 10
    },
    buyBtn: {
        fontSize: 12,
        color: '#ffffff',
        backgroundColor: '#a5d64f',
        textAlign: 'center',
        padding: 6
    }
});
