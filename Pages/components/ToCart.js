import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 function ToCart () {

  
 
  
 

  return (
    <View style={styles.container}>
  
  <TouchableOpacity style={styles.button} >
             <Icon name="cart-outline" size={28} color="black" style={styles.addtxt}/>  
            
          </TouchableOpacity>
  
  </View>
);
}
export default ToCart;

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center',

  },
 
  button: {
    
    left:"43%",
    borderRadius: 15,
    borderWidth:5,
    height: "35%",
    width:"10%",
    borderColor:"pink",
    
  
  },

  addtxt: {
    
  
    bottom:"5%", 
    right:"1%",
    color:"dodgerblue",
    
  },
 
});
