import React, {useState, useEffect} from 'react';
import { HomeScreenContainer } from '../components/HomeScreenContainer';
import {StyleSheet, Text, Button, View, FlatList} from 'react-native';
import {store} from '../store/ReduxStore'
import {getData, postInput} from '../store/reducers/serverReducer';
import {TextButton} from '../components/TextButton';
import Colors from '../constants/Colors';
import ProgressComponent from '../components/ProgressComponent';
import {useDispatch, useSelector} from "react-redux";


export function ProfileScreen ({navigation}) {

  const [lastReflection, updateLastReflection] =useState('no previous reflection found');
  const [FLisVisible, updateFLisVisible] =useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
      const input = getData('/reflection').then(data=> {updateLastReflection(data[data.length-1])
     
      })
    },[])
  
    useEffect(() => 
    dispatch({type: "GET_DATABASE_DATA", 
    payload:lastReflection}), [lastReflection]
    )
      
      
      const dataStore =store.getState(); 
 
      console.log(lastReflection, 'lastReflection')

    return (
    <HomeScreenContainer> 
      <View> 
        <TextButton title='View latest reflection' style={{color:Colors.primary}} onPress={()=> updateFLisVisible(true) }/>
        { FLisVisible ? 
         <FlatList
      
        contentContainerStyle={styles.Container}
        data={dataStore} 
        renderItem={({ item }) => (
          <View> 
          <Text > {item.input} </Text>
          </View>
        )}
        keyExtractor={exercise => `${exercise.name}`}
      /> : 
      <Text> start new Reflection </Text>

      }
    
    <Text> {lastReflection.createdAt} </Text>
      </View>
    {/* <ProgressComponent/>  */}
    </HomeScreenContainer>

  );
}

const styles = StyleSheet.create({
  Container: {
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
