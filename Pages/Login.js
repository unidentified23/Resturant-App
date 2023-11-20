import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Link, Text, View, TextInput,TouchableOpacity, } from 'react-native';
import {  useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';


export default function Login () {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const navigation = useNavigation();
  const auth = getAuth();

  async function SignIn () {
    try {
      const signInUser = await signInWithEmailAndPassword(auth, email, password);
      console.log(signInUser); 
      alert("Logged in successfully Welcome");
      navigation.navigate("Home");

   }catch(error){
     const errorMessage = error.message;
     console.log(errorMessage)
     alert("Login failed: "+ errorMessage)
   
   } 
  } 
  return (
    <View style={styles.container}>
      <Text style={styles.LogTxt}>Login</Text>
        
      <TextInput
        style={styles.Loginput}
        onChangeText={onChangeEmail}
        value={email}
        placeholder='Enter your Email'
      />
      
      <TextInput
        style={styles.Loginput}
        onChangeText={onChangePassword}
        value={password}
        placeholder='Enter your Password'
      />
      <TouchableOpacity style={styles.button} onPress={SignIn} >
        <Text style={styles.BtnTxt}>Login</Text>
      </TouchableOpacity>

       <Text style={styles.LogTxt2}>Don't have an account?
       <Text onPress={() => navigation.navigate("SignUp") }>click here</Text>
       </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fad6a5',
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
