import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image, TextInput} from 'react-native';
const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create ({
    container:{
      flex:1,
      height:height,
      width:width,
      //backgroundColor:'yellow',
    },
    card:{
        flexDirection:'row',
        //backgroundColor:'black',
        width:wp('90%'), 
        alignSelf:'center',
        //justifyContent:'center',
       backgroundColor:'#fff',
       height:hp('7%'),
       //top:hp('5%'),
       //borderWidth:0.3,
       //padding:10,
       //paddingLeft:25,
       borderRadius:4,
       shadowOpacity:0.5,
        shadowColor: `rgba(0, 0, 0, 0.1)`,
        shadowOffset: {
            width: 1,
            height:1,
            },
        shadowRadius: 3.84,
        elevation: 3,
    },
    text:{
       //backgroundColor:'yellow',
        fontSize:14,
        fontWeight:"500",
        padding:wp('3%'),
        //paddingLeft:20,
        //width:200,
        //color:'white'
    },
    share:{
        //position:'absolute',
        paddingLeft:wp('2%'),
        //justifySelf:'flex-end'
    },
    heart:{
        paddingLeft:wp('15%'),
    },
    down:{
        paddingLeft:wp('3%'),
        paddingTop:wp('1%')
    },

 
});
export default styles;