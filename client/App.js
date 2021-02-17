import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator } from './navigation/AuthNavigator';
import { AuthContext } from './context/AuthContext';
import { MainNavigator } from './navigation/MainNavigator';
import { authReducer } from './store/reducers/authReducer';
import { UserContext } from './context/UserContext';
import { SplashScreen } from './screens/SplashScreen';
import { StatusBar, StyleSheet, LogBox } from 'react-native';
import { TabNavigator } from './navigation/TabNavigator'
import { Provider } from 'react-redux';
import { createStore } from "redux";
import { IconButton } from './components/IconButton';
import Colors from './constants/Colors'

import { store } from './store/reducers/storeReducer'

const RootStack = createStackNavigator();

LogBox.ignoreAllLogs(true);
export default function () {
  const { auth, state } = authReducer();


  function renderScreens() {
    if (state.loading) {
      return <RootStack.Screen
        name={'Splash'}
        component={SplashScreen} />;
    }
    return state.user ? (
      <RootStack.Screen name={'MainStack'} >
        {() => (
          <UserContext.Provider value={state.user}>
            <Provider store={store} >
              <TabNavigator />
            </Provider>
          </UserContext.Provider>
        )}
      </RootStack.Screen>
    ) : (
        <RootStack.Screen name={'AuthStack'} component={AuthNavigator} />
      )
  }

  return (

    <AuthContext.Provider value={auth} >
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {renderScreens()}
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}


const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 60,
    right: 16,
  },
})