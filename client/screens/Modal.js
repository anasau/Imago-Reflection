import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenContainer } from "../components/HomeScreenContainer";
import Colors from "../constants/Colors";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

export default function ModalScreen({ route }) {
  const navigation = useNavigation();
  const { input } = route.params;

  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        multiline
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text multiline style={styles.modalText}>
              {input}
            </Text>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: Colors.accent }}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text style={styles.textStyle}>Close view</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    flex: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#eee",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    minHeight: 600,
    height:'95%',
    width: "90%",
  },
  openButton: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
