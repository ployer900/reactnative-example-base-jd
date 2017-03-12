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

import {SCREEN_W, createStyles} from '../../util/common';

export default class ProductSlideView extends Component {
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
                <Text style={styles.pdTitle} numberOfLines={2}>{this.props.name}</Text>
                <View style={styles.pdInfo}>
                    <Text style={styles.price}>{this.props.price ? '￥' + this.props.price : ''}</Text>
                    <Text style={styles.oriPrice}>{this.props.oriPrice ? '￥' + this.props.oriPrice : ''}</Text>
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
        width: SCREEN_W / 4,
        marginLeft: 2,
        marginRight: 2,
        backgroundColor: '#ffffff'
    },
    pdPic: {
        width: SCREEN_W / 4,
        height: SCREEN_W / 4,
        backgroundColor: '#cccccc'
    },
    pdTitle: {
        fontSize: 10,
        color: '#333333',
        padding: 2
    },
    pdInfo: {
        flexDirection: 'row',
    },
    price: {
        color: '#ff334d',
        fontSize: 12,
        fontWeight: '600'
    },
    oriPrice: {
        color: '#999999',
        fontSize: 8,
        textDecorationLine: 'line-through',
        marginTop: 4
    }
});
