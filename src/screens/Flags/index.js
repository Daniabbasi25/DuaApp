import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View,Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';    
import { RadioButton } from 'react-native-paper';
import styles from './styles';
const {width,height}=Dimensions.get('window');

const languages = [
    {
        "name": "Arabic ",
        "image":require("../../assets/arabic.png"), 
    },
    {
        "name": "English(US)",
        "image":require("../../assets/US.png"), 
    }, 
]; 
const Flags =()=>{
    const [checked, setChecked] = React.useState('');
    return (
        <View style={styles.container}>
        <FlatList
        data={languages}
        renderItem={({item})=>{
            console.log(item.name);
            //console.log(item.position);
            return (
                <View style={{ width:width, justifyContent:'center', alignContent:'center',}}>
                    <View style={styles.card}>
                        <View style={styles.flag}>
                        <Image source={item.image}  style={{width:30, height:30,borderRadius:30,}}/>
                        </View>
                      
                    <Text style={styles.text}>{item.name}</Text>
                    <View style={{top:25,}}>
                        <RadioButton
                        value="radio"
                        status={ checked === 'radio' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('radio')}
                        />
                    </View>
                    </View>
                    
                    
                </View>
            ); 
        }}
        />
        </View>
    );
};
export default Flags;