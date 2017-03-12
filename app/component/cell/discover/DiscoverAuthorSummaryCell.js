import React, {Component} from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Dimensions
} from 'react-native';


export default class DiscoverAuthorSummaryCell extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.mainImage}>
                    <Image source = {{uri: this.props.inventoryImg}}
                           style = {styles.mainImage}
                    />
                    <Text style = {[styles.titleCommonStyle, styles.mainTitle]}>{this.props.mainTitle}</Text>
                    <Text style = {[styles.titleCommonStyle, styles.desc]}>{this.props.desc}</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginBottom: 8
    },
    mainImage: {
        width: Dimensions.get('window').width,
        height: 140
    },
    titleCommonStyle: {
        position: 'absolute',
        left: 0,
        width: Dimensions.get('window').width,
        color: '#ffffff',
        textAlign: 'center'
    },
    mainTitle: {
        bottom: 60,
        fontSize: 20,
        fontWeight: '600',
    },
    desc: {
        bottom: 30,
        fontSize: 18,
        fontWeight: '400',
    }
});
