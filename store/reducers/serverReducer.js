import React from 'react';
import axios from 'axios';

import {UserContext} from '../../context/UserContext';

const BASE_URL =  'http://192.168.68.111:3001'


export function getData (endpoint) {
  // const {token} = React.useContext(UserContext);

  // const [data, setData] = React.useState(initialValue);
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmY1ZGRjMTJjY2UxZDE3YzQxOTMzNGUiLCJlbWFpbCI6ImFuYXNhdUBnbWFpbC5jb20iLCJpYXQiOjE2MTA4MjIxNDIsImV4cCI6MTYxMDgzMjk0Mn0.lNcS3yg1G4KisU18Mh1wgX_lOVNLbTWWcVj4fj4WbRE"
  // React.useEffect(() => {
    const response = axios
      .get(`${BASE_URL}${endpoint}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then(({data}) => {
         return data});
  // }, [token, endpoint]);
  return response;
}



export function postInput (endpoint, data ) {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmY1ZGRjMTJjY2UxZDE3YzQxOTMzNGUiLCJlbWFpbCI6ImFuYXNhdUBnbWFpbC5jb20iLCJpYXQiOjE2MTA4MjIxNDIsImV4cCI6MTYxMDgzMjk0Mn0.lNcS3yg1G4KisU18Mh1wgX_lOVNLbTWWcVj4fj4WbRE"
  console.log('does it do the ost?')

  // const {token} = React.useContext(UserContext);
  // const [resp, setResp] = React.useState('');
  const response =  axios.post(`${BASE_URL}${endpoint}`, {
    exercise1:data.exercise1, 
    exercise2:data.exercise2,  
    exercise3:data.exercise3, 
    exercise4:data.exercise4, 
    exercise5:data.exercise5, 
    exercise6:data.exercise6, 
    exercise7:data.exercise7, 

  }, {
    headers: {
      'Content-Type': "application/json", 
      'Authorization': `bearer ${token}`
    },
  }).then(({data}) => {
  return data })

  return response; 
}




export function updateInput (endpoint, data ) {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmY1ZGRjMTJjY2UxZDE3YzQxOTMzNGUiLCJlbWFpbCI6ImFuYXNhdUBnbWFpbC5jb20iLCJpYXQiOjE2MTA4MjIxNDIsImV4cCI6MTYxMDgzMjk0Mn0.lNcS3yg1G4KisU18Mh1wgX_lOVNLbTWWcVj4fj4WbRE"
  // const {token} = React.useContext(UserContext);
  console.log(data, 'id and dataaaa')

  // const [resp, setResp] = React.useState('');
  try {
    const response =  axios.put(`${BASE_URL}${endpoint}`, {
      _id:data._id, 
      exercise1:data.exercise1, 
      exercise2:data.exercise2,  
      exercise3:data.exercise3, 
      exercise4:data.exercise4, 
      exercise5:data.exercise5, 
      exercise6:data.exercise6, 
      exercise7:data.exercise7, 
  
    }, {
      headers: {
        'Content-Type': "application/json", 
        'Authorization': `bearer ${token}`
      },
    }).then(({data}) => {
    return data})
    return response; 
  } catch (e) {
    console.log(e, 'error') 
  }

}
