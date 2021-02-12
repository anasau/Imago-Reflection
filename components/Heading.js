import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";
export function Heading({ children, style, ...props }) {
  return (
    <Text {...props} style={[styles.text, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    marginBottom: 20,
    fontSize: 20,
    textAlign: "center",
    color: Colors.primary,
  },
});
