/**
 * 主程序
 */
 /**
  * jdproject
  */

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
                 tintColor='#ff334d'
                 barTintColor='white'
             >
                 <TabBarIOS.Item
                     title='秒杀'
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
                     title='发现'
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
                     title='特色活动'
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
                     title='精选内容'
                     selected={this.state.selectedTab == 'ChoiceTab'}
                     onPress={() => {
                         this.setState({
                             selectedTab: 'ChoiceTab'
                         });
                     }}
                 >
                 <SwiperableViewController>
                     <DiscoverListViewController netWorkType={0} tabTitle={'好东西'} />
                     <DiscoverListViewController netWorkType={1} tabTitle={'优选清单'} />
                     <DiscoverListViewController netWorkType={2} tabTitle={'店铺头条'} />
                     <DiscoverListViewController netWorkType={0} tabTitle={'选礼神器'} />
                 </SwiperableViewController>
                 </TabBarIOS.Item>

             </TabBarIOS>
         )
     }
 }
