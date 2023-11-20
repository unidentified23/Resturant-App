import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,

} from "react-native";
import pizza from "../assets/pizza.jpg";


export default function InterCuisine () {
  

  return (
    <View style={styles.container}>
     
    
          <View style={styles.arrCont}>
            <Image style={styles.imageIN} source={pizza} />
            <Text style={styles.item}>Chicken pizza</Text>
            <Text style={styles.item}>R84.99</Text> 
            <Text style={styles.item}>QTY: 2</Text> 	
         </View>
         <TouchableOpacity style={styles.checkout} >
        <Text style={styles.btntxt}>register</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAD6A5",
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
    backgroundColor: "#FAD6A5",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 5,
    alignItems: "center",

  },

  imageIN : {
    width: "90%",
    height: "70%",
    borderRadius: 10,
    marginVertical:"5%",
    backgroundColor:"blue",
  },
  btntxt: {
    alignSelf:"center",
    top:"30%",
    fontSize:20,
    fontWeight:"600",

    
  
  },

  checkout:{
    backgroundColor:"blue",
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

