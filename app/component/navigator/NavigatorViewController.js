/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   03-Nov-2016
 * @Email:  yuhongliang900@163.com
 * @Filename: NavigatorViewController.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 21-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */


/**
 * 导航器
 */

import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text } from 'react-native';

/**
 * 作者页模块
 */
import DiscoverAuthorViewControllerContainer from '../../containers/DiscoverAuthorViewControllerContainer';

export default class NavigatorViewController extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (

            <NavigatorIOS
                barTintColor={'#fefefe'}
                translucent={false}
                shadowHidden={true}
                initialRoute={{
                    component: DiscoverAuthorViewControllerContainer,
                    title: '发现',
                    backButtonTitle: '',
                    leftButtonTitle: ''
                }}

                style={{flex: 1}}
            />
        );
    }
}
