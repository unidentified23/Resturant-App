import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import backgroundB from "../assets/burger.jpg";
import { useNavigation } from "@react-navigation/native";

export default function Menu () {
  const navigate = useNavigation();

  const toFlourMenu = () => {
    navigate.navigate("flourMenu");
  };

  const toIntercuisine = () => {
    navigate.navigate("InterCuisine");
  };

  const toLocalCuisine =() => {
    navigate.navigate("LocalCuisine");
  };

  const toDesertsDrinks =() => {
    navigate.navigate("Deserts & Drinks");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.flourC} onPress={toFlourMenu}>
        <Text style={styles.FTxt}>Flour cuisine</Text>
        <View style={styles.ImgC}></View>
        <Text style={styles.thisInc}>This includes:</Text>
        <View style={styles.TxtC}>
          <Text style={styles.includes}>-Kota</Text>
          <Text style={styles.includes}>-Burger</Text>
          <Text style={styles.includes}>-Pizza </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.flourC} onPress={toLocalCuisine} >
        <Text style={styles.FTxt}>Local cuisine</Text>
        <View style={styles.ImgC}></View>
        <Text style={styles.thisInc}>This includes:</Text>
        <View style={styles.TxtC}>
          <Text style={styles.includes}>-Pap combo</Text>
          <Text style={styles.includes}>-Rice combo</Text>
          <Text style={styles.includes}>-Meat</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.flourC} onPress={toIntercuisine} >
        <Text style={styles.FTxt}>Internatinal cuisine</Text>
        <View style={styles.ImgC}></View>
        <Text style={styles.thisInc}>This includes:</Text>
        <View style={styles.TxtC}>
          <Text style={styles.includes}>-Pizza</Text>
          <Text style={styles.includes}>-Shwama</Text>
          <Text style={styles.includes}>-Samusa</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.flourC} onPress={toDesertsDrinks} >
        <Text style={styles.FTxt}>Deserts and Drinks</Text>
        <View style={styles.ImgC}></View>
        <Text style={styles.thisInc}>This includes:</Text>
        <View style={styles.TxtC}>
          <Text style={styles.includes}>-Ice Creams</Text>
          <Text style={styles.includes}>-Cakes</Text>
          <Text style={styles.includes}>-Virgin Cocktails</Text>
        </View>
      </TouchableOpacity>
      
      <Text style={styles.Rname}>Man's kitchen </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fad6a5",
    alignItems: "center",
    justifyContent: "center",
  },

  flourC: {
    backgroundColor: "#fad6a5",
    width: "95%",
    height: "20%",
    margin: "2%",
    borderColor: "black",
    borderWidth: 5,
    borderRadius: 20,
  },

  FTxt: {
    fontSize: 17,
    fontWeight: "900",
    margin: "2%",
    left: "5%",
  },

  ImgC: {
    backgroundColor: "black",
    height: "60%",
    width: "25%",
    left: "5%",
    borderRadius: 20,
  },

  thisInc: {
    fontSize: 17,
    fontWeight: "900",
    color: "black",
    left: "55%",
    bottom: "70%",
  },

  TxtC: {
    backgroundColor: "#fad6a5",
    width: "35%",
    height: "60%",
    bottom: "70%",
    left: "60%",
  },

  includes: {
    fontWeight: "900",
    fontSize: 15,
  },

  Rname: {
    fontWeight: "900",
    fontSize: 15,
  },
});
