import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../constants/Colors'
export function IconButton({name, color,  style, onPress}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <FontAwesome name={name} size={20} color={color}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
});
