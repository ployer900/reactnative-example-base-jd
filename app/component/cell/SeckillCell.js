/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   17-Nov-2016
 * @Email:  yuhongliang900@163.com
 * @Filename: SeckillCell.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 *
 *  TableViewCell
 *
 */

import React, {Component} from 'react';
import {
    TouchableHighlight,
        Animated,
        Image,
        Text,
        View,
        StyleSheet,
        Easing
} from 'react-native';


export default class SeckillCell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            soldRate: new Animated.Value(0)
        };
    }

    componentDidMount() {
        Animated.timing(this.state.soldRate, {
            toValue: this.props.soldRate,
            duration: 350,
            easing: Easing.linear
        }).start();
    }

    onPressButton() {
    }

    render() {
        return (

            <View style={styles.container}>
                <Image
                    style={styles.icon}
                    source={{uri: this.props.imgURL}}
                />

                <View style={styles.right}>
                    <Text style={styles.title} numberOfLines={2}>{this.props.title}</Text>
                    <Text style={styles.price}>￥{this.props.price}</Text>
                    <Text style={styles.oriPrice}>￥{this.props.oriPrice}</Text>
                    <TouchableHighlight style={styles.hightlight} onPress={() => this.onPressButton()}>
                        <Text style={styles.button}>立即抢购</Text>
                    </TouchableHighlight>
                    <View style={styles.rateWrap}>
                        <Text style={styles.rateTxt}>已秒{this.props.soldRate ? this.props.soldRate : 0}%</Text>
                        <View style={styles.percentBg}>
                            <Animated.View style={[styles.percentRatio, {
                                width: this.state.soldRate
                            }]}></Animated.View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff'
    },
    icon: {
        width: 100,
        height: 100
    },
    right: {
        flex: 1,
        paddingLeft: 10
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 20
    },
    price: {
        fontSize: 16,
        color: '#ff334d',
        fontWeight: '900',
        marginTop: 30
    },
    oriPrice: {
        fontSize: 12,
        color: '#999999',
        textDecorationLine: 'line-through'
    },
    hightlight: {
        position: 'absolute',
        right: 0,
        bottom: 8,
        borderRadius: 2,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#ff334d'
    },
    button: {
        height: 30,
        fontSize: 12,
        paddingLeft: 12,
        paddingRight: 12,
        color: '#ffffff',
        textAlign: 'center',
        lineHeight: 30,
        backgroundColor: '#ff334d'
    },
    rateWrap: {
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
        bottom: -4
    },
    rateTxt: {
        fontSize: 10,
        color: '#777',
        marginRight: 4
    },
    percentBg: {
        width: 100,
        height: 6,
        borderColor: '#ff334d',
        borderWidth: 0.5,
        borderStyle: 'solid',
        borderRadius: 2,
        marginTop: 3
    },
    percentRatio: {
        height: 5,
        backgroundColor: '#ff334d',
        opacity: 0.5
    }
});
