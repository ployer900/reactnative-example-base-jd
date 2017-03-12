/**
 *
 * 内嵌webview
 *
 */
import React, {Component} from 'react';
import {
    View,
    WebView
} from 'react-native';

import {createStyles, SCREEN_W, SCREEN_H} from '../util/common';

export default class WebViewController extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <WebView
              automaticallyAdjustContentInsets={false}
              style={styles.webView}
              source={{uri: this.props.url}}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              decelerationRate="normal"
              startInLoadingState={true}
            />
        );
    }
}

/**
 * 相关样式
 * @type {[type]}
 */
const styles = createStyles({
    webView: {
        width: SCREEN_W,
        height: SCREEN_H,
        backgroundColor: '#ffffff'
    }
});
