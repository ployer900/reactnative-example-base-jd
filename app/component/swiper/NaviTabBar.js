/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   21-Sep-2016
 * @Email:  yuhongliang900@163.com
 * @Filename: NaviTabBar.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 21-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 *
 *  navi tabbar 封装
 *
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    Dimensions,
    Animated
} from 'react-native';

export default class NaviTabBar extends Component {
    /**
     * 构造函数
     */
    constructor(props) {
        super(props);
        this.state = {
            currentPage: this.props.initPage
        };
    }

    /**
     * 组件接收属性时触发事件
     */
    componentWillReceiveProps(nextProps) {
        //在这里能接收新的属性值
        //但是调用setState方法不会触发重新渲染
        if (this.props.currentTab != nextProps.currentTab) {
            this.setState({
                currentPage: nextProps.currentTab
            });
        } else {}
    }

    /**
     * 是否更新组件
     * scrollValue值不一样时，重新渲染
     */
    shouldComponentUpdate(nextProps) {
        return nextProps.currentTab != this.props.currentTab;
        // return true;
    }

    /**
     * 绑定tab点击事件
     * 传入当前的tab的下标
     */
    _tabTapped(tabID) {
        //判断父组件是否传递了相应的时间处理函数
        if (this.props.naviBarTapped) {

            //父元素通过属性向子元素传递事件句柄
            this.props.naviBarTapped(tabID);

            //更新当前组件状态
            this.setState({
                currentPage: tabID
            });
        } else {}
    }

    /**
     * 渲染函数
     */
    render() {
        let self = this;
        //计算tab数
        let numberOfTabs = this.props.tabs.length;
        let width = (containerWidth - numberOfTabs * 10) / numberOfTabs;

        //遍历父组件传入的tabs属性，遍历title
        let tabLayout = this.props.tabs.map(function(tabTitle, i) {
            return (
                <View key={i}>
                    <TouchableHighlight
                    underlayColor={'#ffffff'}
                    activeOpacity={1}
                    onPress={() => {
                        self._tabTapped(i);
                    }}>
                        <Text style={[styles.button, {width}, self.state.currentPage == i ? styles.red: '']}>{tabTitle}</Text>
                    </TouchableHighlight>
                </View>
            );
        });

        //根据父组件的状态值，线性插值处理并更新
        // let left = this.props.scrollValue.interpolate({
        //     inputRange: [0, 1], outputRange: [0, containerWidth / numberOfTabs]
        // });
        let left = (containerWidth / numberOfTabs) * this.state.currentPage
        //渲染
        return (
                <View>
                    <View style={{flexDirection: 'row'}}>{tabLayout}</View>
                    <Animated.View style={
                    [styles.naviTabBottomLine, {left}, {width}]}></Animated.View>
                </View>
            );
    }
}

/**
 * 指定属性数据类型
 * @type {Object}
 */
NaviTabBar.propTypes = {
    naviBarTapped: React.PropTypes.func,
    tabs: React.PropTypes.array
};
/**
 * 指定属性默认值
 * @type {Object}
 */
NaviTabBar.defaultProps = {
    tabs: [],
    initPage: 0
};

/**
 * 样式处理
 * @type {[type]}
 */
const containerWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    button: {
        marginLeft: 5,
        marginRight: 5,
        height: 40,
        lineHeight: 40,
        color: '#333',
        fontSize: 14,
        textAlign: 'center'
    },
    naviTabBottomLine: {
        position: 'absolute',
        bottom: 0,
        height: 2,
        backgroundColor: '#ff334d'
    },
    red: {
        color: '#ff334d'
    }
});
