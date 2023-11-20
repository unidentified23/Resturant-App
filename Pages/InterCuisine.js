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
  const numbers = [
    { id: 1, name: "Pizza", image: pizza, price: "R45.00" },
    { id: 7, name: "Pizza", image: pizza, price: "R45.00" },
    { id: 8, name: "Pizza", image: pizza, price: "R45.00" },
    { id: 9, name: "Pizza", image: pizza, price: "R45.00" },
    { id:10, name: "Pizza", image: pizza, price: "R45.00" },
    { id:11, name: "Pizza", image: pizza, price: "R45.00" },
    { id:12, name: "Pizza", image: pizza, price: "R45.00" },
    // Add more items as needed
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.Fcont}>
        {numbers.map((item) => (
          <View key={item.id} style={styles.arrCont}>
            <TouchableOpacity style={styles.image} >
            <Image style={styles.imageIN} source={item.image} />

            </TouchableOpacity>
            
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}>{item.price}</Text> 	
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleButtonPress(item.id)}
            >
              <Text style={styles.addtxt}>+</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
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
  Fcont: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  item: {
    
    width: "60%",
    right: "15%",
    fontWeight:"700",
    fontSize:16,
  },
  arrCont: {
    width: "49%", // Set width for two columns with a small gap
    height: 200,
    backgroundColor: "bisque",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 5,
    marginVertical: 5,
    alignItems: "center",
  },
  image: {
    width: "95%",
    height: 120,
    borderRadius: 10,
    marginVertical:10,
    backgroundColor:"blue",
  },
  imageIN : {
    width: "100%",
    height: 120,
    borderRadius: 10,
    
    backgroundColor:"blue",
  },
  button: {
    bottom:"14%",
    left:"40%",
    borderRadius: 15,
    borderWidth:5,
    height: "15%",
    width:"15%",
    
  
  },

  addtxt: {
    fontSize:19,
    fontWeight:"700",  
    bottom:"30%", 
    left:"15%", 
    
  },
});
