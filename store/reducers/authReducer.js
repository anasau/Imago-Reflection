// require('dotenv').config()
import React from 'react';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';


export function createAction(type, payload) {
  return {
    type,
    payload,
  };
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// reducer 
export function authReducer() {
  const BASE_URL =  'http://192.168.68.111:3001'

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
        const {data} = await axios.post(`${BASE_URL}/auth/users/login`, {
          email, 
          password
        })
        // if email and password is correct 
        // extract token data from the user based on email and password  // and save it 
        const user = {
          email: data.email,
          token: data.token
        }

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
        await axios.post(`${BASE_URL}/auth/users/signup`, {
          email,
          password,
        })
      },
    }),
    [],
  );

  React.useEffect(() => {
    sleep(2000).
    then(() => {
     SecureStore.getItemAsync('user').then(user => {
        if (user) {
          dispatch(createAction('SignIn', JSON.parse(user)));
        }
        dispatch(createAction('set-loading', false));
      });
    });
  }, []);
  return {auth, state}
  }