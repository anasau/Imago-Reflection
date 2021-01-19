import React, { Provider } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileNavigator from './ProfileNavigator'
import ExerciseNavigator from './ExerciseNavigator';
import CameraScreen from '../screens/CameraScreen'


const MainStack = createStackNavigator();

export function MainNavigator(props) {
  

  return (
    // <NavigationContainer> 
      <MainStack.Navigator
        mode={'modal'}
        screenOptions={{
          headerShown: false,
        }}>
        <MainStack.Screen name={'Home'}  component={HomeScreen} />
        
        <MainStack.Screen name={'ExerciseNavigator'} component={ExerciseNavigator}
            /> 
        <MainStack.Screen name = {'Camera'} component={CameraScreen}  initialParams={{ nextEx: 1}} /> 
        {/* <MainStack.Screen name = {'ProfileNavigator'} component={ProfileNavigator}/>  */}

      </MainStack.Navigator>
    // </NavigationContainer>
    )
  }

  

