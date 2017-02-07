/**
 * 导航器
 */

import React, {Component, PropTypes} from 'react';
import {NavigatorIOS, Text} from 'react-native';

/**
 * 作者页模块
 */
import DiscoverAuthorViewController from '../../controllers/find/DiscoverAuthorViewController';

export default class NavigatorViewController extends Component {

    constructor(props) {
        super(props);
    }

    
    render() {
        return (

            <NavigatorIOS
                translucent={false}
                shadowHidden={true}
                initialRoute={{
                    component: DiscoverAuthorViewController,
                    title: '发现'
                }}

                style={{flex: 1}}
            />
        );
    }
}
