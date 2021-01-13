import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

import Colors from '../constants/Colors'
export function SplashScreen() {
  return <View style={[styles.container, {backgroundColor:Colors.grey}]} >
    <Text> Splashhhh </Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:400, 
    right:160, 
    flex: 1,
    // alignContent:'flex-start', 

  },
});
