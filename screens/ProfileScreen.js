import React, {useState, useEffect} from 'react';
import { HomeScreenContainer } from '../components/HomeScreenContainer';
import {StyleSheet, Text,   Modal,  View, FlatList, Image, Pressable} from 'react-native';
import {store} from '../store/ReduxStore'
import {getData, postInput} from '../store/reducers/serverReducer';
import { Feather } from '@expo/vector-icons';
import {TextButton} from '../components/TextButton';
import Colors from '../constants/Colors';
import ProgressComponent from '../components/ProgressComponent';
import {useDispatch, useSelector} from "react-redux";
import { useNavigation } from '@react-navigation/native';
import {IconButton} from '../components/IconButton'


export default function ProfileScreen ({}) {
  const navigation = useNavigation();

  const [lastReflection, updateLastReflection] =useState('no previous reflection found');
  const [FLisVisible, updateFLisVisible] =useState(false);
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
      const input = getData('/reflection')
        .then(data=> {updateLastReflection(data), 
          dispatch({type: "GET_DATABASE_DATA", 
          payload:data[data.length-1]})
         })
     },[]) 
      
     const dataStore =store.getState().slice(0,7); 

      function view () {
        navigation.navigate("View" );
      }
      


    return (
    <HomeScreenContainer 
    style={{justifyContent:'flex-end', alignItems:'flex-start', padding:0, margin:0}}> 
     <IconButton
    style={styles.closeIcon}
    name = {'sign-out'} 
    color ={Colors.primary}
    onPress={async () => {
      try {
        setLoading(true);
        await logout()
      } catch (e) {
        setError(e)
        setLoading(false);
      }
    }}
    />
    <Image 
      source={require('../assets/future2.png')} 
      style={{height:100, margin:0, paddingTop:0}}/> 
    <View 
      style={{justifyContent:'flex-start', alignContent:'flex-start' }}> 
    <TextButton title='View latest reflection' style={{color:Colors.primary, alignSelf:"flex-start", margin:10}} 
      textStyle={{alignItems:'flex-start'}}
        onPress={()=> FLisVisible 
    ?     
        updateFLisVisible(false) 
    :  
        updateFLisVisible(true)}
        />
        { FLisVisible ? 
         <FlatList
          contentContainerStyle={styles.Container}
          data={dataStore} 
          renderItem={({ item }) => (
            <View key={item.name+2}> 
            {
              item.input.slice(0,4)==='file' ? 
            <View key={item.name+3}> 
              <Image 
                source={{ uri: item.input }} 
                style={{height:100}} key={item.name}/>
              <Feather name="zoom-in" size={24} 
                color={Colors.lightGreen} 
                style={{position:'absolute', top:10, right:5, }} 
                key = {item.name+1} 
                onPress={()=>view()} />
              </View>
              : 
              <View> 
              <Text style={{marginVertical:10., color:Colors.primary}} 
                key={item.name}> {item.input} </Text>
              </View>
            }
          </View>
          
        )}
      /> : 
      <Text> </Text>
      }
        
        {lastReflection.length> 1 ?  Array.from(lastReflection)
        .map((each) => <Text key={each.createdAt}> {each.createdAt} </Text> ) 
        : 
        <Text key='kADCJH'> No previous reflections found </Text> }
    </View>
    </HomeScreenContainer>

  );
}

const styles = StyleSheet.create({
  Container: {
    paddingBottom: 8,
    marginHorizontal: 8,
  },
  closeIcon: {
    position: 'absolute',
    top: 60,
    right: 16,
  },
});
