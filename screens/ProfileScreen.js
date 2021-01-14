import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Heading} from '../components/Heading';
// import {Input} from '../components/Input';
import {ImageComponent} from '../components/ImageComponent'
import {FilledButton} from '../components/FilledButton';
// import {Error} from '../components/Error';
import {IconButton} from '../components/IconButton';
import {AuthContainer} from '../components/AuthContainer';
import {AuthContext} from '../context/AuthContext';
// import {Loading} from '../components/Loading';
import Colors  from '../constants/Colors'

export  function ProfileScreen({navigation}) {

  const {logout} = React.useContext(AuthContext);

return (
  <AuthContainer> 
    <Heading style={styles.title}> Welcome, time to reflect Ana! </Heading>
    <ImageComponent
        source = {require('../assets/S1B9LKEw.jpeg')}
    />
    <Text style = {styles.container} > This is the start of your reflection journey. We will guide you through this process with a set of exercises. You can chose the order in which to do them. Enjoy!  
    </Text>
    <FilledButton title = 'Start Imago Reflection' style = { styles.startReflection} onPress = { 
      () => { console.log('this works')}} 
       textStyle = { {color:Colors.accent}} /> 
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
    color:Colors.accent
  },
  container: { 
    width:'90%',
    marginBottom:20, 
    marginTop:10, 
    textAlign:'center', 
    fontSize:16, 
  }, 
});
