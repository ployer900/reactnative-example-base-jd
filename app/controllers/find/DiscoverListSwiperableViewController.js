/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   21-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: DiscoverListSwiperableViewController.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 21-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */

import React, { Component } from 'react';
import SwiperableViewController from '../../component/swiper/SwiperableViewController';
import DiscoverAtcViewControllerContainer from '../../containers/DiscoverAtcViewControllerContainer';

const swiperViews = [
    {
        controller: DiscoverAtcViewControllerContainer,
        typeId: 2,
        tabTitle: '精选'
    },
    {
        controller: DiscoverAtcViewControllerContainer,
        typeId: 4,
        tabTitle: '生活家'
    },
    {
        controller: DiscoverAtcViewControllerContainer,
        typeId: 6,
        tabTitle: '数码控'
    },
    {
        controller: DiscoverAtcViewControllerContainer,
        typeId: 19,
        tabTitle: '吃货党'
    },
    {
        controller: DiscoverAtcViewControllerContainer,
        typeId: 20,
        tabTitle: '家居馆'
    }
];

export default class DiscoverListSwiperableViewController extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SwiperableViewController>
                {
                    swiperViews.map((item, index) => {
                        let Controller = item.controller;
                        return (
                            <Controller
                                key={index}
                                typeId={item.typeId}
                                tabTitle={item.tabTitle}
                            />
                        );
                    })
                }
            </SwiperableViewController>
        );
    }
}
