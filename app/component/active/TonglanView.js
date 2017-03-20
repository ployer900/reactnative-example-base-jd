/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   07-Nov-2016
 * @Email:  yuhongliang900@163.com
 * @Filename: TonglanView.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * 通栏广告
 */

import React, {Component} from 'react';
import {
    TouchableHighlight,
    View,
    Image
} from 'react-native';

/**
 * 引入工具
 */
import {SCREEN_W, createStyles} from '../../util/common';

/**
 * 引入模型
 */
import model from '../../model/active/TonglanModel';

export default class TonglanView extends Component {
    /**
     * 构造函数
     */
    constructor(props) {
        super(props);
    }

    /**
     * 渲染输出
     */
    render() {
        //模板数据
        let modelData = model.parseData(this.props.data);

        if (modelData.imgUrl == 'http:') return null

        return (
            <View>
                <Image
                    style={[styles.img, {height: modelData.height}]}
                    source={{uri: modelData.imgUrl}}
                />
            </View>
        );
    }
}

/**
 * 创建样式
 * @type {[type]}
 */
const styles = createStyles({
    img: {
        width: SCREEN_W,
        height: 20,
        backgroundColor: '#cccccc'
    }
});
