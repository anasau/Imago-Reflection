import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {TextButton} from '../components/TextButton'
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
  const [text, setText] = React.useState('');


    // 1. take the input and post it to the store and then to the database 
    // close the window by navigating to previous page
    //change add input to edit input 
  

  const closePage =() => {
    navigation.navigate("Exercise",  {name:name} );
  }

  const  addInput= (e) => {
     if (text.length>1) {
      dispatch({
        type: "ADD_INPUT",
        name, 
        text
      });
  
      setText("");
      navigation.navigate("ReflectionExerciseList",  {name:name} );
      //potentially pass next excercise so when the page is open - the correct i.e. next exercise is already displayed. 
    } 
  };
  
  return (
    <HomeScreenContainer> 
    <Text> {name} </Text>
    <Text> {remainingTime} </Text>
    <CompletedExercise title ='Save input' onPress = {() => { addInput()}}/> 
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

