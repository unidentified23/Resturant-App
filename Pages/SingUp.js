import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput ,TouchableOpacity } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection,addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import {authentication, db } from "./Firebase";
import Home from "./Home";

export default function SignUp() {
  const [Email, onChangeEmail] = useState("");
  const [Password, onChangePassword] = useState("");
  const [surname, onChangeSurname] = useState("");
  const [name, onChangeName] = useState("");
  const [phoneNo, onChangePhoneNo] = useState("");
  const [userName, onChangeUserName] = useState("");
  const navigation = useNavigation();
  
   
  const handleSignUp = async ()=> {
     
    try {
       const CreateUser =  await createUserWithEmailAndPassword(authentication, Email, Password);
       console.log(CreateUser);
       const dbh = collection(db,"users");
       const userData = {
        name,
        surname,
        phoneNo,
        userName,
        Email,
       };
       const docRef = addDoc(dbh,userData);
       console.log("User data added with ID: ",docRef.id);
       alert("Welcome"+userName);
       navigation.navigate("Home");

    }catch(error){
      const errorMessage = error.message;
      console.log(errorMessage)
      alert("sign in failed: "+ errorMessage)
    
    } 
   
  }
   
   
     

  return (
    <View style={styles.container}>
      <Text style={styles.signTxt}>Sign up to make your order</Text>

      <TextInput
        style={styles.Signinpt}
        onChangeText={onChangeName}
        value={name}
        placeholder="Enter your name"
      />

      <TextInput
        style={styles.Signinpt}
        onChangeText={onChangeSurname}
        value={surname}
        placeholder="Enter your surname"
      />

      <TextInput
        style={styles.Signinpt}
        onChangeText={onChangeEmail}
        value={Email}
        placeholder="Enter your Email"
      />

      <TextInput
        style={styles.Signinpt}
        onChangeText={onChangeUserName}
        value={userName}
        placeholder="Enter your User name"
      />

      <TextInput
        style={styles.Signinpt}
        onChangeText={onChangePhoneNo}
        value={phoneNo}
        placeholder="Enter your phone number"
      />

      <TextInput
        style={styles.Signinpt}
        onChangeText={onChangePassword}
        value={Password}
        placeholder="Enter your Password"
      />
      <TouchableOpacity style={styles.signBtn} onPress={handleSignUp} >
        <Text style={styles.btntxt}>register</Text>
      </TouchableOpacity>
      <Text>Already registered?
        <Text onPress={()=> navigation.navigate("Login")} >Click here</Text>
      </Text>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "bisque",
    alignItems: "center",
    justifyContent: "center",
  },

  Signinpt: {
    width: "60%",
    backgroundColor: "bisque",
    margin: "1%",
    fontSize: 17,
    fontWeight: "600",
    borderRadius: 20,
    borderBottomWidth: 5,
    paddingLeft: "2%",
  },

  signTxt: {
    fontSize: 30,
    fontWeight: "900",
    bottom: "10%",
  },

  signBtn: {
    borderRadius:20,
    borderWidth: 5,
    width:"20%",
    margin:"5%",
  },
  
  btntxt : {
    paddingLeft: "6%",
    fontWeight: "600",
    fontSize: 17,
  },
});


