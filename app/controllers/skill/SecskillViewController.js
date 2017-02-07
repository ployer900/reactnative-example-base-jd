/**
 * jd秒杀模块
 * 目前只支持单张列表
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

//引入单元格组件
import SeckillCell from '../../component/cell/SeckillCell';
//引入网络组件
import {getSecskillProductGroup} from '../../network/index';


/**
 * 定义数据源显示框架
 * @type {ListView}
 */
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});

export default class SecskillViewController extends Component {
    /**
     * 构造函数
     * @param  {[type]} props [description]
     * @return {[type]}       [description]
     */
    constructor(props) {
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows([])
        };
    }

    /**
     * 数据请求应当放在当前
     * 生命周期函数中执行
     */
    componentDidMount() {
        //请求数据
        this.fetchData();
    }

    /**
     * 渲染row间的分隔线
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
     * 更新数据源
     */
    updateDataSouce(data) {
        this.setState({
          dataSource: ds.cloneWithRows(data.seckillInfo.itemList)
        });
    }

    /**
     * 获取数据
     */
    fetchData() {
        getSecskillProductGroup(43, 1424151).then((data) => {this.updateDataSouce(data);});
    }

    /**
     * 渲染组件
     */
    render() {
        return (
          <View style={{paddingTop: 42, flex: 1}}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) =>
                  <SeckillCell
                      soldRate={rowData.soldRate}
                      price={rowData.miaoShaPrice}
                      imgURL={rowData.imageurl}
                      title={rowData.wname}
                      oriPrice={rowData.jdPrice}
                  ></SeckillCell>
              }
              renderSeparator={this.renderSeparator}
              enableEmptySections={true}
            />
          </View>
        );
    }
}

const styles = StyleSheet.create({
  line: {
    height: 0.5,
    backgroundColor: '#cccccc'
  }
});
