/**
 * jdproject
 */

import React, { Component } from 'react';
import {
  AppRegistry,
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
import SecskillViewController from './app/controllers/skill/SecskillViewController';
import DiscoverAuthorViewController from './app/controllers/find/DiscoverAuthorViewController';
import DiscoverListViewController from './app/controllers/find/DiscoverListViewController';
import ActiveNaviViewController from './app/controllers/active/ActiveNaviViewController';
import SwiperableViewController from './app/component/swiper/SwiperableViewController';
import NavigatorViewControler from './app/component/navigator/NavigatorViewController';


export default class jdproject extends Component {

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
                <SecskillViewController></SecskillViewController>
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

AppRegistry.registerComponent('jdproject', () => jdproject);
