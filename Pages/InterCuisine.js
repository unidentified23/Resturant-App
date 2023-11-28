import {React, useState} from "react";
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
import { useNavigation } from "@react-navigation/native";
import Cart from "./Cart";
import ToCart from "./components/ToCart";


export default function InterCuisine () {
  const [numbers,setnumbers] =useState ([
    { id: 1, name: "Small Burger", image: pizza, price: "R44.00", Quantity: 0 },
    { id: 7, name: "Small Burger", image: pizza, price: "R45.00", Quantity: 0 },
    { id: 8, name: "Small Burger", image: pizza, price: "R46.00", Quantity: 0 },
    { id: 9, name: "Small burger", image: pizza, price: "R47.00", Quantity: 0 },
    { id: 10, name: "Small Burger", image: pizza, price: "R48.00", Quantity: 0 },
    { id: 11, name: "Small Burger", image: pizza, price: "R49.00", Quantity: 0 },
   
    // Add more items as needed
  ]);
  
  const IncrementQty =(item)=>{
   item.Quantity=item.Quantity+1;
   return(
    <Cart product={{item}} />
   );
  };

  const navigation= useNavigation();
  const handleViewitem =(item)=> {
    navigation.navigate('ViewItem',{item});
  }; 

  return (
    <View style={styles.container}>
      <ToCart/>
      <ScrollView contentContainerStyle={styles.Fcont}>
        {numbers.map((item) => (
          <View key={item.id} style={styles.arrCont}>
            <TouchableOpacity style={styles.image} onPress={() => handleViewitem(item)} >
            <Image style={styles.imageIN} source={item.image} />

            </TouchableOpacity>
            
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}>{item.price}</Text> 	
            <TouchableOpacity style={styles.button}  onPress={() => IncrementQty(item)} >
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
    backgroundColor: "white",
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
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "dodgerblue",
    borderWidth: 5,
    marginVertical: 5,
    alignItems: "center",
  },
  image: {
    width: "95%",
    height: 120,
    borderRadius: 10,
    marginVertical:10,
    backgroundColor:"dodgerblue",
  },
  imageIN : {
    width: "100%",
    height: 120,
    borderRadius: 10,
    backgroundColor:"dodgerblue",
  },
  button: {
    bottom:"14%",
    left:"40%",
    borderRadius: 15,
    color:"dodgerblue",
    borderWidth:5,
    height: "15%",
    width:"15%",
    borderColor:"dodgerblue",
    
  
  },

  addtxt: {
    fontSize:19,
    fontWeight:"700",  
    bottom:"30%", 
    left:"15%", 
    color:"dodgerblue",
    
    
  },
});
