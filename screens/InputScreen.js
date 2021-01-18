import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {TextButton} from '../components/TextButton'
import Colors from '../constants/Colors'
import {HomeScreenContainer} from '../components/HomeScreenContainer'
import {CompletedExercise} from '../components/CompletedExercise'
import {useDispatch} from "react-redux";
import { useNavigation } from '@react-navigation/native';
import {store} from '../store/ReduxStore'
import {getData, postInput} from '../store/reducers/serverReducer';
import Exercise from './Exercise'

export default function InputScren ({route}) { 
  const navigation = useNavigation();

  const {name, remainingTime} = route.params
  const [nextExercise, updateNextExercise] =useState(+name.slice(-1)+1)
  let lowerCaseName=name.replace(/\s/g, '').toLowerCase(); 
  const dispatch = useDispatch();

  let storey=store.getState(); 
  const textinput = storey.filter(exercise => exercise.name ===lowerCaseName)[0].input
  const [text, setText] = React.useState(textinput);


  const closePage =() => {
    navigation.navigate("Exercise",  {name:name} );
  }
  
  // save user input if it's not empty 
   function addInput () {
      if (text.length>1) {
        dispatch({
          type: "ADD_INPUT",
          name:lowerCaseName, 
          text
        }) 
        navigation.navigate("Exercise", {name:'Exercise '+ nextExercise});
        
        // potentially pass next excercise so when the page is open - the correct i.e. next exercise is already displayed.
    } 
  };


  return (
    <HomeScreenContainer> 
    <Text> {name} </Text>
    <Text> {remainingTime} </Text> 
    <CompletedExercise title ='Save input' onPress = {() => addInput()}/> 
    <TextButton title='close page' style={styles.closeButton} onPress={closePage}></TextButton>
    <TextInput style={styles.textInput}  value={text} onChangeText={e =>setText(e)}/> 
    </HomeScreenContainer>

  )
}

const styles = StyleSheet.create({
textInput: {
  backgroundColor:Colors.grey,
   flex:1, width:'100%',
    padding:10,  }, 
    closeButton:{
      marginVertical:0, 
      padding:10,}
})

