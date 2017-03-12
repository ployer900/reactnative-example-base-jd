/**
 *
 * 通用工具类
 *
 */

import {Dimensions, StyleSheet} from 'react-native';

export const SCREEN_W = Dimensions.get('window').width;
export const SCREEN_H = Dimensions.get('window').height;

/**
 * 创建样式
 * @return {[type]} [description]
 */
export const createStyles = (styles) => {
    let style = StyleSheet.create(styles);
    return style;
};
