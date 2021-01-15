import React, {useState, useEffect} from 'react';
import { HomeScreenContainer } from '../components/HomeScreenContainer';
import {StyleSheet, Text, Button, View, FlatList} from 'react-native';
import {store} from '../store/ReduxStore'
import {getData, postInput} from '../store/reducers/serverReducer';

export function ProfileScreen ({navigation}) {

  
  
//get and post request work - just desable as we dont need this atm 
    // const input = getData('/reflection');
    // const post = postInput('/reflection', data )

   const data= store.getState()

    return (
    <HomeScreenContainer> 
      <View> 
     <FlatList
      contentContainerStyle={styles.Container}
      data={data} // 
      
      renderItem={({ item }) => (
        <View> 
        <Text > {item.name} </Text>
        {/* <Text > {item.input} </Text> */}
        </View>
      )}
      keyExtractor={exercise => `${exercise.name}`}
    />
      </View>
    </HomeScreenContainer>

  );
}

const styles = StyleSheet.create({
  Container: {
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
