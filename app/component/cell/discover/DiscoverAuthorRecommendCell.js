import React, {Component} from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Dimensions
} from 'react-native';


export default class DiscoverAuthorRecommendCell extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight
                activeOpacity={1}
                underlayColor={'#ffffff'}
                onPress = {() => {this.props.tapItem()}}
            >
                <View style={styles.container}>

                        <Image
                            style={styles.icon}
                            source={{uri: this.props.goodsPic}}
                        />

                        <View style={styles.right}>
                            <Text style={styles.theme} numberOfLines={1}>{this.props.recommendTheme}</Text>
                            <Text style={styles.reason} numberOfLines={4}>{this.props.recommendReason}</Text>
                            <Text style={styles.like}>
                                {this.props.likeNum}
                                <Text style={styles.likeSuffix}>人喜欢</Text>
                            </Text>
                        </View>
                </View>

            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff'

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
        fontSize: 18,
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
    }
});
