/**
 *
 * 通用工具类
 *
 */

import {Dimensions, StyleSheet} from 'react-native';


let common = {};

/**
 * 获取屏幕宽高
 */

common.getScreenDimension = function() {
    let contain = Dimensions.get('window');

    //返回高宽
    return  {
        width: contain.width,
        height: contain.height
    };
};

/**
 * 创建样式
 * @return {[type]} [description]
 */
common.createStyles = function(styles) {
    let style = StyleSheet.create(styles);
    return style;
};



export default common;
