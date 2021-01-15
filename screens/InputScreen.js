import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {Input} from '../components/Input'
import Colors from '../constants/Colors'
import {HomeScreenContainer} from '../components/HomeScreenContainer'
import {CompletedExercise} from '../components/CompletedExercise'
import {useDispatch, useSelector} from "react-redux";
import { useNavigation } from '@react-navigation/native';

import {store} from '../store/ReduxStore'



export default function InputScren ({route}) { 
  const navigation = useNavigation();

  const {name, remainingTime} = route.params

  const dispatch = useDispatch();
  const [text, setText] = React.useState("");


    // 1. take the input and post it to the store and then to the database 
    // close the window by navigating to previous page
    //change add input to edit input 
  

  const  addInput= (e) => {

    dispatch({
      type: "ADD_INPUT",
      name, 
      text
    });

    setText("");
    navigation.navigate("ReflectionExerciseList",  {name:name} );

  };
  // setText(e.target.value)

  console.log('new console', store.getState())
  
  return (
    <HomeScreenContainer> 
    <Text> {remainingTime} </Text>
    <CompletedExercise title ='Save input' onPress = {() => { addInput()}}/> 
    <TextInput style={styles.textInput}  value={text} onChangeText={e =>setText(e)}/> 
    </HomeScreenContainer>

  )
}

const styles = StyleSheet.create({
textInput: {
  backgroundColor:Colors.grey,
   flex:1, width:'100%',
    padding:10,  }
})

