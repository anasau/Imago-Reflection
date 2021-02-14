import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenContainer } from "../components/HomeScreenContainer";
import { styles } from './StyleSheets/PictureScreenStyleSheet'
import {
  Image,
  Text,
  TouchableHighlight,
} from "react-native";

export default function Picture({ route }) {
  const navigation = useNavigation();
  const { input } = route.params;

  return (
    <HomeScreenContainer
      style={{ flex: 1 }}>
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
