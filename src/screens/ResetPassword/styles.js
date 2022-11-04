import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create ({
    container:{
        //backgroundColor:'yellow',
        //flex:1,
        width:wp('90%'),
        height:height,
        justifyContent:'center',
        alignContent:'center',
        alignSelf:'center' ,
        paddingBottom:hp('40%'),
        paddingTop:hp('25%')
    },
    image:{
        //borderWidth:1,
        width:wp('35%'),
        height:hp('35%'),
        marginTop:30,
        alignSelf:'center',
    },
    view:{
        //marginLeft:30,
        padding:40,
        //backgroundColor:'yellow',
        width:wp('90%'),
        height:hp('90%'),
        alignSelf:'center',    
    },
    purple:{
        color:'#A044FF',
        fontWeight:"500",
        fontSize:18,
    },
    text:{
        fontWeight:"400",
        fontSize:16,
        color:'#0F0702',
    },
    bold:{
        fontWeight:"500",
        fontSize:16,
        color:'#0F0702',
    },
    Button:{
        borderRadius:50,
        alignSelf:'center',
    }

});
export default styles;