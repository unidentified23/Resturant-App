import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Form, Text, View, TextInput,TouchableOpacity, } from 'react-native';

export default function Login () {
  const [Email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  return (
    <View style={styles.container}>
  
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'bisque',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Loginput: {
    backgroundColor:"bisque",
    width:"45%",
    height:"5%",
    borderRadius:20,
    fontSize: 17,
    fontWeight:"600",
    color:"black",
    paddingLeft:"3%",
    marginVertical: "1%",
    borderBottomWidth: 5,

    },

    LogTxt: {
      fontWeight:"900",
      fontSize: 35 ,
      bottom:"15%",
    },

    LogTxt2: {
      fontWeight:"600",
      fontSize: 15 ,
      top:"10%",
      
    },
    button: {
      backgroundColor:"bisque",
      width: "15%",
      height:"4%",
      borderRadius:20,
      borderWidth:5,
      marginVertical: "3%",
    },

    BtnTxt : {
      paddingLeft:"10%",
      fontWeight: "600",
    },
});
