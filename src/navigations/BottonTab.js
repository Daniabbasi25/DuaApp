import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React,{useState} from 'react';
import {Text, TouchableOpacity, View,Image} from 'react-native';
import HomeScreen from '../screens/bottomTab/HomeScreen';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import PrayerTiming from '../screens/bottomTab/prayerTime';
import Favourite from '../screens/bottomTab/favourite';
import Setting from '../screens/bottomTab/setting';
import Profile from '../screens/bottomTab/profile/index';

// components

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const [isCalendar, setIsCalendar] = useState(false);
  const [isList, setIsList] = useState(false);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#A044FF"
      inactiveColor="#CBD5E1"
      screenOptions={{
        tabBarActiveTintColor: '#A044FF',
        tabBarShowLabel: false,
    
      }}

    //   barStyle={{

    //     showLabel: false,
    //     backgroundColor: 'white',
    //     shadowOffset: {
    //       width: 0,
    //       height: 12,
    //     },
    //     shadowOpacity: 1,
    //     shadowRadius: 16.0,
    //     elevation: 24,
    //     borderTopLeftRadius: 21,
    //     borderTopRightRadius: 21,
    //     backgroundColor: '#fff',
    //     position: 'absolute',
    //     bottom: 0,
    //     width: '100%',
    //     height: 30,
    //     zIndex: 0,
    //   }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarStyle: {
            height: 60,
          },

          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <View>

            <Image style={{color:color}} source={require('../../assets/bottomTab/Vector.png')} />
            <Text style={{color:color,textAlign:'center',fontSize:12,marginTop:5}}>Dua</Text>
            </View>
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Prayer Timing"
        options={{
          tabBarStyle: {
            height: 60,
          },

          headerShown: false,
          tabBarLabel: 'Prayer Timing',
          tabBarIcon: ({color}) => (
            <View>
            <Image style={{color:color,marginLeft:7}} source={require('../../assets/bottomTab/prayer.png')} />
            <Text style={{color:color,textAlign:'center',fontSize:12,marginTop:5}}>Prayer Timing</Text>
            </View>
          ),
        }}
        component={PrayerTiming}
      />
      <Tab.Screen
        name="Favourite"
        options={{
          tabBarStyle: {
            height: 60,
          },

          headerShown: false,
          tabBarLabel: 'Favorite',
          tabBarIcon: ({color}) => (
            <View>
              <Image style={{color:color,marginLeft:7}} source={require('../../assets/bottomTab/favourite.png')} />
              <Text style={{color:color,textAlign:'center',fontSize:12,marginTop:5}}>Favorite</Text>
            </View>
          ),
        }}
        component={Favourite}
      />
      <Tab.Screen
        name="Setting"
        options={{
          tabBarStyle: {
            height: 60,
          },
          // headerStyle: {
          //   height: 200, // Specify the height of your custom header
          // },

          headerShown: false,
          tabBarLabel: 'Setting',
          tabBarIcon: ({color}) => (
            <View>

            <Image style={{color:color,marginLeft:7}} source={require('../../assets/bottomTab/setting.png')} />
            <Text style={{color:color,textAlign:'center',fontSize:12,marginTop:5}}>Setting</Text>
            </View>
          ),

          
        }}
        component={Setting}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarStyle: {
            height: 60,
          },

          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <View>
              <Image style={{color:color,marginLeft:7}} source={require('../../assets/bottomTab/profile.png')} />
              <Text style={{color:color,textAlign:'center',fontSize:12,marginTop:5}}>Profile</Text>
            </View>
          ),
        }}
        component={Profile}
      />
      {/* <Tab.Screen
        name="Assignments"
        component={isCalendar ? CalendarScreen : List}
        options={props => {
          const {navigation, route} = props;
          return {
            headerShown: true,
            headerTitle: '',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="assignment" color={color} size={30} />
            ),
            headerLeft: () => (
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                All Assignments
              </Text>
            ),
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{marginRight: 10, padding: 7, borderRadius: 10}}
                  onPress={() => setIsCalendar(true)}>
                  <AntDesign name="calendar" size={30} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginRight: 10, padding: 7, borderRadius: 10}}
                  onPress={() => setIsCalendar(false)}>
                  <FontAwesome name="list" size={30} />
                </TouchableOpacity>
              </View>
            ),
          };
        }}
      />
      <Tab.Screen
        name="Messages"
        options={{
          headerShown: true,
          tabBarStyle: {
            height: 50,
          },
          tabBarIcon: ({color}) => (
            <MaterialIcons name="message" color={color} size={30} />
          ),
          // headerLeft: () => <Text style={{fontSize:20,color:'black',fontWeight:'bold',marginLeft:10}}>All Assignments</Text>,
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{marginRight: 10, padding: 7, borderRadius: 10}}
                onPress={() => setIsCalendar(true)}>
                <AntDesign name="search1" size={30} />
              </TouchableOpacity>
            </View>
          ),
        }}
        component={Message}
      />
      <Tab.Screen
        name="Profile"
        options={{
          headerShown:false,
          tabBarStyle: {
            height: 50,
          },

          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <FontAwesome name="user" color={color} size={30} />
          ),
        }}
        component={Profile}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;