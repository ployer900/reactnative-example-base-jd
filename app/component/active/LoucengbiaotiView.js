/**
 * 楼层标题
 */


import React, {Component} from 'react';
import {Image, View} from 'react-native';

import common from '../../util/common';
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

const styles = common.createStyles({
    pic: {
        width: common.getScreenDimension().width,
        height: 30
    }
});
