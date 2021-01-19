import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Modal} from 'react-native';
import {Heading} from '../components/Heading';
// import {Input} from '../components/Input';
import {ImageComponent} from '../components/ImageComponent'
import {FilledButton} from '../components/FilledButton';
import {Error} from '../components/Error';
import {IconButton} from '../components/IconButton';
import {AuthContainer} from '../components/AuthContainer';
import {AuthContext} from '../context/AuthContext';
import {Loading} from '../components/Loading';
import Colors  from '../constants/Colors'
import { useNavigation } from '@react-navigation/native';
import { TextButton } from '../components/TextButton';
import {store} from '../store/ReduxStore'

export default function HomeScreen() {

  
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const {logout} = React.useContext(AuthContext);
  const [state, updateState] = useState( 'Start New Reflection')



  //navigation

  const navigation = useNavigation();

  function navigateToExerciseList() {
      navigation.navigate("ExerciseNavigator", {lastexercise:0});
  }
  
  function navigateToProfile() {
    navigation.navigate("Profile");
}


useEffect(() => {
  updateState('continue reflection...')
},[store.getState()]) 

const startNew = () => { 
  console.log('set back store to initial state - dispatch to be implemented')
}

const instruction = 'This is the start of your reflection journey. We will guide you through this process with a set of exercises. You can chose the order in which to do them. Enjoy!'

return (
  <AuthContainer> 
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
    
    <Heading style={styles.title}> Welcome, time to reflect Ana! </Heading>
    <ImageComponent
        source = {require('../assets/S1B9LKEw.jpeg')}
    />
    <Text style = {styles.container}> {instruction} </Text>
    <FilledButton title = {state} style ={ styles.startReflection} 
       onPress={() => navigateToExerciseList() }
       textStyle = { {color:'white', fontWeight:'bold'}} /> 
    <TextButton title = {state ===  'Start New Reflection' ?  'see previous reflections' :'start new reflection'}
      onPress ={()=> startNew()}
    /> 
  </AuthContainer>
)

} 

const styles = StyleSheet.create({
 
  title: {
    marginVertical: 24,
    fontSize:24, 
    textAlign:'center', 
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 32,
  },
  closeIcon: {
    position: 'absolute',
    top: 60,
    right: 16,
  },
  startReflection: { 
    width:'75%', 
    backgroundColor:Colors.primary, 
  },
  container: { 
    width:'90%',
    marginVertical:20,  
    textAlign:'center', 
    fontSize:16, 
  }, 
  edit: {
    backgroundColor:Colors.primary,
  }
});



