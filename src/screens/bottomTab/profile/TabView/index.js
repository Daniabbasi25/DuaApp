import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View,Text,  StyleSheet, Dimensions, StatusBar,Button,TextInput, TouchableOpacity,ScrollView, Image } from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
const {width,height}=Dimensions.get('window');
import styles from './styles.js';


   

const FirstRoute = () => (
    <View style={{height:height}}>
      <View style={styles.card}>
        <Text style={styles.text}>Listen 5 Dua</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.caption}>Everyday listen 10 Duas</Text>
        </View>
      </View>
    </View>
);

const SecondRoute = () => (
  <View style={{height:height}}>
      <View style={styles.card}>
        <Text style={styles.text2}>One Certificate</Text>
        <Text style={styles.caption}>100</Text>
        
      </View>
  </View>
);

const ThirdRoute = () => (
  <View style={{height:height,width:width, alignContent:'center',}}>
           <View style={{}}>
            <View style={styles.view}>
            
                <View style={{flexDirection:'row'}}>
                <View style={{padding:wp('2%')}}>
                {/* <Image
                style={styles.image}
                source={require('../../../assets/email.png')}
                /> */}
                </View>
                <Text style={styles.text3}>Nick Name</Text>
                </View>
            
            <View style= {{flexDirection:'row'}}>
                <TextInput
                style={styles.input}
                />
                
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{padding:wp('2%')}}>
                {/* <Image
                style={styles.image}
                source={require('../../../assets/email.png')}
                /> */}
                </View>
                <Text style={styles.text3}>Email</Text>
                </View>
            
            <View style= {{flexDirection:'row'}}>
                <TextInput
                style={styles.input}
                />
               
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{padding:wp('2%')}}>
                {/* <Image
                style={styles.image}
                source={require('../../../assets/email.png')}
                /> */}
                </View>
                <Text style={styles.text3}>Password</Text>
                </View>
            
            <View style= {{flexDirection:'row'}}>
                <TextInput
                style={styles.input}
                />
            </View>
            <View style={{alignSelf:'center',paddingTop:hp('5%')}}>
                        <TouchableOpacity
                        style={styles.button}>
                            <Text style={styles.buttontxt}>Update</Text>
                        </TouchableOpacity>
            </View>
            </View>

        </View>

  </View>
);


const initialLayout = { width: Dimensions.get('window').width, };

const renderScene = SceneMap({
  task: FirstRoute,
  reward: SecondRoute,
  account:ThirdRoute
});

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'task', title: 'task' },
    { key: 'reward', title: 'reward' },
    { key: 'account', title: 'account' },
  ]);

  return (
    <TabView
    renderLabel={({ focused, route }) => {
      return (
        <TextView
          size={20}
          category="Medium"
          color={focused ? 'RED' : 'GRAY3'}>
          {route.title}
        </TextView>
        );
        }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}
      renderTabBar={props => <TabBar {...props} style={styles.tabBar} indicatorStyle={{backgroundColor:'#A044FF', padding:1, }}/>}
    />
  );
}
  

