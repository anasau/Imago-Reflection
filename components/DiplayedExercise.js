import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ImageComponent} from '../components/ImageComponent'
import Colors from '../constants/Colors'
import {HomeScreenContainer} from "../components/HomeScreenContainer";
import {Heading} from '../components/Heading'
import {StartExerciseButton} from '../components/StartExerciseButton'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export function DisplayedExercise (props) { 
  const navigation = useNavigation();

  function navigateToExercise() {
    navigation.navigate("Exercise");
}
function goBackOneStep(){
  navigation.goBack()
}
  return (
    <HomeScreenContainer style = {styles.screen}> 
    <Heading style ={styles.title}> Imago Reflection </Heading>
      <Text style ={styles.maintitle} > Read through the set of exercises prior to starting to journal.  </Text>
        <View style = {styles.carousel}> 
        <AntDesign name="leftcircleo" size={24} color="black" onPress ={() => props.goToPrevExerc()}/>  
        <Text style = {styles.exerciseTitle} > {props.exercise.name} </Text>
        <AntDesign name="rightcircleo" size={24} color="black" onPress ={() => props.goToNextExerc()} />
        </View>
      <Text style = {styles.question}> {props.exercise.title} </Text>
      <ImageComponent source = {props.exercise.image} /> 
      <View style = {styles.view}> 
      <Text style = { styles.exercise}>  {props.exercise.text} </Text>
      </View>
     <StartExerciseButton title='Start reflecting' onPress={() => navigateToExercise()}/> 
    
    </HomeScreenContainer>
)

} 

const styles = StyleSheet.create({
 maintitle: { 
   textAlign:'center'
 }, 
  title: {
    marginVertical: 20,
    fontSize:20, 
    textAlign:'center', 
    color:Colors.primary
  },
  exercise: { 
    width: '90%', 
    textAlign:'center', 
    paddingVertical:20, 
    color:'black', 

  }, 
  screen: { 
    marginBottom:20
  }, 
  view: { 
    backgroundColor:'white', 
    opacity:0.7, 
    width: '90%', 
    borderRadius:14, 
  }, 
  exerciseTitle: {
    width:'30%', 
    color:'black', 
    textAlign:'center', 
    fontWeight:'bold', 
    fontSize:20, 
    // paddingHorizontal:10, 

   }, 
   carousel: { 
     marginVertical:20,
     flexDirection:'row', 
     justifyContent:'space-between',
   }, 
   question: { 
     backgroundColor:Colors.primary, 
     color:'white',
     fontWeight:'bold'
   }
  
});