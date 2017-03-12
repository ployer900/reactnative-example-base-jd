/**
 *
 *  普通商品组
 *
 */

import React, {Component} from 'react';
import {
    Image,
    ScrollView,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import {createStyles, SCREEN_W} from '../../util/common';
import ProductSlideView from './ProductSlideView';
import ProductListView from './ProductListView';
import model from '../../model/active/NormalProductModel';

export default class NormalProductView extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * 渲染输出商品组
     * 根据styleId，切换相应的样式
     * 目前处理方式，通过styleId来分流
     * 渲染操作达到目的；并不是切换样式来实现
     * 在后续过程中，看看能否单使用样式控制
     * 因为不同的展示形式上，结构可能会不一致；这
     * 会导致单靠样式控制有点困难
     */
    render() {
        //es6析构
        let {styleId, groupList} = model.parseData(this.props.productGroup);

        //分流操作
        switch (styleId) {
            case '3':
                let productSlideView = groupList.map((data, idx) => {
                    return (
                        <ProductSlideView key={idx}
                            name={data.name}
                            imgUrl={data.imgUrl}
                            price={data.price}
                            oriPrice={data.oriPrice}
                        >
                        </ProductSlideView>
                    );
                });
                return (
                    <ScrollView
                        style={styles.pdContainer}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                    >
                    {productSlideView}
                    </ScrollView>
                );
                break;
            case '4':
                let productListView = groupList.map((data, idx) => {
                    return (
                        <ProductListView key={idx}
                            name={data.name}
                            imgUrl={data.imgUrl}
                            price={data.price}
                            oriPrice={data.oriPrice}
                            tag={data.tag}
                        >
                        </ProductListView>
                    );
                });
                return (
                    <View style={styles.pdListContainer}>
                        {productListView}
                    </View>
                );
                break;
            default: break;

        }
    }
}

/**
 * 相关样式
 * @type {[type]}
 */
const styles = createStyles({
    pdContainer: {
        height: SCREEN_W / 4 + 55,
        backgroundColor: '#dddddd',
        padding: 2
    }
});
