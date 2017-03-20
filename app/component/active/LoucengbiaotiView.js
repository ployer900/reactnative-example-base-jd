/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   08-Nov-2016
 * @Email:  yuhongliang900@163.com
 * @Filename: LoucengbiaotiView.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * 楼层标题
 */


import React, {Component} from 'react';
import {Image, View} from 'react-native';

import {createStyles, SCREEN_W} from '../../util/common';
import model from '../../model/active/LoucengbiaotiModel';

export default class LoucengbiaotiView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let imgUrl = model.parseData(this.props.data);
        return (
            <View>
                <Image
                    style={styles.pic}
                    source={{uri:imgUrl}}
                />
            </View>
        )
    }
}

const styles = createStyles({
    pic: {
        width: SCREEN_W,
        height: 30
    }
});
