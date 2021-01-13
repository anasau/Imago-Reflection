import React from 'react';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';


export function createAction(type, payload) {
  return {
    type,
    payload,
  };
}

// import {sleep} from '../utils/sleep';

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


const BASE_URL = 'http://192.168.68.111:3001'
// reducer 
export function authReducer() {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SignIn':
          return {
            ...state,
            user: {...action.payload},
          };
        case 'SignOut':
          return {
            ...state,
            user: undefined,
          };
        case 'set-loading':
          return {
            ...state,
            loading: action.payload,
          };
        default:
          return state;
      }
    },
    {
      user: undefined,
      loading: true,
    },
  );
  const auth = React.useMemo (
    // Memoize hook 
    () => ({

      // 2
      login: async (email, password) => {
        console.log('do we get here?')
        console.log(email, password)
        const {data} = await axios.post(`${BASE_URL}/auth/users/login`, {
          email, 
          password
        })
        console.log(data, 'data retrieved')
        // if email and password is correct 
        // extract token data from the user based on email and password  // and save it 
        const user = {
          email: data.email,
          token: data.token
        }
        console.log('user', 'user got 66 ')

        ///This is to keep you loged in if app is closed 
        await SecureStore.setItemAsync('user', JSON.stringify(user));
        dispatch(createAction('SignIn', user))
      },

    

      logout: async () => {
        // await SecureStore.deleteItemAsync('user');
        dispatch(createAction('SignOut'));
      },

      //1 
      register: async (email, password) => {
        // await sleep(2000)        console.log('user', 'user got 66 ')
        console.log('user', 'user got 87 ')

        await axios.post(`${BASE_URL}/auth/users/signup`, {
          email,
          password,
        })
        console.log('user', 'user got 93')
      },
    }),
    [],
  );

  React.useEffect(() => {
    sleep(2).
    then(() => {
     SecureStore.getItemAsync('user').then(user => {
        if (user) {
          dispatch(createAction('SignIn', JSON.parse(user)));
        }
        dispatch(createAction('set-loading', false));
        console.log(user, 'user console')
      });
    });
  }, []);
  return {auth, state}
  }