/**
 *
 *
 *  scrollview 布局
 *
 *
 */

import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    View,
    Text,
    StyleSheet,
    ListView,
    ScrollView,
    TouchableHighlight,
    Animated
} from 'react-native';

import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';
import DiscoverListViewController from '../controllers/find/DiscoverListViewController';
import NaviTabBar from './swiper/NaviTabBar';

const containerWidth = Dimensions.get('window').width;

export default class ScrollViewLayout extends Component {
	/**
	 * 构造函数 */

    constructor(props) {
        super(props);
        this.state = {
            button: ''
        };
    }

	/**
	 * tabbar点击处理函数
	 * 点击后更加tab顺序操作
	 * scrollview左右滚动 */

    _naviTabBarClicked(idx) {
        if (this._scrollView) {
            this._scrollView.scrollTo({x: containerWidth * idx, y: 0, animated: true});
        }
    }

	/**
	 *渲染函数*/
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref={(scrollView) => {this._scrollView = scrollView}}
                    contentContainerStyle={styles.contentContainer}
                    automaticallyAdjustContentInsets={false}
                    horizontal={true}
                    pagingEnabled={true}
                    bounces={false}
                    showsHorizontalScrollIndicator = {false}
                    showsVerticalScrollIndicator = {false}
                >
                <DiscoverListViewController netWorkType={0}/>
                </ScrollView>
            </View>
        );
    }
}

ScrollViewLayout.defaultProps = {};

const containerHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    contentContainer: {
        marginTop: 10,
        height: containerHeight - 100
    },
    img: {
        width: 60,
        height: 60,
        margin: 10
    }
});
