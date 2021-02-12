import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function Instruction({ children }) {
  return (
    <View style={{ width: "90%" }}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
  },
});
