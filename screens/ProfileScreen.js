import React, {useState, useEffect} from 'react';
import { HomeScreenContainer } from '../components/HomeScreenContainer';
import {StyleSheet, Text, Button, View, FlatList, Touchable} from 'react-native';
import {store} from '../store/ReduxStore'
import {getData, postInput} from '../store/reducers/serverReducer';
import {TextButton} from '../components/TextButton';
import Colors from '../constants/Colors';
import ProgressComponent from '../components/ProgressComponent';
import {useDispatch, useSelector} from "react-redux";
import { update } from '../backend/models/model';


export function ProfileScreen ({navigation}) {

  const [lastReflection, updateLastReflection] =useState('no previous reflection found');
  const [FLisVisible, updateFLisVisible] =useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
      const input = getData('/reflection').then(data=> {updateLastReflection(data), 
        dispatch({type: "GET_DATABASE_DATA", 
        payload:data[data.length-1]})
      })
    },[]) 
      const dataStore =store.getState(); 

    return (
    <HomeScreenContainer> 
      <View> 
        <TextButton title='View latest reflection' style={{color:Colors.primary}} onPress={()=> FLisVisible? updateFLisVisible(false) :  updateFLisVisible(true) }/>
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
    
    {lastReflection.length> 1 ?  Array.from(lastReflection).map((each) => <Touchable key={each._id}> {each.createdAt} </Touchable> ) : <Text key='kADCJH'> No previous reflections found </Text> }
  
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
