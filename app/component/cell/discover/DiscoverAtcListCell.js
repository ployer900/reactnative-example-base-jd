/**
 * @Author: hongliang yu <yuhongliang>
 * @Date:   21-Mar-2017
 * @Email:  yuhongliang900@163.com
 * @Filename: DiscoverAtcListCell.js
 * @Last modified by:   yuhongliang
 * @Last modified time: 21-Mar-2017
 * @License: MIT
 * @Copyright: All reserved by yuhongliang<yuhongliang900@163.com>
 */

 import React, {Component} from 'react';
 import {
     Image,
     View,
     Text,
     StyleSheet,
     TouchableHighlight,
     Dimensions
 } from 'react-native';

 import { SCREEN_W } from '../../../util/common';

 export default class DiscoverAtcListCell extends Component {
     constructor(props) {
         super(props);
     }

     render() {
         const { indexImage, title, summary, pageView } = this.props.rowData;
         return (
             <TouchableHighlight
                 activeOpacity={1}
                 underlayColor={'#ffffff'}
                 onPress = {() => {}}
             >
                 <View style={styles.wrapper}>

                         <Image
                             style={styles.icon}
                             source={{uri: indexImage}}
                         />

                         <View style={styles.right}>
                             <Text style={styles.theme} numberOfLines={2}>{title}</Text>
                             <Text style={styles.reason} numberOfLines={3}>{summary}</Text>
                             <Text style={styles.like}>
                                 {pageView}
                                 <Text style={styles.likeSuffix}>人阅读</Text>
                             </Text>
                         </View>
                 </View>

             </TouchableHighlight>
         );
     }
 }

 const styles = StyleSheet.create({
     wrapper: {
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
         paddingLeft: 16,
         width: SCREEN_W - 140
     },
     theme: {
         fontSize: 15,
         fontWeight: '600',
         lineHeight: 20,
         paddingBottom: 6,
         color: '#333'
     },
     reason: {
         fontSize: 12,
         lineHeight: 18,
         color: '#666'
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
