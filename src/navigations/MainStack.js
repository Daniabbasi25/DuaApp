import { View, Text, Image } from "react-native";
import React from "react";

import Ionicons from "@expo/vector-icons/Feather";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/bottomTab/HomeScreen";
import Splash from "../screens/SplashScreen";
import SvgComponent from "../screens/SplashScreen";
import BottomTabNavigator from "./BottonTab";
import AllDua from "../screens/allDua";
import WhenWakeUp from "../screens/when-waking-up";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      {/*  SplashScreen */}
      <Stack.Screen
        name="Splash"
        options={{
          headerShown: false,
        }}
        component={Splash}
      />
     

    
      {/*  All Dua */}
      <Stack.Screen
        name="AllDua"
        options={{
          headerStyle: {
            backgroundColor:
              "linear-gradient(180deg, #4E54C8 0%, #A044FF 100%)",
          },
          headerTintColor: "#fff",

          // headerLeft: () => <Ionicons name="sun" size={25} color="#fff" />,
          headerTitle: "When Waking up ",
          headerRight: () => (
            <>
              <Image
                style={{
                  backgroundColor: "white",
                  borderRadius: 50,
                  marginBottom: 5,
                }}
                source={require("../../assets/usa.png")}
              />
              <Text style={{ color: "#fff", fontSize: 15, marginBottom: 5 }}>
                English
              </Text>
              <Ionicons name="chevron-down" size={25} color="#fff" />
            </>
          ),
        }}
        component={AllDua}
      />



      {/*  When Wake up */}
      <Stack.Screen
        name="WhenWakeUp"
        options={{
          headerStyle: {
            backgroundColor:
              "linear-gradient(180deg, #4E54C8 0%, #A044FF 100%)",
          },
          headerTintColor: "#fff",

          // headerLeft: () => <Ionicons name="sun" size={25} color="#fff" />,
          headerTitle: "When Waking up ",
          headerRight: () => (
            <>
              <Image
                style={{
                  backgroundColor: "white",
                  borderRadius: 50,
                  marginBottom: 5,
                }}
                source={require("../../assets/usa.png")}
              />
              <Text style={{ color: "#fff", fontSize: 15, marginBottom: 5 }}>
                English
              </Text>
              <Ionicons name="chevron-down" size={25} color="#fff" />
            </>
          ),
        }}
        component={WhenWakeUp}
      />

      {/* BottomTabNavigator */}
      <Stack.Screen
        name="Bottom"
        component={BottomTabNavigator}
        options={{
          headerStyle: {
            backgroundColor:
              "linear-gradient(180deg, #4E54C8 0%, #A044FF 100%)",
          },

          headerLeft: () => <Ionicons name="sun" size={25} color="#fff" />,
          headerTitle: " ",
          headerRight: () => (
            <>
              <Image
                style={{
                  backgroundColor: "white",
                  borderRadius: 50,
                  marginBottom: 5,
                }}
                source={require("../../assets/usa.png")}
              />
              <Text style={{ color: "#fff", fontSize: 15, marginBottom: 5 }}>
                English
              </Text>
              <Ionicons name="chevron-down" size={25} color="#fff" />
            </>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
