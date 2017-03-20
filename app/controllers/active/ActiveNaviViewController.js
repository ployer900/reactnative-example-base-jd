/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   08-Nov-2016
 * @Email:  yuhongliang900@163.com
 * @Filename: ActiveNaviViewController.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 20-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * 活动页面，包裹在NavigatorIOS中
 */

 import React, {Component, PropTypes} from 'react';
 import {NavigatorIOS, Text} from 'react-native';

 /**
  * 通天塔活动搭建系统模块
  */
 import ActiveHomeViewControllerContainer from '../../containers/ActiveHomeViewControllerContainer';

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
                     component: ActiveHomeViewControllerContainer,
                     title: '特色活动',
                     passProps: {activityId: this.props.activityId}
                 }}

                 style={{flex: 1}}
             />
         );
     }
 }
