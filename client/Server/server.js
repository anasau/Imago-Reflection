import React from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import {BASE_URL} from '@env'


export function getData(endpoint, token) {

  const response = axios
    .get(`${BASE_URL}${endpoint}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
    .then(({ data }) => {
      return data;
    });
  return response;
}

export function postInput(endpoint, data, token) {

  const response = axios
    .post(
      `${BASE_URL}${endpoint}`,
      {
        exercise1: data.exercise1,
        exercise2: data.exercise2,
        exercise3: data.exercise3,
        exercise4: data.exercise4,
        exercise5: data.exercise5,
        exercise6: data.exercise6,
        exercise7: data.exercise7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      }
    )
    .then(({ data }) => {
      return data;
    });

  return response;
}

export function updateInput(endpoint, data, token) {
  
  try {
    const response = axios
      .put(
        `${BASE_URL}${endpoint}`,
        {
          _id: data._id,
          exercise1: data.exercise1,
          exercise2: data.exercise2,
          exercise3: data.exercise3,
          exercise4: data.exercise4,
          exercise5: data.exercise5,
          exercise6: data.exercise6,
          exercise7: data.exercise7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        return data;
      });
    return response;
  } catch (e) {
    console.log(e, "error");
  }
}
