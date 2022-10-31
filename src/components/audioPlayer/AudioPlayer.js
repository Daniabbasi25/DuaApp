import React, { useRef, useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  FlatList,
  Dimensions,
  Animated,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const { width, height } = Dimensions.get("window");
// import TrackPlayer from "react-native-track-player";

import Slider from "@react-native-community/slider";


// import TrackPlayer,{Event,Capability,RepeatMode,State,usePlaybackState,useProgress,useTrackPlayerEvents } from 'react-native-track-player';




const songs = [
  {
    title: "death bed",
    artist: "Powfu",
    artwork: require("../../../assets/little-kids/goingWashroom.png"),
    url: "https://sample-music.netlify.app/death%20bed.mp3",
    duration: 2 * 60 + 53,
    id: 1,
  },
  {
    title: "bad liar",
    artist: "Imagine Dragons",
    artwork: require("../../../assets/little-kids/dreamingUp.png"),
    url: "https://sample-music.netlify.app/Bad%20Liar.mp3",
    duration: 2 * 60,
    id: 2,
  },
  {
    title: "faded",
    artist: "Alan Walker",
    artwork: require("../../../assets/little-kids/comingFrom.png"),
    url: "https://sample-music.netlify.app/Faded.mp3",
    duration: 2 * 60,
    id: 3,
  },
  {
    title: "hate me",
    artist: "Ellie Goulding",
    artwork: require("../../../assets/little-kids/badDream.png"),
    url: "https://sample-music.netlify.app/Hate%20Me.mp3",
    duration: 2 * 60,
    id: 4,
  },
  {
    title: "Solo",
    artist: "Clean Bandit",
    artwork: require("../../../assets/little-kids/brushteeth.png"),
    url: "https://sample-music.netlify.app/Solo.mp3",
    duration: 2 * 60,
    id: 5,
  },
  {
    title: "without me",
    artist: "Halsey",
    artwork: require("../../../assets/little-kids/cantGetToSleep.png"),
    url: "https://sample-music.netlify.app/Without%20Me.mp3",
    duration: 2 * 60,
    id: 6,
  },
];


// const setupPlayer = async() => {
// console.log('I am SetUp ');
//  await TrackPlayer.setupPlayer();
//  await TrackPlayer.add(songs);

// }

// const togglePlayback = async(playbackState) => {
// const  currentTrack = await TrackPlayer.getCurrentTrack();
//  if(currentTrack != null){
//    if(playbackState === State.Paused){
//      await TrackPlayer.play();
//      console.log('Track is Playing ');
//    }
//    else{
//      TrackPlayer.pause 
//    }

//  }
// }

const AudioPlayer = () => {

  // const playbackState = usePlaybackState();

  // useEffect(() => {
  //   setupPlayer();
  // },[])

  return (
    <ScrollView>
    <View 
      style={{
        backgroundColor: "#ffff",
        paddingVertical:15
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Slider
          style={{ width: wp("100%"), height: hp("4%") }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="blue"
          maximumTrackTintColor="#000000"
        />
      </View>
      {/* .............Arabic............ */}

      {/* ............................Player.............. */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
         
        }}
      >
        <View
          style={{
            flexDirection: "row",
            // backgroundColor: "red",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={{marginHorizontal:5}}>
            <View style={{ padding: 7 }}>
              <FontAwesome5 name="book-open" size={25} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal:5}}>
            <View style={{ padding: 7 }}>
              <AntDesign name="stepbackward" size={25} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal:5}}>
            <View style={{ padding: 7 }}>
              <AntDesign name="banckward" size={25} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal:5}} >
            <View style={{ padding: 7 }}>
              <AntDesign name="playcircleo" size={40} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal:5}}>
            <View style={{ padding: 7 }}>
              <AntDesign name="forward" size={25} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal:5}}>
            <View style={{ padding: 7 }}>
              <AntDesign name="stepforward" size={25} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{marginHorizontal:5}}>
            <View style={{ padding: 7 }}>
              <Fontisto name="headphone" size={35} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* End Aracbic */}

      {/* ................. */}
    </View>
    </ScrollView>
  );
};

export default AudioPlayer;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "600",
    textTransform: "capitalize",
    color: "#ffffff",
  },
  artist: {
    fontSize: 18,
    textAlign: "center",
    color: "#ffffff",
    textTransform: "capitalize",
  },
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    // height: height,
    // maxHeight: 600,
  },
});
