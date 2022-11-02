import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image, TextInput,ScrollView} from 'react-native';
//import { Dropdown } from 'react-native-material-dropdown';
import Modal from 'react-native-modal';
const {width,height}=Dimensions.get('window');
import styles from './styles.js';
import Brightness from './slider';
import Pop from './popup.js';
const languages = [
  {
      "name": "Khalifah Taniji",
      "image":require("../../../../assets/taniji.png"), 
  },
  {
      "name": "Abdur-Rahman",
      "image":require("../../../../assets/abdurrehman.png"), 
  }, 
  {
    "name": "Mishari Rashid",
    "image":require("../../../../assets/mishari.png"), 
  },
  {
    "name": "Mishari Rashid",
    "image":require("../../../../assets/mishari.png"), 
  },{
    "name": "Mishari Rashid",
    "image":require("../../../../assets/mishari.png"), 
  },
  {
    "name": "Mishari Rashid",
    "image":require("../../../../assets/mishari.png"), 
  },
  

]; 
const Settings=({navigation})=>{
  const [checked, setChecked] = React.useState('');
      return (
        
        <View style={styles.container}>
          <ScrollView
          showsVerticalScrollIndicator={false}
          >
          <View style={{ width:wp('90%'), justifyContent:'center', alignSelf:'center', padding:10}}>
            <View style={{padding:wp('5%'),}}>
              <Text style={styles.title}>Reciters</Text>
            </View>
            </View>
          <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          //numColumns={'2'}
          data={languages}
          renderItem={({item})=>{
            return (
              
              <View style={{justifyContent:'center',alignItems:'center', padding:wp('2%'),left:wp('10%'), }}>
                    <View style={styles.card}>
                        <View style={styles.flag}>
                        <Image source={item.image}  style={{width:60, height:60,borderRadius:30,}}/>
                        </View>
                        <View style={{justifyContent:'center', alignContent:'center'}}>
                          <Text style={styles.textF}>{item.name}</Text>
                        </View>
                    </View>
              </View>
            ); 
        }}
        />
            
            {/* <Pop/> */}
            {/* <Text>hello</Text> */}
            <View style={{ width:wp('90%'), justifyContent:'center', alignSelf:'center', padding:10}}>
            <View style={{padding:wp('5')}}>
              <Text style={styles.title}>Account</Text>
            </View>
            <TouchableOpacity>
            <View style={{flexDirection:'row', paddingLeft:wp('5')}}>
            <View style={{paddingRight:wp('8%'),paddingLeft:wp('2%'),}}>
            <Image
                source={require('../../../../assets/profile.png')}
                style={{height: 18, width: 18, alignSelf:'center',}}
                />
            </View>
              <Text style={styles.text}>Profile Settings </Text>
            </View>
            </TouchableOpacity>
            <View style={{padding:wp('5')}}>
              <Text style={styles.title}>Language</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Flags')}>
            <View style={{flexDirection:'row', paddingLeft:wp('5')}}>
            <View style={{paddingRight:wp('8%'),paddingLeft:wp('2%'),}}>
            <Image
                source={require('../../../../assets/globe.png')}
                style={{height: 18, width: 18, alignSelf:'center',}}
                />
            </View>
          
              <Text  style={styles.text}>English UK </Text>
            
            </View>
            </TouchableOpacity>
            <View style={{padding:wp('5')}}>
              <Text style={styles.title}>Premium</Text>
            </View>
            <TouchableOpacity onPress={() =>navigation.navigate("Premium")}>
            <View style={{flexDirection:'row', paddingLeft:wp('5'), padding:hp('2%')}}>
            <View style={{paddingRight:wp('8%'),paddingLeft:wp('2%'),}}>
            <Image
                source={require('../../../../assets/diamond.png')}
                style={{height: 18, width: 18, alignSelf:'center',}}
                />
            </View>
            
              <Text  style={styles.text}>Upgrade Premium </Text>
            </View>
            </TouchableOpacity>
            <View style={{padding:wp('5')}}>
              <Text style={styles.title}>Features</Text>
            </View>
            <TouchableOpacity>
            <View style={{flexDirection:'row', paddingLeft:wp('5'), padding:hp('2%')}}>
            <View style={{paddingRight:wp('8%'),paddingLeft:wp('2%'),}}>
            <Image
                source={require('../../../../assets/color.png')}
                style={{height: 20, width: 18, alignSelf:'center',}}
                />
            </View>
              <Text style={styles.text}>Color Scheme </Text>
              <View style={styles.arrow}>
                <Image
                source={require('../../../../assets/color (2).png')}
                style={{height: 27, width: 29, alignSelf:'center',alignSelf:'flex-end'}}
                />
              </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{flexDirection:'row', paddingLeft:wp('5'),padding:hp('2%')}}>
            <View style={{paddingRight:wp('8%'),paddingLeft:wp('2%'),}}>
            <Image
                source={require('../../../../assets/font.png')}
                style={{height: 15, width: 20, alignSelf:'center',}}
                />
            </View>
              <Text style={styles.text}>Font Type </Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{flexDirection:'row', paddingLeft:wp('5'),padding:hp('2%')}}>
            <View style={{paddingRight:wp('8%'),paddingLeft:wp('2%'),}}>
            <Image
                source={require('../../../../assets/size.png')}
                style={{height: 18, width: 20, alignSelf:'center',}}
                />
            </View>
              <Text style={styles.text}>Font Size</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{flexDirection:'row', paddingLeft:wp('5'),padding:hp('2%')}}>
            <View style={{paddingRight:wp('8%'),paddingLeft:wp('2%'),}}>
            <Image
                source={require('../../../../assets/bightness.png')}
                style={{height: 20, width: 21, alignSelf:'center',}}
                />
            </View>
              <Text style={styles.text}>Brightness</Text>
              <View style={styles.arrow}>
                <Brightness/>
              </View>
            </View>
            </TouchableOpacity>
            <View style={{padding:wp('5')}}>
              <Text style={styles.title}>Time Style</Text>
            </View>
            <TouchableOpacity>
            <View style={{flexDirection:'row', paddingLeft:wp('5'),padding:hp('2%')}}>
            <View style={{paddingRight:wp('8%'),paddingLeft:wp('2%'),}}>
            <Image
                source={require('../../../../assets/sec.png')}
                style={{height: 20, width: 21, alignSelf:'center',}}
                />
            </View>
              <Text style={styles.text}>Show Seconds</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{flexDirection:'row', paddingLeft:wp('5'),padding:hp('2%')}}>
            <View style={{paddingRight:wp('8%'),paddingLeft:wp('2%'),}}>
            <Image
                source={require('../../../../assets/24.png')}
                style={{height: 20, width: 21, alignSelf:'center',}}
                />
            </View>
              <Text style={styles.text}>24 Hours Format</Text>
            </View>
            </TouchableOpacity>
            <View style={{padding:wp('5')}}>
              <Text style={styles.title}>About</Text>
            </View>
            <TouchableOpacity>
            <View style={{flexDirection:'row', paddingLeft:wp('5'),padding:hp('2%')}}>
            <View style={{paddingRight:wp('8%'),paddingLeft:wp('2%'),}}>
            <Image
                source={require('../../../../assets/share.png')}
                style={{height: 24, width: 20, alignSelf:'center',}}
                />
            </View>
              <Text style={styles.text}>Share with friends </Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{flexDirection:'row', paddingLeft:wp('5'),padding:hp('2%')}}>
            <View style={{paddingRight:wp('8%'),paddingLeft:wp('2%'),}}>
            <Image
                source={require('../../../../assets/rateus.png')}
                style={{height: 20, width: 21, alignSelf:'center',}}
                />
            </View>
              <Text style={styles.text}>Rate Us </Text>
              <View style={styles.arrow}>
                <Image
                source={require('../../../../assets/arrow.png')}
                style={{height: 7, width: 7, alignSelf:'center',alignSelf:'flex-end'}}
                />
              </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{flexDirection:'row', paddingLeft:wp('5'),padding:hp('2%'),}}>
            <View style={{paddingRight:wp('8%'),paddingLeft:wp('2%'),}}>
            <Image
                source={require('../../../../assets/feature.png')}
                style={{height: 18, width: 18, alignSelf:'center',}}
                />
            </View>
            <View style={{paddingRight:wp('5%')}}>
            <Text style={styles.text}>Suggest New Features </Text>
            </View>
              <View style={styles.arrow}>
                <Image
                source={require('../../../../assets/arrow.png')}
                style={{height: 7, width: 7, alignSelf:'center',alignSelf:'flex-end'}}
                />
              </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{flexDirection:'row', paddingLeft:wp('5'),padding:hp('2%')}}>
            <View style={{paddingRight:wp('8%'),paddingLeft:wp('2%'),}}>
            <Image
                source={require('../../../../assets/privacy.png')}
                style={{height: 21, width: 18, alignSelf:'center',}}
                />
            </View>
              <Text style={styles.text}>Privacy Policy </Text>
              <View style={styles.arrow}>
                <Image
                source={require('../../../../assets/arrow.png')}
                style={{height: 7, width: 7, alignSelf:'center',alignSelf:'flex-end'}}
                />
              </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={{flexDirection:'row', paddingLeft:wp('5'),padding:hp('2%')}}>
            <View style={{paddingRight:wp('8%'),paddingLeft:wp('2%'),}}>
            <Image
                source={require('../../../../assets/version.png')}
                style={{height: 18, width: 20, alignSelf:'center',}}
                />
            </View>
              <Text style={styles.text}>Version </Text>
            </View>
            </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      );
    }
export default Settings;