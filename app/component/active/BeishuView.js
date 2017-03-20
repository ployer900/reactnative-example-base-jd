/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   17-Nov-2016
 * @Email:  yuhongliang900@163.com
 * @Filename: BeishuView.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * 广告倍数
 */

import React, {Component} from 'react';
import {View, Image} from 'react-native';

import {createStyles} from '../../util/common';
import model from '../../model/active/BeishuModel';

export default class BeishuView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let imgs = model.parseData(this.props.data).slice(0, 2);
		if (imgs.length > 0) {
        	return (
				<View style={styles.wrap}>
					<Image
						style={styles.leftImg}
						source={{uri: imgs[0]}}
					/>
					<Image
						style={styles.rightImg}
						source={{uri: imgs[1]}}
					/>
				</View>
        	);
		} else {
			return (null);
		}
    }
}

const styles = createStyles({
    wrap: {
        flexDirection: 'row',
        flex: 1,
        height: 100
    },
    leftImg: {
        flex: 1,
        height: 100
    },
    rightImg: {
        flex: 1,
        height: 100
    }
});
