/**
 *
 *
 * 发现栏目，作者页
 *
 *
 */

import React, {Component} from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet,
    ListView,
    TouchableHighlight
} from 'react-native';

/**
 * 引入网络库
 */
import {getAuthorReleaseGroup} from '../../network/index';

/**
 * 发现清单页
 */
import DiscoverListViewController from './DiscoverListViewController';

/**
 * 定义数据源显示层
 * @type {ListView}
 */
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});

export default class DiscoverAuthorViewController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows([])
        };
    }

    /**
     * 触发请求
     */
    componentDidMount() {
        this.fetchData();
    }

    /**
     * 更新数据源
     */
    updDataSource(data) {
        this.setState({
            dataSource: ds.cloneWithRows(data.page.content)
        });
    }

    /**
     * 获取数据
     */
    fetchData() {
        return getAuthorReleaseGroup(3099, 2, 10, 0, 1).then((data) => {this.updDataSource(data);});
    }

    /**
     * 导航栏
     */
    tapItem() {
        //viewcontroller挂载到navigatorController
        //上后，拿到navigator属性，指向navigatorController
        this.props.navigator.push({
            //目的ViewController
            component: DiscoverListViewController,

            //目的ViewController导航栏显示名称
            title: '发现清单',

            //传递给目的ViewController的参数
            //目的ViewController通过属性获取
            passProps: {netWorkType: 0}
        });
    }

    /**
     * 渲染行数据
     */
    renderRow(rowData) {
        return (
            <TouchableHighlight
                activeOpacity={1}
                underlayColor={'#ffffff'}
                onPress = {() => {this.tapItem();}}
            >
                <View style={styles.container}>

                        <Image
                            style={styles.icon}
                            source={{uri: rowData.goodsPic}}
                        />

                        <View style={styles.right}>
                            <Text style={styles.theme} numberOfLines={1}>{rowData.recommendTheme}</Text>
                            <Text style={styles.reason} numberOfLines={4}>{rowData.recommendReason}</Text>
                            <Text style={styles.like}>
                                {rowData.likeNum}
                                <Text style={styles.likeSuffix}>人喜欢</Text>
                            </Text>
                        </View>
                </View>

            </TouchableHighlight>
        );
    }

    /**
     * 渲染行间分隔线
     * @type {[type]}
     */
    renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool){
        return (
            <View
              key={`${sectionID}-${rowID}`}
              style={styles.line}>
            </View>
        );
    }


    /**
     * 渲染输出组件
     */
    render() {
        return(
            <View style={{paddingTop: 0, flex: 1}}>
              <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this.renderRow(rowData)}
                renderSeparator={this.renderSeparator}
                enableEmptySections={true}
              />
            </View>
        );
    }
}

/**
 * 样式定义
 * @type {[type]}
 */
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10
    },
    icon: {
        width: 120,
        height: 120
    },

    right: {
        flex: 1,
        paddingLeft: 10
    },
    theme: {
        fontSize: 15,
        fontWeight: '600',
        paddingBottom: 6
    },
    reason: {
        fontSize: 12,
        lineHeight: 18,
        color: '#444'
    },

    like: {
        fontSize: 10,
        color: '#333',
        position: 'absolute',
        right: 0,
        bottom: 0
    },

    likeSuffix: {
        color: '#999'
    },

    line: {
        height: 0.5,
        backgroundColor: '#cccccc'
    }
});
