import * as React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
//import { RadioButton } from "react-native-paper";
import styles from "./styles";
const { width, height } = Dimensions.get("window");
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const languages = [
  {
    id: 1,
    name: "Arabic ",
    image: require("../../../assets/arabic.png"),
  },
  {
    id: 2,
    name: "English(US)",
    image: require("../../../assets/US.png"),
  },
];
var radio_props = [
    {label: 'param1', value: 0 },
    {label: 'param2', value: 1 }
  ];
   
const Flags = () => {
  const [value, setValue] = React.useState();
  return (
    <View style={styles.container}>
      <FlatList
        data={languages}
        renderItem={({ item }) => {
          // console.log(item.id);
          //console.log(item.position);
          return (
            <View
              key={item.id}
              style={{
                width: width,
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <View style={styles.card}>
                <View style={styles.flag}>
                  <Image
                    source={item.image}
                    style={{ width: 30, height: 30, borderRadius: 30 }}
                  />
                </View>

                <Text style={styles.text}>{item.name}</Text>
                <View style={{ top: 25 }}>
                  <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    onPress={(value) => {
                      setValue({ value: value });
                    }}
                  />
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
export default Flags;
