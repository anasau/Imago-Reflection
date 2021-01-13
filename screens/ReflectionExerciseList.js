import React, {useState} from 'react';
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

  const newdata = exercises; 

  const [exerciseView, updateExerciseView] = useState(0)

  const goToNextExerc = ()  => {
    if (exerciseView  <= 6) { 
      updateExerciseView(exerciseView +1)
    }
  }
   const goToPrevExerc = ()  => {
     if(exerciseView > 0 ) { 
      updateExerciseView(exerciseView -1)
     }
  }

  return (
    <DisplayedExercise exercise={newdata[exerciseView]} goToNextExerc ={goToNextExerc} goToPrevExerc={goToPrevExerc} /> 
  )
}