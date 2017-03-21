/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   08-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: App.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 21-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */

 /////////////////// main project //////////////////
 ///
 import React, { Component } from 'react';
 import {
   StyleSheet,
   Text,
   ListView,
   View,
   TabBarIOS,
   NavigatorIOS
 } from 'react-native';
 /**
  * controllers
  */
 import ActiveNaviViewController from '../controllers/active/ActiveNaviViewController';
 import NavigatorViewControler from '../component/navigator/NavigatorViewController';
 import DiscoverListSwiperableViewController from '../controllers/find/DiscoverListSwiperableViewController';
 //containers
 import SeckillViewControllerContainer from './SeckillViewControllerContainer';

 ///tabbar items
 const tabBarItems = [
    {
        controller: SeckillViewControllerContainer,
        icon: require('../assets/images/tabbar/jd_home.png'),
        tabTitle: 'MainTab'
    },
    {
        controller: NavigatorViewControler,
        icon: require('../assets/images/tabbar/jd_discover.png'),
        tabTitle: 'DisTab'
    },
    {
        controller: ActiveNaviViewController,
        icon: require('../assets/images/tabbar/jd_active.png'),
        tabTitle: 'ActiveTab'
    },
    {
        controller: DiscoverListSwiperableViewController,
        icon: require('../assets/images/tabbar/jd_synthetic.png'),
        tabTitle: 'ChoiceTab'
    }
 ];

 export default class App extends Component {

     /**
      * 构造函数
      */
     constructor(props) {
         super(props);
         this.state = {
             selectedTab: 'MainTab'
         };
     }

     /**
      * 渲染TabBarIOS组件
      * 包含4部分
      *
      * @秒杀
      * @发现
      * @特色活动
      * @内容精选
      *
      */
     render() {
         /**
          * 指定特色活动ID
          */
         let activityId='3ZZxrjzEhFu3zHhec3BPTx3ZzUQi';//'4Sa8QGJDMDZ66NzYajpSe4GmeUn2';
         return(
             <TabBarIOS
                 tintColor='#ff0000'
                 barTintColor='white'
             >
                {
                    tabBarItems.map((item, index) => {
                        let Controller = item.controller;
                        return (
                            <TabBarIOS.Item
                                key={index}
                                title=''
                                icon={item.icon}
                                selected={this.state.selectedTab == item.tabTitle}
                                onPress={() => {
                                    this.setState({
                                        selectedTab: item.tabTitle
                                    });
                                }}
                            >
                            <Controller activityId = {activityId}></Controller>
                            </TabBarIOS.Item>
                        );
                    })
                }
             </TabBarIOS>
         )
     }
 }
