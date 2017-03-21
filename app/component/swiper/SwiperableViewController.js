/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   20-Nov-2016
 * @Email:  yuhongliang900@163.com
 * @Filename: SwiperableViewController.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 21-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 *
 *  SwiperableViewController
 *
 */

/**
 * 导入相关库
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    ScrollView,
    Dimensions,
    Animated
} from 'react-native';
import NaviTabBar from './NaviTabBar';


/**
 * 定义组件
 */
export default class SwiperableViewController extends Component {
    /**
     * 构造函数
     */
    constructor(props) {
        super(props);
        this.state = {
            // scrollValue: new Animated.Value(0),
            currentTab: 0
        };
    }

    /**
     * 渲染tab
     */
    _renderNaviTabBar(props) {
        return <NaviTabBar {...props} />
    }

    /**
     * 获取组件的子组件
     */
    _children(children = this.props.children) {
        return React.Children.map(children, (child) => child);
    }

    /**
     * 更新滚动值
     */
    _updateScrollValue(value) {
        this.setState({
            currentTab: Math.ceil(value)
        });
        // this.state.scrollValue.setValue(value);
    }

    /**
     * 点击tab时的处理函数
     * 触发源为子组件，父组件通过属性的方式
     * 向子组件传递处理函数句柄
     */
    _naviTabBarClicked(index) {
        //获取屏幕宽度
        var w = Dimensions.get('window').width;
        if (this.scrollView) {
            this.scrollView.scrollTo({x: index * w, y: 0, animated: true});
        } else {}
    }

    /**
     * 渲染函数
     */
    render() {
        let NaviProps = {
            tabs: this._children().map((child) => child.props.tabTitle),
            // scrollValue: this.state.scrollValue,
            currentTab: this.state.currentTab,
            naviBarTapped: this._naviTabBarClicked.bind(this)
        };
        let self = this;
        return (
            <View style={{marginTop: 20}}>
                {this._renderNaviTabBar(NaviProps)}
                <ScrollView
                    ref={(scrollView) => {this.scrollView = scrollView}}
                    contentContainerStyle={styles.contentContainer}
                    automaticallyAdjustContentInsets={false}
                    horizontal={true}
                    pagingEnabled={true}
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={0}
                    onScroll={(e) => {
                        const offsetX = e.nativeEvent.contentOffset.x;
                        this._updateScrollValue(offsetX / containerWidth);
                    }}
                >
                {this.props.children}
                </ScrollView>
            </View>
        );
    }
}

/**
 * 定义属性，属性默认值
 * @type {Object}
 */
SwiperableViewController.propTypes = {};
SwiperableViewController.defaultProps = {};

/**
 * 设定样式
 * @type {[type]}
 */
const containerHeight = Dimensions.get('window').height;
const containerWidth = Dimensions.get('window').width;

/**
 * 通过样式指定，scrollview上下滚动范围（高度）
 * @type {[type]}
 */
const styles = StyleSheet.create({
    contentContainer: {
        height: containerHeight - 120
    }
});
