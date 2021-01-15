import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export function CountDown (props) { 
  


  return(

    <View> 
      <Text style={styles.text}> {props.remainingTime }' </Text>
      <View  style={{flexDirection:'row'}}> 
        <Ionicons name="ios-play-back-circle-outline" size={24} color="black" />
          <Ionicons name= "play-circle-outline" size={24} color="black"  onPress = {() => props.count()}/>
        <Ionicons name= "ios-play-forward-circle-outline" size={24} color="black" /> 
      </View>
    </View>
 

  );
}

const styles = StyleSheet.create({
  text:{
    width:'95%', 
    marginVertical:20,
    fontSize:30, 

  }
})