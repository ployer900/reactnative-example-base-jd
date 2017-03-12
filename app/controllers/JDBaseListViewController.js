/**
 * viewcontroller enhancer
 *
 * @decorator
 */


import React, {Component} from 'react';
import {
    View,
    Text,
    ActivityIndicatorIOS,
    StyleSheet,
    Dimensions
} from 'react-native';

//common util tool
import {SCREEN_W, SCREEN_H} from '../util/common';
//indicator
import Spinner from 'react-native-spinkit';

//const variable
const REFRESH_HEADER_H = 20;
const REFRESH_FOOTER_H = 40;

export default class JDBaseListViewController extends Component {
    constructor(props) {
        super(props);
    }

    onRefresh() {
        this.loadInitialData();
        this.list.hideHeader();
    }

    onInfinite() {
        this.loadMoreData();
        this.list.hideFooter();
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

    renderEmptyRow() {
        return (
            <View style={{height: SCREEN_H, justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:40, fontWeight:'800', color:'red'}}>
                </Text>
            </View>
        );
    }

    renderHeaderRefreshIdle() {
        return (
          <View style={{flex:1, height: REFRESH_HEADER_H, justifyContent:'center', alignItems:'center'}}>
              <Text style={styles.text}>
                  下拉刷新
              </Text>
          </View>
      );
    }

    renderHeaderWillRefresh() {
        return (
          <View style={{height: REFRESH_HEADER_H, justifyContent:'center', alignItems:'center'}}>
              <Text style={styles.text}>
                  释放后刷新
              </Text>
          </View>
      );
    }

    renderHeaderRefreshing() {
        return (
          <View style={{height: REFRESH_HEADER_H, justifyContent:'center', alignItems:'center'}}>
              <Text style={styles.text}>
                  刷新中
              </Text>

              <ActivityIndicatorIOS
                  size='small'
                  animating={true}/>
          </View>
      );
    }

    renderFooterWillInifite() {
        return (
                <View style={{height:REFRESH_FOOTER_H, justifyContent:'center', alignItems:'center'}}>
                    <Text style={styles.text}>
                        加载更多数据
                    </Text>
                </View>
            );
    }

    renderFooterInifiting() {
        return (
                <View style={{height:REFRESH_FOOTER_H, justifyContent:'center', alignItems:'center'}}>
                    <ActivityIndicatorIOS
                        size='small'
                        animating={true}/>
                    <Text style={styles.text}>
                        数据加载中
                    </Text>
                </View>
            );
    }

    renderFooterInifiteLoadedAll() {
        return (
                <View style={{height:REFRESH_FOOTER_H, justifyContent:'center', alignItems:'center'}}>
                    <Text style={styles.text}>
                        没有更多数据啦~~
                    </Text>
                </View>
            );
    }

    renderSpinner() {
        return (
            <Spinner style = {styles.spinner}
               isVisible = {this.props.isFetching}
               color = {'#eb661c'}
               size = {36}
               type = {'FadingCircle'}
            />
        );
    }

    render() {
        return (
          <View style={styles.container}>
            {this.renderSpinner()}
            {this.renderRefreshInfiniteListview()}
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        flex: 1,
        backgroundColor: '#eee',
        paddingBottom: 60
    },
    spinner: {
        position: 'absolute',
        left: 0,
        top: 0,
        marginLeft: SCREEN_W / 2 - 18,
        marginTop: SCREEN_H / 2 - 18 - 42,
        zIndex: 10
    },
    text: {
        color: '#999'
    }
});
