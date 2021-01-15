import React from 'react';
import axios from 'axios';

import {UserContext} from '../../context/UserContext';

const BASE_URL =  'http://192.168.68.111:3001'



export function getData (endpoint, initialValue ='') {
  const {token} = React.useContext(UserContext);

  const [data, setData] = React.useState(initialValue);

  React.useEffect(() => {
    axios
      .get(`${BASE_URL}${endpoint}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then(({data}) => {
        setData(data);
      });
  }, [token, endpoint]);
  return data;
  
}

export  async function postInput (endpoint, data ) {
  const {token} = React.useContext(UserContext);

  const {response} = await axios.post(`${BASE_URL}${endpoint}`, {

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
  })

  return response; 
}



