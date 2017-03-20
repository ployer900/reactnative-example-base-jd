/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   08-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: App.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
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
 import DiscoverListViewController from '../controllers/find/DiscoverListViewController';
 import ActiveNaviViewController from '../controllers/active/ActiveNaviViewController';
 import SwiperableViewController from '../component/swiper/SwiperableViewController';
 import NavigatorViewControler from '../component/navigator/NavigatorViewController';

 //containers
 import SeckillViewControllerContainer from './SeckillViewControllerContainer';
 import DiscoverListViewControllerContainer from './DiscoverListViewControllerContainer';

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
                 <TabBarIOS.Item
                     title=''
                     icon={require('../assets/images/tabbar/jd_home.png')}
                     selected={this.state.selectedTab == 'MainTab'}
                     onPress={() => {
                         this.setState({
                             selectedTab: 'MainTab'
                         });
                     }}
                 >
                 <SeckillViewControllerContainer></SeckillViewControllerContainer>
                 </TabBarIOS.Item>

                 <TabBarIOS.Item
                     title=''
                     icon={require('../assets/images/tabbar/jd_discover.png')}
                     selected={this.state.selectedTab == 'DisTab'}
                     onPress={() => {
                         this.setState({
                             selectedTab: 'DisTab'
                         });
                     }}
                 >
                 <NavigatorViewControler></NavigatorViewControler>
                 </TabBarIOS.Item>

                 <TabBarIOS.Item
                     title=''
                     icon={require('../assets/images/tabbar/jd_active.png')}
                     selected={this.state.selectedTab == 'ActiveTab'}
                     onPress={() => {
                         this.setState({
                             selectedTab: 'ActiveTab'
                         });
                     }}
                 >
                 <ActiveNaviViewController activityId={activityId}></ActiveNaviViewController>
                 </TabBarIOS.Item>

                 <TabBarIOS.Item
                     title=''
                     icon={require('../assets/images/tabbar/jd_synthetic.png')}
                     selected={this.state.selectedTab == 'ChoiceTab'}
                     onPress={() => {
                         this.setState({
                             selectedTab: 'ChoiceTab'
                         });
                     }}
                 >
                 <SwiperableViewController>
                     <DiscoverListViewControllerContainer netWorkType={0} tabTitle={'好东西'} />
                     <DiscoverListViewControllerContainer netWorkType={1} tabTitle={'优选清单'} />
                     <DiscoverListViewControllerContainer netWorkType={2} tabTitle={'店铺头条'} />
                     <DiscoverListViewControllerContainer netWorkType={0} tabTitle={'选礼神器'} />
                 </SwiperableViewController>
                 </TabBarIOS.Item>

             </TabBarIOS>
         )
     }
 }
