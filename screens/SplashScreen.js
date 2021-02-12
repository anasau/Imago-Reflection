import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import Colors from "../constants/Colors";

const widthPosition = Dimensions.get("window").width / 2;
const heightPosition = Dimensions.get("window").height / 2;

export function SplashScreen() {
  return (
    <View style={[styles.container, { backgroundColor: Colors.grey }]}>
      <ActivityIndicator size="small" color={Colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: heightPosition,
    right: widthPosition,
    flex: 1,
  },
});
