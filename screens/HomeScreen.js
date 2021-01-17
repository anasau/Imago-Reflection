import React from 'react';
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

export default function HomeScreen() {

  
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const {logout} = React.useContext(AuthContext);
  
  const instruction = 'This is the start of your reflection journey. We will guide you through this process with a set of exercises. You can chose the order in which to do them. Enjoy!'
      
  const navigation = useNavigation();

  function navigateToExerciseList() {
      navigation.navigate("ExerciseNavigator");
  }
  
  function navigateToProfile() {
    navigation.navigate("Profile");
}



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
    <FilledButton title = 'Start New Reflection' style = { styles.startReflection}  onPress={() => navigateToExerciseList() }
       textStyle = { {color:'white', fontWeight:'bold'}} /> 
    {/* <FilledButton title = ' Edit Existing Reflection' style = { styles.startReflection}  onPress={() => navigateToProfile() }
       textStyle = { {color:'white', fontWeight:'bold'}} /> 
        */}
    <TextButton title = 'Edit existing reflections' onPress={() => navigateToProfile() }
       textStyle = { {color:Colors.primary, fontWeight:'bold'}} /> 
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
});





// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Dimentions,
//   Pressable,
// } from 'react-native';

// const pressHandler = () => {};

// const Home = ({ navigation }) => {
//   const takePictureButton = () => {
//     navigation.navigate('CameraScreen');
//   };
//   return (
//     <View style={styles.container}>
//       <View>
//         <Image style={styles.logo} source={require('../../assets/logo.png')} />
//       </View>
//       <Pressable
//         title='got to camera'
//         style={styles.button}
//         onPress={takePictureButton}>
//         <Text style={styles.text}>TAKE PICTURE</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#32CD32',
//     paddingTop: 100,
//   },
//   logo: {
//     width: 200,
//     height: 200,
//     resizeMode: 'contain',
//   },
//   button: {
//     position: 'absolute',
//     bottom: 85,
//     backgroundColor: 'white',
//     width: '80%',
//     height: 70,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 35,
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });

// export default Home;