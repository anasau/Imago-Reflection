

import React from "react";
import { createStore } from "redux";



const initialState = [
//change this 
  {
    name:'Exercise 1',
    input:'',   
  },   {
    name:'Exercise 2',
    input:'',   
  },   {
    name:'Exercise 3',
    input:'',   
  },   {
    name:'Exercise 4',
    input:'',   
  },    {
    name:'Exercise 5',
    input:'',   
  }, {
    name:'Exercise 6',
    input:'',   
  }, 
{
    name:'Exercise 7',
    input:'',   
  }
]
 
export function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_INPUT":
      return state.map((exercise) => {
            if (exercise.name ===action.name) {
              return { ...exercise,  input:action.text };
          } else {
            return exercise
          }
        }) 
      default:
        return state;
    }
}
 


export const store = createStore(reducer);
