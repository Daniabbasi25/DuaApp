import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react';

// import TrackPlayer from 'react-native-track-player';




const AudioPlayer = () => {


// useEffect(() =>{

//   // Creates the player
//   TrackPlayer.setupPlayer().then(async () => {

//     // Adds a track to the queue
//     await TrackPlayer.add({
//         id: 'trackId',
//         url: require('track.mp3'),
//         title: 'Track Title',
//         artist: 'Track Artist',
//         artwork: require('track.png')
//     });

//     // Starts playing it
//     TrackPlayer.play();

// });
// },[])



  return (
    <View style={{flexDirection:'row'}}>
      <View>
        <Text>Muhammad </Text>
      </View>
      <TouchableOpacity ><Text>AudioPlayer</Text></TouchableOpacity>
    </View>
  )
}

export default AudioPlayer