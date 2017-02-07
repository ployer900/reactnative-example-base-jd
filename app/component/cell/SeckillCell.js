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
            title: '美国金可儿(kingkoil)乳胶床垫婚床用 双人席梦思弹簧床垫软硬适中 加厚版 碧玺 高端定制 1800*2000*310',
            subTitle: '加厚版 碧玺 高端定制 1800*2000*310',
            soldRate: new Animated.Value(0)
        };
    }

    componentDidMount() {
        Animated.timing(this.state.soldRate, {
            toValue: this.props.soldRate,
            duration: 250,
            easing: Easing.linear
        }).start();
    }

    _onPressButton() {
        this.setState({
            title: '美国金可儿(kingkoil)乳胶床垫婚床用 双人席梦思弹簧床垫软硬适中 加厚版 碧玺 高端定制 1800*2000*310'
        });
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
                    <Text style={styles.subTitle}>{this.state.subTitle}</Text>
                    <Text style={styles.price}>￥{this.props.price}</Text>
                    <Text style={styles.oriPrice}>￥{this.props.oriPrice}</Text>
                    <TouchableHighlight style={styles.hightlight} onPress={() => this._onPressButton()}>
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
        padding: 10
    },
    icon: {
        width: 120,
        height: 120
    },
    right: {
        flex: 1,
        paddingLeft: 10
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
    },
    subTitle: {
        fontSize: 12,
        marginTop: 4,
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
        borderRadius: 4
    },
    button: {
        height: 30,
        fontSize: 12,
        paddingLeft: 15,
        paddingRight: 15,
        color: '#ffffff',
        textAlign: 'center',
        borderRadius: 4,
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
