import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Feather';
import HomeScreen from '../screens/HomeScreen';
const Stack = createNativeStackNavigator();


const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home' >
         <Stack.Screen name="Home" component={HomeScreen} options={{headerStyle:{
            backgroundColor:'linear-gradient(180deg, #4E54C8 0%, #A044FF 100%)'
         },

         headerLeft:()=>(
            <Ionicons name="sun" size={25} color="#fff" />
         ),
         headerTitle:"",
         headerRight:()=>(<>
         <Text style={{color:'#fff'}}>English</Text>
            <Ionicons name="chevron-down" size={25} color="#fff" />
         </>
         ),
         
        
        
         }}/>
    </Stack.Navigator>
  )
}

export default MainStack