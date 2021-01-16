import React, {useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {FilledButton} from '../components/FilledButton';
import {HomeScreenContainer} from '../components/HomeScreenContainer';
import {Instruction} from '../components/Instruction';
import Colors  from '../constants/Colors'
import {CompletedExercise} from '../components/CompletedExercise';
import { useNavigation } from '@react-navigation/native';
import {CountDown} from '../components/countdown'

export default function Exercise ({route}) {

  const {name, previousExercise, nextExercise} = route.params

  const navigation = useNavigation();
  
  function goBackOneStep() {
    navigation.goBack()
  }

  //Add insight and add picture buttons functions - add picture is wip 
  function openCamera() {
      navigation.navigate("Home");
  }
  
  function completeReflection () {
    navigation.navigate("Home");
  }
  function addInput() {
    navigation.navigate("Input",  {name:name,remainingTime:remainingTime} );
  }


//timer 
  const [remainingTime, updateRemainingTime]=useState(90);
  const [counterOn, updateCounterOn]=useState(false); 

  function count ()  {
    setInterval( () => updateRemainingTime(remaining => remaining -1), 1000*6)
    updateCounterOn(true)
  }

  function pauseCount () {
    clearInterval(count);
    updateCounterOn(false)
  }

  const instruction ='Before starting this exercise, set a timer. Check tips throughout the exercise or get in touch with the couch for guidance. Enjoy! '

  return (
  <HomeScreenContainer> 
    <CompletedExercise title ='Complete Reflection' onPress = {() => {completeReflection()}}/> 
    
    <Instruction> {instruction} </Instruction>
      <Image source={require('../assets/reflection.png')} style ={{width:150, height:150 }}/> 
    <View style = {styles.view}> 
      <FilledButton title='go back' style={styles.navButton} textStyle={styles.textStyle} onPress={() => goBackOneStep()}> </FilledButton>
      <CountDown remainingTime ={remainingTime} count={count}  pauseCount={pauseCount}/> 
      <FilledButton title='go to next exercise' style={styles.navButton} textStyle={{fontSize:12, color:'black'}} 
      onPress={() => goBackOneStep()}> </FilledButton>
    
    </View>
    <Text style = {styles.title} > {name} </Text>
      <FilledButton title='Add Insight' style={styles.inputButton} onPress={() => addInput()}> </FilledButton>
      <FilledButton title='Add Picture' style={styles.inputButton} onPress={() => openCamera()}> </FilledButton>
  </HomeScreenContainer>

  )
}


const styles = StyleSheet.create({
title: { 
  width: '90%', 
  textAlign:'center', 
  paddingVertical:10, 
  color:'black', 
  fontWeight:'bold', 
  fontSize:20

}, 
navButton: { 
  marginBottom:20,
  padding:0,  width:'30%'}, 

  textStyle: {fontSize:10, color:'black'}, 
  inputButton:{color:'black', backgroundColor: Colors.accent, width:'80%', height:20,  marginVertical:5, borderRadius:0, }, 
  view:{flexDirection:'row', justifyContent:'space-between', marginBottom:10}
})