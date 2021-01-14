import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Carousel } from '@ant-design/react-native';
import {ImageComponent} from '../components/ImageComponent'
import Colors from '../constants/Colors'
import {HomeScreenContainer} from "../components/HomeScreenContainer";
import {Heading} from '../components/Heading'
import {StartExerciseButton} from '../components/StartExerciseButton'
import { useNavigation } from '@react-navigation/native';
import exercises from '../store/exercises'
import { AntDesign } from '@expo/vector-icons';
import {DisplayedExercise} from '../components/DiplayedExercise'

export default function ReflectionExerciseList ({}) { 

  const data = exercises; 

  const [currentExercise, updateCurrentExercise] = useState(0);
  const [nextExercise, updateNextExercise] =useState(1);
  const [previousExercise, updatePreviousExercise] =useState(0);



  const goToNextExerc = ()  => {
    if (currentExercise  <6) { 
      updateCurrentExercise(currentExercise +1); 
    }
  }
   const goToPrevExerc = ()  => {
     if(currentExercise > 0 ) { 
      updateCurrentExercise(currentExercise -1)
     }
  }

  
  useEffect(() => {
    if(nextExercise <5) {updateNextExercise(currentExercise +1)}
    if(currentExercise >1) { updatePreviousExercise (currentExercise -1)}
  },[currentExercise]);



  return (
    <DisplayedExercise exercise={data[currentExercise]} nextExercise = {data[nextExercise]}  previousExercise={data[previousExercise]} 
    goToNextExerc ={goToNextExerc} goToPrevExerc={goToPrevExerc}  /> 
  )
}