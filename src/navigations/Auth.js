import { View, Text, Image } from "react-native";
import React from "react";

import Ionicons from "@expo/vector-icons/Feather";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/SplashScreen";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";



const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator screenOptions={
        {headerShown:false,}
    } initialRouteName="Splash">
      {/*  SplashScreen */}
      <Stack.Screen
        name="Splash"
        options={{
          headerShown: false,
        }}
        component={Splash}
      />
      {/*   Login  */}
      <Stack.Screen
        name="login"
       
        component={Login}
      />
      {/*   Login  */}
      <Stack.Screen
        name="signup"
       
        component={SignUp}
      />
      {/*  When Wake up */}
      {/* <Stack.Screen
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
      /> */}
      {/* <Stack.Screen
        name="Premium"
        options={{
          headerStyle: {
            backgroundColor:
              "linear-gradient(180deg, #4E54C8 0%, #A044FF 100%)",
          },
          headerTintColor: "#fff",

          // headerLeft: () => <Ionicons name="sun" size={25} color="#fff" />,
          headerTitle: "Premium ",
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
        component={Premium}
      /> */}
      {/* <Stack.Screen
        name="Flags"
        options={{
          headerStyle: {
            backgroundColor:
              "linear-gradient(180deg, #4E54C8 0%, #A044FF 100%)",
          },
          headerTintColor: "#fff",

          // headerLeft: () => <Ionicons name="sun" size={25} color="#fff" />,
          headerTitle: "Flags ",
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
        component={Flags}
      /> */}

      {/* BottomTabNavigator */}
      {/* <Stack.Screen
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
      /> */}
    </Stack.Navigator>
  );
};

export default Auth;
