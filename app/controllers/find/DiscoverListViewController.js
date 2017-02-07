/**
 *
 *
 * 发现-清单页
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
    ScrollView,
    Animated,
    Easing,
    TouchableHighlight,
    Dimensions
} from 'react-native';

import {getDiscoverInvetGroup} from '../../network/index';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});

export default class  DiscoverListViewController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows([]),
            opacityValue: new Animated.Value(0)
        };
    }

    /**
     * 请求数据
     */
    fetchData() {
        return getDiscoverInvetGroup(-1).then((data) => {this.updDataSource(data);});
    }

    /**
     * DOM挂载
     */
    componentDidMount() {
        this.fetchData();
        Animated.timing(this.state.opacityValue, {
            toValue: 1,
            duration: 350,
            easing: Easing.linear
        }).start();
    }

    /**
     * 更新数据源
     */
    updDataSource(data) {
        this.setState({
            dataSource: ds.cloneWithRows(data.content)
        });
    }

    /**
     * 渲染行数据
     */
    renderRow(rowData) {

        var items = rowData.summaryList.map((img, idx) => {
            return(
                <View style={styles.imgWrap} key={idx}>
                    <Animated.Image
                        style={[styles.img, {
                            opacity: this.state.opacityValue
                        }]}
                        source={{uri:img}}
                    />
                </View>
            );
        });

        return (
            <View style={styles.container}>
                <Text style={styles.title} numberOfLines={1}>{rowData.mainTitle}</Text>
                <Text style={styles.subTitle} numberOfLines={1}>{rowData.desc}</Text>
                <View style={styles.content}>
                    {items}
                </View>
                <View style={styles.meta}>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <Image
                            style={styles.icon}
                            source={{uri: rowData.authorPic}}
                        />
                        <Text style={styles.author}>看客推荐了{rowData.goodsNum}件单品</Text>
                    </View>
                    <View style={[styles.look, {flexDirection: 'row', flex: 1}]}>
                        <Image
                            style={styles.eye}
                            source={require('../../assets/images/eye.png')}
                        />
                        <Text style={styles.author}>{rowData.pageView}</Text>
                    </View>
                </View>
            </View>
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
     * 渲染输出模块
     */
    render() {
        return (
            <View>
              <ListView style={styles.listview}
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
 * 容器宽高
 * @type {[type]}
 */
const containerHeight = Dimensions.get('window').height;
const containerWidth = Dimensions.get('window').width;

/**
 * 相关样式
 * @type {[type]}
 */
const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    content: {
        flexDirection: 'row'
    },
    title: {
        fontSize: 15,
        fontWeight: '600'
    },
    subTitle: {
        fontSize: 12,
        color: '#444',
        marginTop: 5,
        marginBottom: 5
    },
    imgWrap: {
        flex: 1,
        height: 100,
        marginRight: 3,
        marginLeft: 3,
        flexDirection: 'row',
        backgroundColor: '#ddd'
    },
    img: {
        height: 100,
        width: 112.5,
        // overflow: 'hidden',
        resizeMode: 'cover'
    },
    meta: {
        flexDirection: 'row',
        paddingTop: 6
    },
    author: {
        flexDirection: 'row',
        fontSize: 10,
        color: '#444'
    },

    line: {
        height: 0.5,
        backgroundColor: '#cccccc'
    },
    listview: {
        height: (containerHeight - 50),
        width: containerWidth
    },

    icon: {
        width: 14,
        height: 14,
        borderRadius: 7,
        marginRight: 6
    },

    eye: {
        width: 14,
        height: 9,
        marginTop: 2,
        marginRight: 4
    },
    look: {
        position: 'absolute',
        right: 0
    }
});
