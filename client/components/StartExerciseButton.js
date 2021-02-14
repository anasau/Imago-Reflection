
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {FilledButton} from '../components/FilledButton'
import Colors from '../constants/Colors'

export function StartExerciseButton ({title, onPress}) {  

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
    height:30, 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 8,
  },
  text: {
    color: Colors.primary,
    fontWeight:'bold',
    fontSize: 12,
  },
});
