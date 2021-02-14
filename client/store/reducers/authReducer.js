import React from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { BASE_URL } from '@env'
export function createAction(type, payload) {
  return {
    type,
    payload,
  };
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function authReducer() {

  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case "SignIn":
          return {
            ...state,
            user: { ...action.payload },
          };
        case "SignOut":
          return {
            ...state,
            user: undefined,
          };
        case "set-loading":
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
    }
  );
  const auth = React.useMemo(
    () => ({
      login: async (email, password) => {
        const { data } = await axios.post(`${BASE_URL}/auth/users/login`, {
          email,
          password,
        });
      
        const user = {
          email: data.email,
          token: data.token,
        };

        await SecureStore.setItemAsync("user", JSON.stringify(user));
        dispatch(createAction("SignIn", user));
      },

      logout: async () => {
        dispatch(createAction("SignOut"));
      },

      register: async (email, password) => {
        await axios.post(`${BASE_URL}/auth/users/signup`, {
          email,
          password,
        });
      },
    }),
    []
  );

  React.useEffect(() => {
    sleep(2000).then(() => {
      SecureStore.getItemAsync("user").then((user) => {
        if (user) {
          dispatch(createAction("SignIn", JSON.parse(user)));
        }
        dispatch(createAction("set-loading", false));
      });
    });
  }, []);
  return { auth, state };
}
