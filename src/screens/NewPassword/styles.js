import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image} from 'react-native';
const {width,height}=Dimensions.get('window');

const styles = StyleSheet.create ({
    container:{
        //backgroundColor:'yellow',
        flex:1,
        justifyContent:'center',
        alignContent:'center',  
    },
    view:{
        //marginLeft:30,
        padding:40,
        //backgroundColor:'yellow',
        width:width,
        height:height,
        alignSelf:'center',    
    },
    text:{
        fontSize:14,
        fontWeight:"400",
        color:'#979797'
    },
    image:{
        width:12,
        height:15,
        paddingRight:10,
    },
    input: {
        height: 40,
        //margin: 12,
        borderBottomWidth: 0.25,
        width:wp('90%'),
        borderColor:'#939393',
        //padding: 10,
    },
    eye:{
        width:20,
        height:10,
        right:wp('10%'),
        bottom:2,
        top:15,
    },

});
 export default styles;