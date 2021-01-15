import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthNavigator} from './navigation/AuthNavigator';
import {AuthContext} from './context/AuthContext';
import {MainNavigator} from './navigation/MainNavigator';
import {authReducer} from './store/reducers/authReducer';
import {UserContext} from './context/UserContext';
import {SplashScreen} from './screens/SplashScreen';
import {StatusBar, StyleSheet} from 'react-native';
import {TabNavigator } from './navigation/TabNavigator'
import { Provider } from 'react-redux';
import { createStore } from "redux";
import {IconButton} from './components/IconButton';
import Colors from './constants/Colors'

import {store} from './store/ReduxStore'

const RootStack = createStackNavigator();


export default function() {

  
// store.subscribe(() => {
//   console.log("new state", store.getState());
// });
  // useAuth = reducer for setting a user etc 
  const {auth, state} = authReducer();
 

  function renderScreens() {

    // not sure how the loading get added to the state 
    if (state.loading) {
      return <RootStack.Screen name={'Splash'} component={SplashScreen} />;
    }
    // // if user is logged in - display main stack - else -- display the auth stack 
    return state.user ? (
      <RootStack.Screen name={'MainStack'}>
        {() => (
          <UserContext.Provider value={state.user}>
          <IconButton
            style={styles.closeIcon}
            name = {'sign-out'} 
            color ={Colors.primary}
            onPress={async () => {
              try {
                // setLoading(true);
                await logout()
              } catch (e) {
                console.log(e)
                // setError(e.message);
                // setLoading(false);
              }
            }}
          />
            <Provider store={store} >
            <TabNavigator/> 
            </Provider>
          </UserContext.Provider>
        )}
      </RootStack.Screen>
    ) : (
       <RootStack.Screen name={'AuthStack'} component={AuthNavigator} />
    )
  }

  return (
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <AuthContext.Provider value={auth}>
        <NavigationContainer>
          <RootStack.Navigator
            screenOptions={{
              headerShown: false,
              // animationEnabled: false,
            }}>
            {renderScreens()}
          </RootStack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
  );
}


const styles =StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 60,
    right: 16,
  },
})