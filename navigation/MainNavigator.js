import React, { Profiler } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ReflectionExerciseList from '../screens/ReflectionExerciseList';
import Exercise from '../screens/Exercise'

const MainStack = createStackNavigator();
const HomeStack = createStackNavigator();

export function MainNavigator() {

  return (
    // <NavigationContainer> 
    <MainStack.Navigator
      mode={'modal'}
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name={'Home'}  component={HomeScreen} />
      <MainStack.Screen name={'ReflectionExerciseList'}  component={ReflectionExerciseList} />
      <MainStack.Screen name ={'Exercise'} component ={Exercise}/> 
    </MainStack.Navigator>
    // </NavigationContainer>
  )
  }

  

