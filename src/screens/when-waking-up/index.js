import { View, Text, TouchableOpacity,Image } from "react-native";
import React from "react";
import AudioPlayer from "../../components/audioPlayer/AudioPlayer";
import Ionicons from "@expo/vector-icons/Entypo";
// import { DrawerActions } from '@react-navigation/native';
// onPress={() => navigation.dispatch(DrawerActions.openDrawer())}


const WhenWakeUp = ({navigation}) => {
  return (
    <>
      <View>
        <View style={{ flexDirection: "row", justifyContent:'space-around',marginTop:10,marginBottom:10}}>
         <TouchableOpacity  onPress={() =>navigation.openDrawer()} >

          <View >
            <Ionicons style={{textAlign:'center',padding:7,backgroundColor:'#FFFFFF', borderRadius:50,borderColor:'lightgray',borderWidth:1.5}
          } name="menu" size={25} />
          </View>
          </TouchableOpacity>
          <View >
            <Text style={{padding:5,borderBottomWidth:1.5,marginTop:7}}>All Dua's</Text>
          </View>
          <View >
           <Text style={{padding:5 ,marginTop:7}}>Benefits</Text>
          </View>
          <View >
            <Image style={{width:45,height:45, borderRadius:50,borderColor:'lightgray',borderWidth:1.5}} source={require('../../../assets/pic.jpeg')} />
          </View>
         
        </View>
      </View>


      {/* <AudioPlayer/> */}
    </>
  );
};

export default WhenWakeUp;
