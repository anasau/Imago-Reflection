import React, {useState, useEffect, Profiler} from 'react';
import { HomeScreenContainer } from '../components/HomeScreenContainer';
import {StyleSheet, Text, Button, View, FlatList} from 'react-native';
import {store} from '../store/ReduxStore'
import {getData, postInput} from '../store/reducers/serverReducer';
import {TextButton} from '../components/TextButton'
import Colors from '../constants/Colors'
import ProgressComponent from '../components/ProgressComponent'

export function ProfileScreen ({navigation}) {

  
  
//get and post request work - just desable as we dont need this atm 
    // const input = getData('/reflection');
    // const post = postInput('/reflection', data )

   const data= store.getState()

    return (
    <HomeScreenContainer> 
      <View> 
        <TextButton title='View latest reflection' style={{color:Colors.primary}} onPress={()=> console.log('see latest refletion')}/>
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
