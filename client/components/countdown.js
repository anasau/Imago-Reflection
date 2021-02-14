import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ImageComponent } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function CountDown(props) {
  const remainingTime = props.remainingTime;

  return (
    <View>
      <Text style={styles.text}> {props.remainingTime}' </Text>
      <View style={{ flexDirection: "row" }}>
        <Ionicons name="ios-play-back-circle-outline" size={24} color="black" />
        {props.counterOn ? (
          <Ionicons
            name="pause-circle-outline"
            size={24}
            color="black"
            onPress={() => props.pauseCount()}
          />
        ) : (
            <Ionicons
              name="play-circle-outline"
              size={24}
              color="black"
              onPress={() => props.count()}
            />
          )}
        <Ionicons
          name="ios-play-forward-circle-outline"
          size={24}
          color="black"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    width: "95%",
    marginVertical: 20,
    fontSize: 25,
    textAlign: "center",
    elevation: 20,
    borderRadius: 50,
    padding: 5,
    color: "grey",
  },
});
