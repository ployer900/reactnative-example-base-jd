/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   07-Nov-2016
 * @Email:  yuhongliang900@163.com
 * @Filename: JiangeView.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 *
 * 间隔视图
 *
 */

import React, {Component} from 'react';
import {
    View
} from 'react-native';

import {createStyles, SCREEN_W} from '../../util/common';
import model from '../../model/active/JiangeModel';

export default class JiangeView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = model.parseData(this.props.data);
        return (
            <View style={[styles.w, {height: data.height}, {backgroundColor: data.backgroundColor}]}></View>
        );
    }
}

const styles = createStyles({
    w: {
        width: SCREEN_W
    }
});
