import React, { Provider } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ReflectionExerciseList from '../screens/ReflectionExerciseList';
import Exercise from '../screens/Exercise'
import InputScreen from '../screens/InputScreen'
import CameraScreen from '../screens/CameraScreen'

const ExerciseStack = createStackNavigator();

export default function ExerciseNavigator() {

  return (
    // <NavigationContainer> 
      <ExerciseStack.Navigator
        mode={'modal'}
        screenOptions={{
          headerShown: false,
        }}>
        <ExerciseStack.Screen name={'ReflectionExerciseList'}  component={ReflectionExerciseList} />
        <ExerciseStack.Screen name ={'Exercise'} component ={Exercise}/> 
        <ExerciseStack.Screen name={'Input'} component={InputScreen}   options={{ title: 'Add reflection',  headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeigth:'bold'}
         }}
            /> 
        <ExerciseStack.Screen name = {'Camera'} component={CameraScreen}/> 
      </ExerciseStack.Navigator>
    // </NavigationContainer>
    )
  }

  

