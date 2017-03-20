/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   07-Nov-2016
 * @Email:  yuhongliang900@163.com
 * @Filename: common.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


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
