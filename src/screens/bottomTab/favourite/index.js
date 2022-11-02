import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image, TextInput,ScrollView} from 'react-native';
//import { Dropdown } from 'react-native-material-dropdown';
//import Modal from 'react-native-modal';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const {width,height}=Dimensions.get('window');
import styles from './styles.js';
const languages = [
  {
    "name": "For Faith",
    // "image":require("../../assets/mishari.png"), 
  },
  {
    "name": "When Waking Up",
    // "image":require("../../assets/mishari.png"), 
  },
  {
      "name": "For Forgiveness",
      // "image":require("../../assets/taniji.png"), 
  },
  {
      "name": "For Seeking Good",
      // "image":require("../../assets/abdurrehman.png"), 
  }, 
  {
    "name": "For Heaven",
    // "image":require("../../assets/mishari.png"), 
  },
  {
    "name": "For Steadfastness",
    // "image":require("../../assets/mishari.png"), 
  },{
    "name": "For Decisions",
    // "image":require("../../assets/mishari.png"), 
  },
  {
    "name": "For Protection",
  },
  {
    "name": "For Light",
  },
  

]; 
const Favourite=()=>{
  const [checked, setChecked] = React.useState('');
      return (
        
        <View style={styles.container}>
          
          <FlatList
          //horizontal
          //showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          //numColumns={'2'}
          data={languages}
          renderItem={({item})=>{
            return (
              
              <View style={{justifyContent:'center', padding:wp('2%'), }}>
                    <View style={styles.card}>
                        <View style={styles.flag}>
                        {/* <Image source={item.image}  style={{width:60, height:60,borderRadius:30,}}/> */}
                        </View>
                        <View style={{justifyContent:'center', flexDirection:'row', }}>
                          <View style={{ width:wp('50%')}}>
                          <Text style={styles.text}>{item.name}</Text>
                          </View>
                          <View style={{padding:wp('5%'), flexDirection:'row'}}>
                          <TouchableOpacity>
                          <AntDesign  name="checksquare" size={15} color="#A044FF" style={styles.share}  />
                          </TouchableOpacity>
                          <TouchableOpacity>
                          <EvilIcons name="share-google" size={18} color="#A044FF"  style={styles.share} />
                          </TouchableOpacity>
                          <TouchableOpacity>
                          <AntDesign  name="heart" size={15} color="#A044FF"   style={styles.share}/>
                          </TouchableOpacity>
                          <TouchableOpacity>
                          <AntDesign  name="down" size={15} color="#0F0702" style={styles.share} />
                          </TouchableOpacity>
                          </View>

                        </View>
                    </View>
              </View>
            ); 
          }}
          />
        </View>
            
         
      );
    }
export default Favourite;