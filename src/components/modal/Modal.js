import { View, Text,StyleSheet,Dimensions,TextInput,Modal,FlatList,Image,TouchableOpacity,Pressable} from 'react-native'
import React,{useState} from 'react';





const {width, height} = Dimensions.get('window');

const ModalView = () => {
    const [countries, setmyCountries] = useState([{}]);
    const [modalVisible, setModalVisible] = useState(false);
    const [isloading, setIsloading] = useState(true);
    const [search, setSearch] = useState();
    const [copyList, setCopyList] = useState();
  return (
    <View>
       <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>s
                <View>
                  <TextInput
                    placeholder="search Country"
                    style={styles.countrtyItem}
                    placeholderTextColor="#000"
                    // value={search}
                    // onChangeText={val => handleSearch(val)}
                  />
                </View>
                <FlatList
                  data={copyList}
                  renderItem={item => (
                    <TouchableOpacity
                      onPress={() => {
                        // dispatch(addCountry(item.item));
                        setModalVisible(false);
                      }}
                      >
                      <View style={styles.countrtyItem}>
                        <Image
                          source={require('../../../assets/usa.png')}
                          style={{width: 30, height: 30, borderRadius: 30}}
                        />
                        <Text style={styles.modalText}>This is new Modal</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                  style={{
                    height: height / 1.4,
                    width: width / 1.2,
                  }}
                />

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
    </View>
  )
}

export default ModalView




const styles = StyleSheet.create({
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
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
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
      marginTop: 15,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  
    countrtyItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: width / 1.2,
      // height: '30%',
      backgroundColor: 'rgba(203,193,219,0.2)',
      borderWidth: 1,
      borderColor: 'rgba(203,193,219,0.2)',
      paddingHorizontal: 30,
      paddingVertical: 5,
      marginBottom: 20,
    },
    modalText: {
      // backgroundColor: 'red',
      width: '70%',
      color: '#000',
      fontSize: 15,
    },
  });