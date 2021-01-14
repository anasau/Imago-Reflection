import React from 'react' 
import {StyleSheet, Image} from 'react-native'


export function ImageComponent ({source}) { 

  return (
    <Image  style={styles.image}
    source ={source} 
    />
  )
}

const styles = StyleSheet.create({
   
  image: { 
    width:310, 
    height:150,
    marginVertical:10, 
  }
});
