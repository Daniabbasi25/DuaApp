import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import Auth from './Auth';

const AppRout = () => {
  return (
   <NavigationContainer>
   
    {/* <Auth /> */}
    <MainStack />

   </NavigationContainer>
  )
}

export default AppRout