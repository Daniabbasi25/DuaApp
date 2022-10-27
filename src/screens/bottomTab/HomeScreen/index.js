import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";

import {styles} from '../HomeScreen/styles'
import Header from "../../../components/Header";

const data = [
  {
    category:'older',
    category:'Little',
    title: " Importance of Allah",
    image: require("../../../../assets/little-kids/imp.png"),
  },
  {
    category:'grown',
    category:'Little',
    title: "wake Up ",
    image: require("../../../../assets/little-kids/wakeup.png"),
  },
  {
    category:'Little',
    title: "Wakes Up During Sleep",
    image: require("../../../../assets/little-kids/wakeUpDuringSleep.png"),
  },
  {
    category:'grown',
    category:'Little',
    title: "Can’t get to sleep at night",
    image: require("../../../../assets/little-kids/cantGetToSleep.png"),
  },
  {
    category:'Little',
    title: " Waking up with fear or bad dream",
    image: require("../../../../assets/little-kids/badDream.png"),
  },
  {
    category:'older',
    title: " Dreaming Up",
    image: require("../../../../assets/little-kids/puttingOn.png"),
  },
  {
    category:'older',
    title: " Putting on new cloths",
    image: require("../../../../assets/little-kids/wearNewDress.png"),
  },
  {
    category:'grown',
    category:'older',
    title: " When someone wears new dress",
    image: require("../../../../assets/little-kids/takeOff.png"),
  },
  {
    category:'older',
    title: "Taking off Dress",
    image: require("../../../../assets/little-kids/goingWashroom.png"),
  },
  {
    category:'older',
    title: "Going to Toilet",
    image: require("../../../../assets/little-kids/comingFrom.png"),
  },
  {
    category:'grown',
    title: "Coming out of Toilet",
    image: require("../../../../assets/little-kids/brushteeth.png"),
  },
  {
    category:'grown',
    title: "Miswak or Brushing Teeth",
    image: require("../../../../assets/little-kids/brushteeth.png"),
  },
];

const HomeScreen = ({navigation}) => {
  const [filter,setFilter] = useState(data)

  const LittleKids = () =>{
    const little = data.filter((item) => item.category == 'Little');
    setFilter(little)

  }
  const olderKids = () =>{
    const older = data.filter((item) => item.category == 'older');
    setFilter(older)
  }
  const GrownKids = () =>{
    const Grown = data.filter((item) => item.category == 'grown');
    setFilter(Grown)
  }
  

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      {/* <Image source={require('../../../assets/L1.png')}/> */}
      <Header />
      <View style={styles.buttonView}>
        <TouchableOpacity onPress={LittleKids}>
          <Text style={styles.activeButton}>Little Kids</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={olderKids}>
          <Text style={styles.inactiveButton}>Older Kids</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={GrownKids}>
          <Text style={styles.inactiveButton}>Grown Up’s</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ margin: 5 }}>
        <FlatList
          data={filter}
          numColumns={3}
          renderItem={({ item, index, separators }) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('AllDua')}
              // onShowUnderlay={separators.highlight}
              // onHideUnderlay={separators.unhighlight}
              style={{ padding: 10,}}
            >
              <View
                style={{
                  width: 105,
                  height: 120,
                  borderColor: "#C4C4C4",
                  borderWidth: 1,
                  borderRadius:10,
                }}
              >
                <View
                  style={{
                    width: 105,
                    height: 105,
                    // backgroundColor: "red",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{ width: 45, height: 48, backgroundColor: "green" }}
                  >
                    <Image
                      source={item.image}
                    />
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 10,
                    position: "absolute",
                    marginTop: 85,
                    // marginLeft: 5,
                    // backgroundColor:'green',
                    width:'100%',
                    textAlign:'center'
                  }}
                >
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
