/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   08-Nov-2016
 * @Email:  yuhongliang900@163.com
 * @Filename: ZuheView.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * 广告组合
 */

import React, {Component} from 'react';
import {Image, View} from 'react-native';

import {createStyles} from '../../util/common';
import model from '../../model/active/ZuheModel';

export default class ZuheView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let ads = model.parseData(this.props.data);
        let rightView = ads.map((ad, idx) => {
            if (idx != 0) return (
                <Image
                    key={idx}
                    style={styles.small}
                    source={{uri: ad}}
                />
            );
        });
        return (
            <View style={styles.contain}>
                <View style={styles.leftImg}>
                    <Image
                        style={styles.big}
                        source={{uri: ads[0]}}
                    />
                </View>
                <View style={styles.rightImg}>
                    {rightView}
                </View>
            </View>
        );
    }
}

const styles = createStyles({
    contain: {
        flexDirection: 'row',
        flex: 1,
        height: 200
    },
    leftImg: {
        flex: 1
    },
    rightImg: {
        flex: 1,
        flexDirection: 'column'
    },
    big: {
        height: 200,
        backgroundColor: '#cccccc'
    },
    small: {
        flex: 1,
        backgroundColor: '#cccccc'
    }
});
