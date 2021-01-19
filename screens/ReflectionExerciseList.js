import React, {useState, useEffect} from 'react';
import exercises from '../store/exercises'
import {DisplayedExercise} from '../components/DiplayedExercise'
import { useNavigation } from '@react-navigation/native';

export default function ReflectionExerciseList ({route}) { 
const navigation = useNavigation()

//if there is data here - last completed exercise which is coming from the input page we should right away shwo the description for the next exercise 
  const data = exercises; 
  const [currentExercise, updateCurrentExercise] = useState( 0);
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