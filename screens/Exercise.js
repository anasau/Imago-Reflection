import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Heading} from '../components/Heading';
// import {Input} from '../components/Input';
import {ImageComponent} from '../components/ImageComponent'
import {FilledButton} from '../components/FilledButton';
// import {Error} from '../components/Error';
import {IconButton} from '../components/IconButton';
import {HomeScreenContainer} from '../components/HomeScreenContainer';
import {AuthContext} from '../context/AuthContext';
// import {Title}  from '../components/Title'
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
  <CompletedExercise title ='Complete exercise' onPress = {() => { console.log('it works')}}/> 
  <FilledButton title='Go back' style={{color:'black'}} onPress={() => goBackOneStep()}> </FilledButton>
  </HomeScreenContainer>
  
  )

}