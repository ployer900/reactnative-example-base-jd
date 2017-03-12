/**
 * 活动模块相关页面入口
 */

import React, {Component} from 'react';
import {
    Image,
    View,
    Text,
    ListView,
    ScrollView,
    TouchableHighlight
} from 'react-native';

import {createStyles, SCREEN_W, SCREEN_H} from '../../util/common';
import {geth5BabelGenericChannel, getBabelProductPaged} from '../../network/index';

//import babel model
import BabelModViews from '../../component/active/index';

//webview
import WebViewController from '../../component/WebViewController';

export default class ActiveHomeViewController extends Component {
	//构造函数
    constructor(props) {
        super(props);
        this.state = {
            pageData: null
        };
    }

    /**
     * 挂载时间点
     */
    componentDidMount() {
        this.fetchGenericChannelData();
    }

    /**
     * 获取首屏数据
     */
    fetchGenericChannelData() {
        let activityId = this.props.activityId;//3ZZxrjzEhFu3zHhec3BPTx3ZzUQi
        return geth5BabelGenericChannel(activityId).then(
            (data) => {
				this.setState({
					pageData: data
				});
			}).catch((err) => {
                console.log(err);
				let data = {
					floorList: []
				};
				this.setState({
					pageData: data
				});
			});
    }

    /**
     * 页面跳转操作
     */
    goToPage(url) {
        this.props.navigator.push({
            component: WebViewController,
            title: '',
            passProps: {url: url}
        });
    }

    /**
     * 解析楼层数据
     */
    parseFloorData() {
        //排除setState异步性带来的问题
        //由于存在异步性，因此运行到当前函数的时候（组件第一次加载的时候）
        //由于state还没有被更新过来，导致state取值为constructor函数中值
        //进而发生错误
        if (!this.state.pageData) return;

        let floorView;
        let floors = this.state.pageData.floorList;
        let self = this;

        //解析楼层数据，输出相应的楼层视图
        floorView = floors.map(function(floorData, idx) {
            let template = floorData.template;
            switch (template) {
                case 'guanggao_tonglan':
                    return (<BabelModViews.TonglanView data={floorData} key={idx}></BabelModViews.TonglanView>);
                    break;
                case 'shangpin_putong':
                    return (<BabelModViews.NormalProductView productGroup={floorData} key={idx}></BabelModViews.NormalProductView>);
                    break;
                case 'jiange':
                    return (<BabelModViews.JiangeView data={floorData} key={idx}></BabelModViews.JiangeView>);
                    break;
                case 'loucengbiaoti':
                    return (<BabelModViews.LoucengbiaotiView data={floorData} key={idx}></BabelModViews.LoucengbiaotiView>);
                    break;
                case 'guanggao_zuhe':
                    return (<BabelModViews.ZuheView data={floorData} key={idx}></BabelModViews.ZuheView>);
                    break;
                case 'guanggao_beishu':
                    return (<BabelModViews.BeishuView data={floorData} key={idx}></BabelModViews.BeishuView>);
                    break;
                case 'quickentry':
                    return (<BabelModViews.QuickEntryView data={floorData} key={idx} quickEntryClicked={self.goToPage.bind(self)}></BabelModViews.QuickEntryView>);
                    break;
                case 'guanggao_lunbo':
                    return (<BabelModViews.LunboView data={floorData} key={idx} bannerClicked={self.goToPage.bind(self)}></BabelModViews.LunboView>);
                    break;
                default: return (
						<View style={styles.empty} key={idx}>
							<Text style={styles.network}>网络出错了，请稍后重试~~</Text>
						</View>
				);
            }
        });

       //返回楼层
        return floorView;
    }

    /**
     * 渲染输出组件
     */
    render() {
        let floorView = this.parseFloorData();

        return (
            <ScrollView style={styles.container}>
                {floorView}
            </ScrollView>
        );
    }
}

/**
 * 定义样式
 * @type {[type]}
 */
const styles = createStyles({
    container: {
        width: SCREEN_W,
        height: SCREEN_H - 40,
        backgroundColor: '#ffffff'
    },

    empty: {
        height: 0,
		width: SCREEN_W,
		backgroundColor: '#ffffff'
    },

	network: {
		fontSize: 14,
		color: '#cccccc',
		fontWeight: '600',
		textAlign: 'center'
	}
});
