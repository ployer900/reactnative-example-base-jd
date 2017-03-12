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

        //返回结构
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
