import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from "@expo/vector-icons/AntDesign";

const  Controller = ({onNext, onPrv}) => {
 

  return (
    <View style={styles.container}>
      <TouchableOpacity >
        <AntDesign color="black" name="backward" size={45} />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign color="black" name="caretright" size={45} />
      </TouchableOpacity>
      <TouchableOpacity >
        <AntDesign color="black" name="forward" size={45} />
      </TouchableOpacity>
    </View>
  );
}

export default  Controller;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 250,
  },
});