/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   08-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: ToastComponent.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * toast
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import {createStyles, SCREEN_H, SCREEN_W} from '../../util/common';

export default class ToastComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        );
    }
}


const styles = createStyles({
    container: {
        marginTop: SCREEN_H / 2 - 35,
        marginLeft: SCREEN_W / 2 - 35,
        width: 70,
        height: 70,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 6
    },
    title: {
        marginTop: 25,
        fontSize: 12,
        color: '#fff',
        textAlign: 'center',
        lineHeight: 18
    }
});
