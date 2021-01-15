import React, { Provider } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ReflectionExerciseList from '../screens/ReflectionExerciseList';
import Exercise from '../screens/Exercise'
import InputScreen from '../screens/InputScreen'
import { ExerciseNavigator } from './ExerciseNavigator';

const MainStack = createStackNavigator();

export function MainNavigator() {

  return (
    // <NavigationContainer> 
      <MainStack.Navigator
        mode={'modal'}
        screenOptions={{
          headerShown: false,
        }}>
        <MainStack.Screen name={'Home'}  component={HomeScreen} />
        
        <MainStack.Screen name={'ExerciseNavigator'} component={ExerciseNavigator}   options={{ title: 'Imago reflection',  headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeigth:'bold'}
         }}
            /> 
        {/* <MainStack.Screen name = {'Camera'} component={CameraScreen}/>  */}
      </MainStack.Navigator>
    // </NavigationContainer>
    )
  }

  

