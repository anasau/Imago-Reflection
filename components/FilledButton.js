import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors'
export function FilledButton({title, style, onPress, textStyle}) {

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 8,
  },
  text: {
    color:Colors.primary, 
    fontWeight: '500',
    fontSize: 12,
  },
});
