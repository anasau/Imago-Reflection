import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = [
  {
    name: "exercise1",
    input: "Reflection pending",
    time: 90,
  },
  {
    name: "exercise2",
    input: "Reflection pending",
    time: 90,
  },
  {
    name: "exercise3",
    input: "Reflection pending",
    time: 90,
  },
  {
    name: "exercise4",
    input: "Reflection pending",
    time: 90,
  },
  {
    name: "exercise5",
    input: "Reflection pending",
    time: 90,
  },
  {
    name: "exercise6",
    input: "Reflection pending",
    time: 90,
  },
  {
    name: "exercise7",
    input: "Reflection pending",
    time: 90,
  },
  {
    name: "_id",
    input: "",
  },
];

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_INPUT":
      return state.map((exercise) => {
        if (exercise.name === action.name) {
          return { ...exercise, input: action.text };
        } else {
          return exercise;
        }
      });
    case "GET_DATABASE_DATA":
      return state.map((exercise) => {
        for (let key in action.payload) {
          if (exercise.name === key) {
            return { ...exercise, input: action.payload[key] };
          }
        }
        return exercise;
      });
    /// dispatch to create a brand new reflection by deleting the current store, incl id so we create a new entry instead of updaing
    default:
      return state;
  }
}

export const store = createStore(reducer, applyMiddleware(thunk));
