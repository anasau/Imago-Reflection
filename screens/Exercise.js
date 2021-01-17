import React, {useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {FilledButton} from '../components/FilledButton';
import {HomeScreenContainer} from '../components/HomeScreenContainer';
import {Instruction} from '../components/Instruction';
import Colors  from '../constants/Colors'
import {CompletedExercise} from '../components/CompletedExercise';
import { useNavigation } from '@react-navigation/native';
import {CountDown} from '../components/countdown'
import {store} from '../store/ReduxStore'
import {postInput, updateInput} from '../store/reducers/serverReducer';

export default function Exercise ({route}) {


  const {name, previousExercise, nextExercise} = route.params
  // functions to save the user input 
  const [Data, updateData] =useState(store.getState().filter(object => object.name==='_id')[0].input)
  console.log(Data)
  const [message, updateMessage] = useState('')
 
  const completeReflection = () => {

    const dataStore =store.getState(); 
    const data = {
      exercise1:dataStore[0].input, 
      exercise2:dataStore[1].input, 
      exercise3:dataStore[2].input,
      exercise4:dataStore[3].input, 
      exercise5:dataStore[4].input, 
      exercise6:dataStore[5].input, 
      exercise7:dataStore[6].input, 
   
    }
    
      console.log('new el is beig created ')
      const result= postInput('/reflection',data).then(data => updateData(data))
      return result; 
   }  

const updateReflection = (id) => { 
  const dataStore =store.getState(); 
  const data = {
    exercise1:dataStore[0].input, 
    exercise2:dataStore[1].input, 
    exercise3:dataStore[2].input,
    exercise4:dataStore[3].input, 
    exercise5:dataStore[4].input, 
    exercise6:dataStore[5].input, 
    exercise7:dataStore[6].input, 
 
  }

  console.log('edit is happening ')
  const edit = updateInput('/reflection/update', Data._id, data).then(data =>updateMessage('Reflection has been successfully submitted.') )

  return edit; 
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

  /// this the navigation 

  const navigation = useNavigation();
  
  function goBackOneStep() {
    navigation.goBack()
  }

  //Add insight and add picture buttons functions - add picture is wip 
  function openCamera() {
      navigation.navigate("Home");
  }
  
   
  function addInput() {
    navigation.navigate("Input",  {name:name,remainingTime:remainingTime} );
  }

  // input for Instruction element 
  const instruction ='Before starting this exercise, set a timer. Check tips throughout the exercise or get in touch with the couch for guidance. Enjoy! '

  return (
  <HomeScreenContainer> 
    <CompletedExercise title ='Complete Reflection' onPress = {() => {Data._id.length>5 ? updateReflection() : completeReflection()}}/> 
    <Text> {message} </Text>
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