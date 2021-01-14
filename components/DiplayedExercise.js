import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ImageComponent} from '../components/ImageComponent'
import Colors from '../constants/Colors'
import {HomeScreenContainer} from "../components/HomeScreenContainer";
import {Heading} from '../components/Heading'
import {StartExerciseButton} from '../components/StartExerciseButton'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import {Instruction} from '../components/Instruction'

export function DisplayedExercise (props) { 
  const navigation = useNavigation();

  const {name, title, text, image} = props.exercise;
  const previousExercise = props.previousExercise;
  const nextExercise = props.nextExercise;  
  
function navigateToExercise() {
    navigation.navigate("Exercise", {name:name, previousExercise:previousExercise, nextExercise:nextExercise});
}

function goBackOneStep(){
  navigation.goBack()
}
  return (
    <HomeScreenContainer style = {styles.screen}> 
    <Heading > Imago Reflection </Heading>
      <Instruction  > Read through the set of exercises prior to starting to journal.  </Instruction>
        <View style = {styles.carousel}>
        <AntDesign name="leftcircleo" size={24} color="black" onPress ={() => props.goToPrevExerc()}/>  
        <Text style = {styles.exerciseTitle} > {name} </Text>
        <AntDesign name="rightcircleo" size={24} color="black" onPress ={() => props.goToNextExerc()} />
        </View>
      <Text style = {styles.question}> {title} </Text>
      <ImageComponent source = {image} style ={styles.image}/> 
      <View style = {styles.view}> 
      <Text style = { styles.exercise}>  {text} </Text>
      </View>
     <StartExerciseButton title='Start reflecting' onPress={() => navigateToExercise()}/> 
    </HomeScreenContainer>
)

} 

const styles = StyleSheet.create({
  
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
     fontWeight:'bold', 
    //  maxWidth:'90%', 
     textAlign:'center'
   }, 
   image: { 
     width:'80%', 
   }
  
});