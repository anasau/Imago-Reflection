import React, { Provider } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import   ModalScreen from '../screens/Modal';
import  ProfileScreen from '../screens/ProfileScreen'
import Picture from '../screens/Picture'
import ExerciseNavigator from './ExerciseNavigator';
import Exercise from '../screens/Exercise'
import ReflectionExerciseList from '../screens/ReflectionExerciseList'
import InputScreen  from '../screens/InputScreen'
import CameraScreen from '../screens/CameraScreen'

const ProfileStack = createStackNavigator();

export  function ProfileNavigator() {
  return (
    // <NavigationContainer> 
      <ProfileStack.Navigator
        mode={'modal'}
        screenOptions={{
          headerShown: false,
        }}>
        <ProfileStack.Screen name={'Profile'}  component={ProfileScreen} />
        <ProfileStack.Screen name ={'View'} component ={ModalScreen}/> 
        <ProfileStack.Screen name={'Picture'} component ={Picture}/> 
        <ProfileStack.Screen name={'ExerciseNavigator'} component={ExerciseNavigator}/> 
        <ProfileStack.Screen name={'Exercise'} component={Exercise}/> 
        <ProfileStack.Screen name={'ReflectionExerciseList'}  component={ReflectionExerciseList} />
        <ProfileStack.Screen name = {'Camera'} component={CameraScreen}  initialParams={{ nextEx: 1}} /> 
        <ProfileStack.Screen name={'Input'}  component={InputScreen} />

      </ProfileStack.Navigator>
    // </NavigationContainer>
    )
  }

  

  

