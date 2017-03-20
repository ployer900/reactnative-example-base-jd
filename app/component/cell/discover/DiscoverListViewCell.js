/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   12-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: DiscoverListViewCell.js
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
    Animated,
    Easing,
    TouchableHighlight,
} from 'react-native';

import {SCREEN_W, SCREEN_H, createStyles} from '../../../util/common';

export default class  DiscoverListViewCell extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var rowData = this.props.rowData;
        var items = rowData.summaryList.map((img, idx) => {
            return(
                <View style={styles.imgWrap} key={idx}>
                    <Animated.Image
                        style={[styles.img, {
                            opacity: this.props.opacityValue
                        }]}
                        source={{uri:img}}
                    />
                </View>
            );
        });

        return (
            <View style={styles.container}>
                <Text style={styles.title} numberOfLines={1}>{rowData.mainTitle}</Text>
                <Text style={styles.subTitle} numberOfLines={1}>{rowData.desc}</Text>
                <View style={styles.content}>
                    {items}
                </View>
                <View style={styles.meta}>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <Image
                            style={styles.icon}
                            source={{uri: rowData.authorPic}}
                        />
                        <Text style={styles.author}>看客推荐了{rowData.goodsNum}件单品</Text>
                    </View>
                    <View style={[styles.look, {flexDirection: 'row', flex: 1}]}>
                        <Image
                            style={styles.eye}
                            source={require('../../../assets/images/eye.png')}
                        />
                        <Text style={styles.author}>{rowData.pageView}</Text>
                    </View>
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
    container: {
        paddingTop: 10,
        marginTop: 5,
        backgroundColor: '#fff'
    },
    content: {
        width: SCREEN_W,
        flexDirection: 'row'
    },
    title: {
        width: SCREEN_W - 20,
        marginLeft: 10,
        fontSize: 15,
        fontWeight: '600',
        lineHeight: 20
    },
    subTitle: {
        width: SCREEN_W - 20,
        marginLeft: 10,
        fontSize: 12,
        lineHeight: 18,
        color: '#444',
        marginTop: 5,
        marginBottom: 5
    },
    imgWrap: {
        marginLeft: 10,
        flex: 1,
        height: 80,
        flexDirection: 'row',
        backgroundColor: '#fefefe',
        marginTop: 5,
        marginBottom: 5
    },
    img: {
        height: 80,
        width: (SCREEN_W - 10 * 6) / 3,
        resizeMode: 'cover'
    },
    meta: {
        width: SCREEN_W - 20,
        marginLeft: 10,
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10
    },
    author: {
        flexDirection: 'row',
        fontSize: 10,
        color: '#444'
    },
    line: {
        height: 0.5,
        backgroundColor: '#cccccc'
    },
    icon: {
        width: 14,
        height: 14,
        borderRadius: 7,
        marginRight: 6
    },
    eye: {
        width: 14,
        height: 9,
        marginTop: 2,
        marginRight: 4
    },
    look: {
        position: 'absolute',
        right: 0,
        top: 10
    }
});
