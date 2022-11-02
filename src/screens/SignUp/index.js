import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image, TextInput, ScrollView} from 'react-native';
const {width,height}=Dimensions.get('window');
import styles from './styles';
const SignUp =({navigation})=>{
    return(
        
        <View style={styles.container}>
            <View style={styles.background}>
                <View>
                    <Image
                    style={{height:height, width:width}}
                    source={require('../../../assets/bg.png')}
                    />
                </View>
                <View style={styles.form}>
                    {/* <ScrollView> */}
                    <View>
                        <Text style={styles.heading}>Sign Up</Text>
                    </View>
                    <View style={styles.view}>
                    <View style={{paddingTop:20}}>
                    <View style={{flexDirection:'row'}}>
                    <View style={{paddingRight:10}}>
                    <Image
                    style={styles.image}
                    source={require('../../../assets/user.png')}
                    />
                    </View>
                    <Text style={styles.text}>Full Name</Text>
                    </View>
                    </View>
                    <View style= {{flexDirection:'row'}}>
                    <TextInput
                    style={styles.input}
                    />
                    </View>
                    <View style={{paddingTop:10}}>
                    <View style={{flexDirection:'row'}}>
                    <View style={{paddingRight:10}}>
                    <Image
                    style={styles.image}
                    source={require('../../../assets/email.png')}
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
                    <View style={{paddingTop:10}}>
                    <View style={{flexDirection:'row'}}>
                    <View style={{paddingRight:10}}>
                    <Image
                    style={styles.image}
                    source={require('../../../assets/lock.png')}
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
                    <View style={{paddingTop:10}}>
                    <View style={{flexDirection:'row'}}>
                    <View style={{paddingRight:10}}>
                    <Image
                    style={styles.image}
                    source={require('../../../assets/lock.png')}
                    />
                    </View>
                    <Text style={styles.text}>Confirm Password</Text>
                    </View>
                    </View>
                    <View style= {{flexDirection:'row'}}>
                    <TextInput
                    style={styles.input}
                    />
                    {/* <Image
                    style={styles.eye}
                    source={require('../../assets/eye.png')}
                    /> */}
                    </View>
                    <View style={{width:wp('70%'), justifyContent:'center', alignSelf:'center',paddingTop:30,paddingBottom:20}}>
                    <Button
                    //onPress={onPressLearnMore}
                    title="Sign Up"
                    color="#A044FF"
                    style={{fontSize:16, borderRadius:10,alignSelf:'center'}}
                    />
                    <View style={{flexDirection:'row', top:20,justifyContent:'center', alignContent:'center',}}>
                    <Text style={styles.login}>Already have an account? </Text>
                    <TouchableOpacity  onPress={() =>navigation.navigate('login')}>
                    <Text style={styles.resend}>Login</Text>
                    </TouchableOpacity>
                    </View>
                    <Text style={styles.option}>or sign up with </Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'center', alignContent:'center',}}>
                        <View style={{paddingRight:3}}>
                        <TouchableOpacity
                        style={styles.google}>
                            <View style={{flexDirection:'row',}}>
                            <Image
                            style={styles.logo}
                            source={require('../../../assets/google.png')}
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
                            source={require('../../../assets/google.png')}
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
        </View>
        
    );
};
export default SignUp;