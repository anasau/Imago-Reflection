import React, { Provider } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import ModalScreen from '../screens/Modal';
import  ProfileScreen from '../screens/ProfileScreen'

const ProfileStack = createStackNavigator();

export default function ProfileNavigator() {

  return (
      <ProfileStack.Navigator
        mode={'modal'}
        screenOptions={{
          headerShown: false,
        }}>
        <ProfileStack.Screen name={'Profile'}  component={ProfileScreen} />
        <ProfileStack.Screen name ={'View'} component ={ModalScreen}/> 
       
      </ProfileStack.Navigator>
    )
  }

  

