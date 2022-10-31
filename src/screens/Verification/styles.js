import * as React from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image, TextInput} from 'react-native';
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
        fontWeight:500,
        color:'#0F0702',
        alignSelf:'center',
        lineHeight:21,
    },
    image:{
        width:16,
        height:12,
        top:5,
        paddingRight:10,
    },
    input: {
        height: 49,
        //margin: 12,
        width:46,
        borderRadius:4,
        borderColor:'#C4C4C4',
        borderWidth: 0.25,
        padding: 5,
        // fontWeight:400,
        // fontSize:14,
        // color:'red'
    },
    login:{
        color:'#828282',
        //color:'yellow',
        fontSize:14,
        fontWeight:400,
        //left:190,
        //paddingLeft:92,
        alignSelf:'center',
        top:30,
        paddingTop:5,
    },
    box:{
        paddingTop:30,
        padding:10,
        //backgroundColor:'pink',
        alignSelf:'center',
        //left:40,
    },
    resend:{
        color:'#4E54C8',
        fontSize:14,
        fontWeight:500,
        alignSelf:'center',
        top:30,
        paddingTop:5,
    },
    placeholder:{
        fontWeight:400,
        color:'red'
    }, 
});
export default styles;