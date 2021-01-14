
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {FilledButton} from '../components/FilledButton'
import Colors from '../constants/Colors'

export function CompletedExercise ({title, onPress}) {  

  return (
<TouchableOpacity
      style={styles.container}
      onPress={onPress} >
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    height:40, 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 8,
    backgroundColor:Colors.primary, 
  },
  text: {
    color: 'white',
    // fontWeight: '500',
    fontSize: 12,
  },
});
