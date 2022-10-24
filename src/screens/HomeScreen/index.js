import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

import { styles } from './styles'
import Header from '../../components/Header';

const HomeScreen = () => {
  return (
    <View style={{backgroundColor:'#fff',flex:1}}>
      {/* <Image source={require('../../../assets/header.png')}/> */}
    <Header />
    <View style={styles.buttonView}>
      <TouchableOpacity>
        <Text style={styles.inactiveButton}>Little Kids</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.inactiveButton}>Older Kids</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.activeButton}>Grown Up’s</Text>
      </TouchableOpacity>
    </View>
    {/* flatlist component */}
    <View>

    <View>
      <Image source={require('../../../assets/L1.png')}/>
      <Text>
      Importance of Allah 
      </Text>
    </View>
    </View>
    </View>
  )
}

export default HomeScreen