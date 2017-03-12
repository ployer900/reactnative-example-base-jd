/**
 * 广告轮播
 */

import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    ScrollView,
    TouchableHighlight
} from 'react-native';

import {createStyles,SCREEN_W} from '../../util/common';
import model from '../../model/active/LunboModel';

export default class LunboView extends Component {
    constructor(props) {
        super(props);
		this.state = {
			activePage: 0
		};
    }

    /**
     * 组件渲染结束后，执行定时轮播操作
     */
    componentDidMount() {
        this.setUpTimer();
    }

	/*
	 * 在这里释放内存
	 */
	componentWillUnmount() {
		this.clearTimer();
	}

    /**
     * 设置定时器
     */
    setUpTimer() {
        let self = this;
        let index = this.state.activePage;
        self.timer =  setInterval(function() {
            if (index == 4) index = 0;
            self.scrollToPage(index, true);
            index++;
        }, 4000);
    }

    /**
     * 跳转至指定页
     * @param  {[type]} page     [description]
     * @param  {[type]} animated [description]
     * @return {[type]}          [description]
     */
    scrollToPage(page, animated) {
        this.scrollView.scrollTo({x: SCREEN_W * page, y: 0, animated: animated});
    }

    /**
     * 关定时器
     * @return {[type]} [description]
     */
    clearTimer() {
        clearInterval(this.timer);
    }

    /**
     * 点击轮播图
     */
    bannerTapped(url) {
        if (this.props.bannerClicked) this.props.bannerClicked(url);
        else {}
    }

	//渲染指示器
	renderIndicator(len) {
		//是否隐藏
		if (this.props.hideIndicator == true) {
			return null;
		}

		// var len = 3;//this.props.children.length;
		var position = {};
		var indicators = [];
		var style;

		position.width = this.props.indicatorSpace * len;
		position.left = (SCREEN_W - len * this.props.indicatorSpace) / 2;

        if (this.props.indicatorPosition == 'bottom') {
            position.bottom = 0;
        } else position.top = 10;

		for(var i = 0; i < len; i++) {
			style = this.state.activePage == i ? {color: this.props.indicatorColor} : {color: this.props.noActiveIndicatorColor};
			indicators.push(
				<Text style={[style, {fontSize: this.props.indicatorSize}]}
					  key={i}
				>
					{this.props.indicatorText}
				</Text>
			);
		}

		if (indicators.length == 1) return null;

		return (
			<View style={[position,styles.pageIndicator]}>
				{indicators}
			</View>
		);
	}

    updataActivePage(currentPage) {
        let self = this;
        this.setState({
            activePage: currentPage
        }, function() {
            self.setUpTimer();
        });
    }

    /**
     * 渲染输出组件
     */
    render() {
        let self = this;
        let items = model.parseData(this.props.data)
            .map((ad, idx) => {
                return (
                    <TouchableHighlight
                        activeOpacity={1}
                        underlayColor={'#ffffff'}
                        onPress={() => {self.bannerTapped(ad.url);}}
                        key={idx}
                    >
                        <View
                            style={styles.slideWrap}
                        >
                            <Image
                                style={styles.slideItem}
                                source={{uri: ad.imgUrl}}
                            />
                        </View>
                    </TouchableHighlight>
                );
            });

        //计算子元素个数
        let len = items.length;

        return (
            <View style={{flex: 1}}>
                <ScrollView
                    style={styles.contain}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    pagingEnabled={true}
                    ref={(scrollView) => {this.scrollView = scrollView}}
                    onScroll={(e) => {
                        //nativeEvent参照OC版
                        let offsetX = e.nativeEvent.contentOffset.x;
                        let idx = offsetX / SCREEN_W;

                        this.clearTimer();
                        this.updataActivePage(idx);
                    }}
                >
                {items}
                </ScrollView>
                {this.renderIndicator(len)}
            </View>
        );
    }
}

//属性类型
LunboView.propTypes = {
    animationDuration: React.PropTypes.number,
	hideIndicator: React.PropTypes.bool,
	indicatorText: React.PropTypes.string,
	indicatorColor: React.PropTypes.string,
	noActiveIndicatorColor: React.PropTypes.string,
	indicatorSize: React.PropTypes.number,
	indicatorSpace: React.PropTypes.number,
    indicatorPosition: React.PropTypes.string
}

//默认属性值
LunboView.defaultProps = {
    animationDuration: 3000,
	hideIndicator: false,
	indicatorText: '•',
	indicatorColor: '#000',
	noActiveIndicatorColor: '#ccc',
	indicatorSize: 20,
	indicatorSpace: 12,
    indicatorPosition: 'bottom'
}

/**
 * 相关样式
 */
const styles = createStyles({
    contain: {
        width: SCREEN_W,
        height: 140
    },
    slideWrap: {
        width: SCREEN_W,
        height: 140
    },
    slideItem: {
        width: SCREEN_W,
        height: 140,
        backgroundColor: '#cccccc'
    },
	pageIndicator: {
	    position: 'absolute',
	    flexDirection: 'row',
	    flex: 1,
	    justifyContent: 'space-around',
	    alignItems: 'center',
	    alignSelf: 'center',
	    backgroundColor:'transparent'
	}
});
