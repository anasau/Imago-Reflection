import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Heading} from '../components/Heading';
import {ImageComponent} from '../components/ImageComponent'
import {FilledButton} from '../components/FilledButton';
import {IconButton} from '../components/IconButton';
import {HomeScreenContainer} from '../components/HomeScreenContainer';
import {AuthContext} from '../context/AuthContext';
import Colors  from '../constants/Colors'
import {CompletedExercise} from '../components/CompletedExercise';
import { useNavigation } from '@react-navigation/native';

export default function Exercise ({}) {
  const navigation = useNavigation();

//   function navigateToXXX() {
//     navigation.navigate("Exercise");
// }
function goBackOneStep(){
  navigation.goBack()
}
  return (
  <HomeScreenContainer> 
    <Text style = {styles.title} > {props.exercise.name} </Text>
    <CompletedExercise title ='Complete exercise' onPress = {() => { console.log('it works')}}/> 
    <FilledButton title='Go back' style={{color:'black'}} onPress={() => goBackOneStep()}> </FilledButton>
  </HomeScreenContainer>
  
  )

}


const styles = StyleSheet.create({
title: { 
  width: '90%', 
  textAlign:'center', 
  paddingVertical:20, 
  color:'black', 

}

})