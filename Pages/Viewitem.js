import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";



export default function ViewItem ({route }) {
    const navigation= useNavigation();
    
    const {item} =route.params;
    console.log(item);
    const Goback = () =>{
      navigation.goBack();
    }
  return (
    <View style={styles.container}>
         <TouchableOpacity onPress={Goback}>
        <Text>back</Text>
      </TouchableOpacity>
     
    
          <View style={styles.arrCont}>
            <Image style={styles.imageIN} source={item.image} />
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}>{item.price}</Text> 
            <Text style={styles.item}>{item.Quantity}</Text> 	
         </View>

         <TouchableOpacity style={styles.checkout} >
        <Text style={styles.btntxt}>Add to Cart</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  
  item: {
    
    width: "60%",
    right: "15%",
    fontWeight:"800",
    fontSize:20,
  },
  arrCont: {
    width: "95%", // Set width for two columns with a small gap
    height: "85%",
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "dodgerblue",
    borderWidth: 5,
    alignItems: "center",

  },

  imageIN : {
    width: "90%",
    height: "70%",
    borderRadius: 10,
    marginVertical:"5%",
    backgroundColor:"dodgerblue",
  },
  btntxt: {
    alignSelf:"center",
    top:"30%",
    fontSize:20,
    fontWeight:"600",
    color:"white",
  },

  checkout:{
    backgroundColor:"dodgerblue",
    width: "90%",
    height:"10%",
    top:"1.5%",
    borderRadius:10,

  },

  addtxt: {
    fontSize:19,
    fontWeight:"700",  
    bottom:"30%", 
    left:"15%", 
    
  },
});

