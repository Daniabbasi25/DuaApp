import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image, TextInput} from 'react-native';
const {width,height}=Dimensions.get('window');
import styles from './styles';
const Verification =()=>{
    return(
        <View style={styles.container}>
            {/* <Text>hello forget</Text> */}
            <View style={styles.view}>
            <View style={{paddingTop:20}}>
                <View style={{justifyContent:'center', alignContent:'center'}}>
                <Text style={styles.text}>Enter Verifation Code</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center', alignContent:'center'}}>
            <View style= {styles.box}>
                <TextInput
                style={styles.input}
                />
            </View>
            <View style= {styles.box}>
                <TextInput
                style={styles.input}
                //placeholder={}
                placeholderTextColor={'#828282'}
                //placeholderStyle={styles.placeholder}
                
                />
            </View>
            <View style= {styles.box}>
                <TextInput
                style={styles.input}
                />
            </View>
             <View style= {styles.box}>
                <TextInput
                style={styles.input}
                />
            </View>
            </View>
            <View style={{width:'70%', justifyContent:'center', alignSelf:'center',paddingTop:30,}}>
                <Button
                //onPress={onPressLearnMore}
                title="Verify"
                color="#A044FF"
                style={{fontSize:16, borderRadius:10}}
                />
            </View>
            <View style={{flexDirection:'row', top:20,justifyContent:'center', alignContent:'center',}}>
                <Text style={styles.login}>If you didn’t receive the code?</Text>
                <TouchableOpacity>
                <Text style={styles.resend}> Resend</Text>
                </TouchableOpacity>
            </View>
            </View>

        </View>
    );};
export default Verification;