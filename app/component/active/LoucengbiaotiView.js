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
