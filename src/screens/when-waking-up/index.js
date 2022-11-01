import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
  Modal,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  ImageBackground
} from "react-native";
import React, { useState } from "react";
// import AudioPlayer from "../../components/audioPlayer/AudioPlayer";
import Ionicons from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AudioPlayer from '../../components/audioPlayer/AudioPlayer'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const { width, height } = Dimensions.get("window");

const WhenWakeUp = ({ navigation }) => {
  const [countries, setmyCountries] = useState([{}]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isloading, setIsloading] = useState(true);
  const [search, setSearch] = useState();
  const [copyList, setCopyList] = useState();

  const [color,setColor] = useState({color:'black'})

  return (
    <View 
    style={{
      backgroundColor:'#fff'
    }}>
      {/* .......................................................................... */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 10,
          marginBottom: 10,
          backgroundColor:'#fff'
        }}
      >
        <TouchableOpacity style={{ marginTop: 5 }} > 
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 50,
              borderColor: "lightgray",
              borderWidth: 1.5,
              padding: 5,
            }}
          >
            <Ionicons name="menu" size={25} />
          </View>
        </TouchableOpacity>
        <View>
          <Text style={{ padding: 5, borderBottomWidth: 1.5, marginTop: 7 }}>
            All Dua's
          </Text>
        </View>
        <View>
          <Text style={{ padding: 5, marginTop: 7 }}>Benefits</Text>
        </View>
        <View>
          <Image
            style={{
              width: wp("11%"),
              height: hp("6%"),
              borderRadius: 50,
              borderColor: "lightgray",
              borderWidth: 1.5,
            }}
            source={require("../../../assets/pic.jpeg")}
          />
        </View>
      </View>
      {/* ......................Card........................................ */}
      <ImageBackground source={require("../../../assets/little-kids/dreamingUp.png")} style={{height: hp('66%')}}>
        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 5,
            shadowColor: "#000",
            shadowOffset: {
              width: wp("0%"),
              height: hp("1%"),
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,

            elevation: 2,
            marginBottom: 5,
            backgroundColor: "#ffff",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              padding: 3,

              // borderBottomWidth: 1,
              // borderBottomColor: "#C4C4C4",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity>
                <View
                  style={{
                    padding: 5,
                  }}
                >
                  <MaterialCommunityIcons
                    name="cards-heart-outline"
                    size={25}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    padding: 5,
                  }}
                >
                  <AntDesign name="sharealt" size={25} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* .............Arabic............ */}
          <View
            style={{
              flexDirection: "row",
              padding: 7,
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderBottomColor: "#C4C4C4",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{ borderRightWidth: 2, borderRightColor: "#FFD27B" }}
              >
                <View
                  style={{
                    padding: 5,
                  }}
                >
                  <Entypo name="controller-play" size={25} />
                </View>
              </TouchableOpacity>
              <View>
                <Text
                  style={{
                    padding: 5,
                  }}
                >
                  Arabic
                </Text>
              </View>
            </View>
            <View>
              <Text style={{ marginTop: 6 }}>
                اَلْحَمْدُلِلّٰہِ الَّذِیْ اَحْیَانَا بَعْدَ مَااَمَاتَنَا
                وَاِلَیْہِ النُّشُوْرُ
              </Text>
            </View>
          </View>
          {/* End Aracbic */}
          <View
            style={{
              flexDirection: "row",
              padding: 5,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#A044FF",
                  marginRight: 5,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ color: "#fff", textAlign: "center", padding: 5 }}
                >
                  Transliteration
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: wp("60%") }}>
              <Text>
                Alhamdulillahilladzi ahyana ba’dama amatana wa ilaihin nushur
              </Text>
            </View>
          </View>
          {/* ................. */}
          <View
            style={{
              flexDirection: "row",
              padding: 5,
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderBottomColor: "#C4C4C4",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{ borderRightWidth: 2, borderRightColor: "#FFD27B" }}
              >
                <View
                  style={{
                    padding: 5,
                  }}
                >
                  <Entypo name="controller-play" size={25} />
                </View>
              </TouchableOpacity>
              <View>
                <Text
                  style={{
                    padding: 5,
                  }}
                >
                  English
                </Text>
              </View>
            </View>
            <View style={{ width: wp("60%") }}>
              <Text>
                شکر ہے اللہ کا جس نے ہمیں موت کے بعد زندہ کیا اور اسی کی طرف
                جانا ہے.
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 5,
            shadowColor: "#000",
            shadowOffset: {
              width: wp("0%"),
              height: hp("1%"),
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,

            elevation: 2,
            marginBottom: 5,
            backgroundColor: "#ffff",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              padding: 3,

              // borderBottomWidth: 1,
              // borderBottomColor: "#C4C4C4",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity>
                <View
                  style={{
                    padding: 5,
                  }}
                >
                  <MaterialCommunityIcons
                    name="cards-heart-outline"
                    size={25}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    padding: 5,
                  }}
                >
                  <AntDesign name="sharealt" size={25} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* .............Arabic............ */}
          <View
            style={{
              flexDirection: "row",
              padding: 7,
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderBottomColor: "#C4C4C4",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{ borderRightWidth: 2, borderRightColor: "#FFD27B" }}
              >
                <View
                  style={{
                    padding: 5,
                  }}
                >
                  <Entypo name="controller-play" size={25} />
                </View>
              </TouchableOpacity>
              <View>
                <Text
                  style={{
                    padding: 5,
                  }}
                >
                  Arabic
                </Text>
              </View>
            </View>
            <View>
              <Text style={{ marginTop: 6 }}>
                اَلْحَمْدُلِلّٰہِ الَّذِیْ اَحْیَانَا بَعْدَ مَااَمَاتَنَا
                وَاِلَیْہِ النُّشُوْرُ
              </Text>
            </View>
          </View>
          {/* End Aracbic */}
          <View
            style={{
              flexDirection: "row",
              padding: 5,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#A044FF",
                  marginRight: 5,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ color: "#fff", textAlign: "center", padding: 5 }}
                >
                  Transliteration
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: wp("60%") }}>
              <Text>
                Alhamdulillahilladzi ahyana ba’dama amatana wa ilaihin nushur
              </Text>
            </View>
          </View>
          {/* ................. */}
          <View
            style={{
              flexDirection: "row",
              padding: 5,
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderBottomColor: "#C4C4C4",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{ borderRightWidth: 2, borderRightColor: "#FFD27B" }}
              >
                <View
                  style={{
                    padding: 5,
                  }}
                >
                  <Entypo name="controller-play" size={25} />
                </View>
              </TouchableOpacity>
              <View>
                <Text
                  style={{
                    padding: 5,
                  }}
                >
                  English
                </Text>
              </View>
            </View>
            <View style={{ width: wp("60%") }}>
              <Text>
                شکر ہے اللہ کا جس نے ہمیں موت کے بعد زندہ کیا اور اسی کی طرف
                جانا ہے.
              </Text>
            </View>
          </View>
        </View>
      

      {/* ................End Card...................................... */}
      </ImageBackground>
      <AudioPlayer />
    </View>
  );
};

export default WhenWakeUp;

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: wp("0%"),
      height: hp("2%"),
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    marginTop: 15,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  countrtyItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: width / 1.2,
    // height: '30%',
    backgroundColor: "rgba(203,193,219,0.2)",
    borderWidth: 1,
    borderColor: "rgba(203,193,219,0.2)",
    paddingHorizontal: 30,
    paddingVertical: 5,
    marginBottom: 20,
  },
  modalText: {
    // backgroundColor: 'red',
    width: wp("70%"),
    color: "#000",
    fontSize: 15,
  },
});
