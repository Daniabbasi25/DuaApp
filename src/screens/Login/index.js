import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image, TextInput, ScrollView, ImageBackground} from 'react-native';
const {width,height}=Dimensions.get('window');
import styles from './styles';
const Login =()=>{
    return(
        
        <View style={styles.container}>
            <ImageBackground
            style={{height:height, width:width}}
            source={require('../../assets/bg.png')}
            >

            <View>
                <View style={styles.form}>
                    {/* <ScrollView> */}
                    <View>
                        <Text style={styles.heading}>Login</Text>
                    </View>
                    <View style={styles.view}>
                    <View style={{paddingTop:20}}>
                    </View>
                    
                    <View style={{paddingTop:10}}>
                    <View style={{flexDirection:'row'}}>
                    <View style={{paddingRight:10}}>
                    <Image
                    style={styles.image}
                    source={require('../../assets/email.png')}
                    />
                    </View>
                    <Text style={styles.text}>Email</Text>
                    </View>
                    </View>
                    <View style= {{flexDirection:'row'}}>
                    <TextInput
                    style={styles.input}
                    />
                    </View>
                    <View style={{paddingTop:hp('3%')}}>
                    <View style={{flexDirection:'row'}}>
                    <View style={{paddingRight:10}}>
                    <Image
                    style={styles.image}
                    source={require('../../assets/lock.png')}
                    />
                    </View>
                    <Text style={styles.text}>Password</Text>
                    </View>
                    </View>
                    <View style= {{flexDirection:'row'}}>
                    <TextInput
                    style={styles.input}
                    />
                    </View>
                    <View style={styles.forgot}>
                        <Text style={styles.login}>forgot Password?</Text>
                    </View>
                    
                    <View style={{justifyContent:'center', alignSelf:'center',paddingTop:hp('1%'),}}>
                    <View style={{alignSelf:'center'}}>
                        <TouchableOpacity
                        style={styles.button}>
                            <Text style={styles.buttontxt}>Login</Text>
                        </TouchableOpacity>
                        </View>
                    <View style={{flexDirection:'row',padding:hp('2%'), justifyContent:'center', alignContent:'center',}}>
                    <Text style={styles.login}>Don't have an account? </Text>
                    <TouchableOpacity>
                    <Text style={styles.resend}>Sign Up</Text>
                    </TouchableOpacity>
                    </View>
                    <View>
                    <Text style={styles.option}>or log in with </Text>
                    </View>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'center', alignContent:'center',}}>
                        <View style={{paddingRight:3}}>
                        <TouchableOpacity
                        style={styles.google}>
                            <View style={{flexDirection:'row',}}>
                            <Image
                            style={styles.logo}
                            source={require('../../assets/google.png')}
                            />
                            <Text style={styles.btnText}>Google</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                        <View style={{paddingLeft:3}}>
                        <TouchableOpacity
                        style={styles.facebook}>
                            <View style={{flexDirection:'row',}}>
                            <Image
                            style={styles.logo}
                            source={require('../../assets/facebook.png')}
                            />
                            <Text style={styles.btnText}>Facebook</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                    </View>
                    </View>
                    {/* </ScrollView> */}
                </View>
            </View>
            </ImageBackground>
        </View>
        
    );
};
export default Login;