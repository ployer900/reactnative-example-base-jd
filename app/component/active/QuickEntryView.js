/**
 * 快速导航
 */

import React, {Component} from 'react';
import {View, Image, Text, TouchableHighlight} from 'react-native';

import {SCREEN_W, createStyles} from '../../util/common';
import model from '../../model/active/QuickEntryModel';

export default class QuickEntryView extends Component {
    constructor(props) {
        super(props);
    }

    //点击快速入口操作
    entryTapped(url) {

        //执行父组件传递的函数
        if (this.props.quickEntryClicked) this.props.quickEntryClicked(url);
        else {}
    }

    /**
     * 渲染输出组件
     */
    render() {
        let self = this;
        let entrys = model.parseData(this.props.data)
            .map((entry, idx) => {
                return (
                    <TouchableHighlight
                        activeOpacity={1}
                        underlayColor={'#ffffff'}
                        onPress={() => {self.entryTapped(entry.url);}} key={idx}
                    >
                        <View style={styles.entryItem} key={idx}>
                            <Image
                                style={styles.entryIcon}
                                source={{uri: entry.imgUrl}}
                            />
                            <Text style={styles.entryTitle}>{entry.name}</Text>
                        </View>
                    </TouchableHighlight>
                );
            });
        return (
            <View style={styles.entryWrap}>
                {entrys}
            </View>
        )
    }
}

const styles = createStyles({
    entryWrap: {
        flex: 1,
        flexDirection: 'row',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
        marginBottom: 4
    },
    entryItem: {
        flex: 1,
        flexDirection: 'column',
        height: 70,
        width: SCREEN_W / 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    entryIcon: {
        width: 40,
        height: 40,
        paddingLeft: 10
    },
    entryTitle: {
        paddingTop: 4,
        paddingBottom: 4,
        fontSize: 12,
        color: '#333333',
        textAlign: 'center'
    }

});
