/**
 * 活动页面，包裹在NavigatorIOS中
 */

 import React, {Component, PropTypes} from 'react';
 import {NavigatorIOS, Text} from 'react-native';

 /**
  * 通天塔活动搭建系统模块
  */
 import ActiveHomeViewController from './ActiveHomeViewController';

 export default class NavigatorViewController extends Component {
     /**
      * 构造函数
      */
     constructor(props) {
        super(props);
     }

     /**
      * 渲染输出组件
      */
     render() {
         return (
             <NavigatorIOS
                 translucent={false}
                 shadowHidden={true}
                 initialRoute={{
                     component: ActiveHomeViewController,
                     title: '特色活动',
                     passProps: {activityId: this.props.activityId}
                 }}

                 style={{flex: 1}}
             />
         );
     }
 }
