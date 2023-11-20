import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Link, Text, View, TextInput,TouchableOpacity, } from 'react-native';
import {  useNavigation } from '@react-navigation/native';
import { addDoc, collection, deleteDoc, doc, setDoc, updateDoc, getDoc } from "firebase/firestore"; 
import burger from "../assets/burger.jpg";
import { db } from './Firebase';

export default function Admin () {
  const [Email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const navigation = useNavigation();
  const numbers = [
    { id: 1, password: "Small Burger", image: burger, Email: "R45.00" },
    { id: 7, password: "Small Burger", image: burger, Email: "R45.00" },
   
  ];


  function CreateandAdd () {
    
    setDoc(doc(db, "Run", "LA"), {
        type: Email,
        state: password,
        Arr: numbers
      })
      
   .catch((error)=>{
    console.log(error);
   });
   onChangeEmail("");
   onChangePassword("");
  }
  
  function addrooms () {
    addDoc(collection(db, "Ron"), {
        type: Email,
        state: password,
        Arr: numbers
      }) 
   .catch((error)=>{
    console.log(error);
   });
   onChangeEmail("");
   onChangePassword("");
  }

  function Updaterooms () {
    updateDoc(doc(db, "Ron","LA"), {
        type: Email,
        state: password,
        Arr: numbers
      }) 
   .catch((error)=>{
    console.log(error);
   });
   onChangeEmail("");
   onChangePassword("");
  }

  function deleteroom () {
    deleteDoc(doc(db,"Rooms","LA"));
  }

  async function getRooms () {
    const docRef = doc(db, "Rooms", " fHNRpmOE89JybfRCdDb3");
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.LogTxt}>Admin</Text>
        
      <TextInput
        style={styles.Loginput}
        onChangeText={onChangeEmail}
        value={Email}
        placeholder='Enter your Email'
      />
      
      <TextInput
        style={styles.Loginput}
        onChangeText={onChangePassword}
        value={password}
        placeholder='Enter your Password'
      />
      <TouchableOpacity style={styles.button} onPress={getRooms} >
        <Text style={styles.BtnTxt}>Login</Text>
      </TouchableOpacity>

      <View>
    
      </View>

     
     

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
