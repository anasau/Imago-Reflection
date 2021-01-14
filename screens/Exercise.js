import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Heading} from '../components/Heading';
import {ImageComponent} from '../components/ImageComponent'
import {FilledButton} from '../components/FilledButton';
import {IconButton} from '../components/IconButton';
import {HomeScreenContainer} from '../components/HomeScreenContainer';
import {Instruction} from '../components/Instruction';
import Colors  from '../constants/Colors'
import {CompletedExercise} from '../components/CompletedExercise';
import { useNavigation } from '@react-navigation/native';
import {CountDown} from '../components/countdown'



export default function Exercise ({route}) {
  const navigation = useNavigation();

//   function navigateToNextPage) {
//     navigation.navigate("Exercise");
// }
const {name, previousExercise, nextExercise} = route.params

function goBackOneStep() {
    navigation.goBack()
  }

  
    
  function openCamera() {
      navigation.navigate("Camera");
  }

  
  const [remainingTime, updateRemainingTime]=useState(90);
  const [counterOn, updateCounterOn]=useState(false); 

//not working properly - need to fix 
function count ()  {
    setInterval( () => updateRemainingTime(remainingTime -1), 1000)
  }

  function pauseCount () {
    clearInterval(count);
    updateCounterOn(false)

  }

  return (
  <HomeScreenContainer> 
    <Heading > Imago Reflection </Heading>
    <View style = {{flexDirection:'row', justifyContent:'space-between', width:'95%', marginBottom:10}}> 
    <FilledButton title='Previous' style={{color:'black', padding:0,  width:'40%'}} onPress={() => goBackOneStep()}> </FilledButton>
    <FilledButton title='Next' style={{color:'black', padding:0, width:'40%'}} onPress={() => goBackOneStep()}> </FilledButton>
    </View>
    <Instruction> Before starting this exercise, set a timer. Check tips throughout the exercise or get in touch with the couch for guidance. Enjoy!   </Instruction>
    <CompletedExercise title ='Complete exercise' onPress = {() => { console.log('navigate to next page and save data will happen here ')}}/> 
    <CountDown remainingTime ={remainingTime} count={count}  pauseCount={pauseCount}/> 
    <Text style = {styles.title} > {name} </Text>
    <View style ={{flexDirection:'column'}}> 
      <FilledButton title='Add Insight' style={{color:'black', backgroundColor: Colors.accent, width:'35%', height:20,  marginVertical:5, borderRadius:0 }} onPress={() => goBackOneStep()}> </FilledButton>
      <FilledButton title='Add Picture' style={{color:'black', backgroundColor: Colors.accent, width:'35%', height:20, marginVertical:5, borderRadius:0 }} onPress={() => openCamera()}> </FilledButton>
    </View>

    
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
  fontSize:16

}

})