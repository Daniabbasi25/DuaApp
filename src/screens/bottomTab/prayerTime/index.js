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

// import { styles } from "../../../screens/bottomTab/prayerTime/styles";
// import Header from "../../../components/Header";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const data = [
  {
    title: "Fajar",
    time: "05:14",
  },
  {
    title: "Sunrise",
    time: "06:30",
  },
  {
    title: "Duhur",
    time: "12:30",
  },
  {
    title: "Asr",
    time: "15:18",
  },
  {
    title: "Magrib",
    time: "18:18",
  },
  {
    title: "Isha’a",
    time: "19:36",
  },
];

const Header = () => {
  return (
    <ImageBackground
      source={require("../../../../assets/prayerheader.png")}
      resizeMode="stretch"
      style={{ height: hp("21%") }}
    >
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 12,
            padding: 10,
            marginLeft: 30,
          }}
        >
          Time Zone :
        </Text>
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 12,
            padding: 10,
          }}
        >
          Multan Islamic University Karachi Pakistan
        </Text>
      </View>
      <View style={{ flexDirection: "row", textAlign: "center" }}>
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 12,
            padding: 10,
            marginLeft: 120,
          }}
        >
          Sunrise Remaining Time
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignContent: "center" }}>
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 12,
            padding: 10,
            marginLeft: 150,
          }}
        >
          -00:11:31
        </Text>
      </View>
    </ImageBackground>
  );
};

const PrayerTiming = () => {

  const [isActive, setIsActive] = useState(false);

  // const handleClick = () => {
  //   // 👇️ toggle
  //   setIsActive(current => !current);

  //   // 👇️ or set to true
  //   // setIsActive(true);
  // };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      {/* <Image source={require('../../../assets/L1.png')}/> */}
      <Header />
      <View
        style={{
          // backgroundColor: "red",
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 6,
        }}
      >
        <View style={{ flexDirection: "row", marginVertical: 15,marginHorizontal:7 }}>
         <TouchableOpacity>

          <SimpleLineIcons
            style={{ marginTop: 19 }}
            name="arrow-left"
            size={15}
            />
            </TouchableOpacity>
          <View style={{ marginLeft: 15, marginTop: 5 }}>
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>Friday</Text>
            <Text style={{ fontSize: 15 }}>04 March 2022</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 15 ,marginHorizontal:7 }}>
          <View style={{ marginRight: 15, marginTop: 5 }}>
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
              Islamic Date
            </Text>
            <Text style={{ fontSize: 13 }}>01 Shaban 1443 AD (-1) Day</Text>
          </View>
          <TouchableOpacity>

          <SimpleLineIcons
            style={{ marginTop: 19 }}
            name="arrow-right"
            size={15}
            />
            </TouchableOpacity>
        </View>
      </View>

      <View>
        <FlatList
          style={{ margin: 10 }}
          data={data}
          // numColumns={3}
          renderItem={({ item, index, separators }) => (
            <View
              style={{
                width: wp("90%"),
                height: hp("8%"),
                borderColor: "#C4C4C4",
                borderBottomWidth: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  alignSelf: "center",
                  marginHorizontal: 10,
                }}
              >
                {item.title}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginHorizontal: 10,
                  alignItems: "center",
                }}
              >
                <Text style={{ marginHorizontal: 15 }}>{item.time}</Text>
                <TouchableOpacity>
                <FontAwesome name="bell" size={25} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default PrayerTiming;
