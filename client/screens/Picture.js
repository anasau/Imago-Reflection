import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenContainer } from "../components/HomeScreenContainer";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
} from "react-native";
import Colors from "../constants/Colors";

export default function Picture({ route }) {
  const navigation = useNavigation();
  const { input } = route.params;

  return (
    <HomeScreenContainer style={{ flex: 1 }}>
      <Image
        source={{ uri: input }}
        style={styles.imageStyle}
      />
      <TouchableHighlight
        style={styles.touchableHighlight}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={styles.textStyle}>
          Close view
        </Text>
      </TouchableHighlight>
    </HomeScreenContainer>
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
  },
  openButton: {
    backgroundColor: Colors.accent,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    position: "absolute",
    bottom: 30,
    right: 150,
  },
  textStyle: {
    color: Colors.primary,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  imageStyle: {
    height: "100%",
    width: "100%"
  },
  touchableHighlight: {
    backgroundColor: Colors.accent,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    position: "absolute",
    bottom: 30,
    right: 150,
    backgroundColor: Colors.accent
  }
});
