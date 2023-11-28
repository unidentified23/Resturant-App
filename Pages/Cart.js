import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import cocktail from "../assets/cocktail.jpg";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
function Cart({ product }) {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Small Burger",
      image: cocktail,
      price: "R45.00",
      Quantity: 0,
    },
    {
      id: 4,
      name: "Small Burger",
      image: cocktail,
      price: "R46.00",
      Quantity: 0,
    },
    {
      id: 2,
      name: "Small Burger",
      image: cocktail,
      price: "R45.00",
      Quantity: 0,
    },
    {
      id: 3,
      name: "Small Burger",
      image: cocktail,
      price: "R46.00",
      Quantity: 0,
    },
  ]);

  console.log(product);

  if (product) {
    const updatedNewArray = [...items, product];
    setItems(updatedNewArray);
    console.log(items);
  }

  const renderItem = ({ item }) => (
    <View style={styles.arrCont}>
      <View style={styles.image}>
        <Image style={styles.imageIN} source={item.image} />
      </View>

      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.price}</Text>
      <TouchableOpacity style={styles.button}>
        <Icon
          name="delete-forever"
          size={28}
          color="dodgerblue"
          style={styles.addtxt}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={{ backgroundColor: "red" }}
        scrollEnabled
        data={items}
        renderItem={renderItem}
      />
    </View>
  );
}
export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    marginTop: StatusBar.currentHeight || 0,
  },
  Fcont: {
    backgroundColor: "red",
    width: "100%",
    height: 200,
  },
  item: {
    width: "80%",
    fontWeight: "700",
    fontSize: 16,
    left: "30%",
    bottom: "90%",
  },
  arrCont: {
    width: "95%", // Set width for two columns with a small gap
    height: 120,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "dodgerblue",
    borderWidth: 5,
    marginVertical: 2,
    alignItems: "center",
    alignSelf: "center",
  },
  image: {
    width: "30%",
    height: "90%",
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: "dodgerblue",
    right: "33%",
    bottom: "4%",
  },
  imageIN: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "dodgerblue",
  },
  button: {
    bottom: "90%",
    left: "43%",
    borderRadius: 15,
    borderWidth: 5,
    height: "35%",
    width: "10%",
    borderColor: "dodgerblue",
  },

  addtxt: {
    bottom: "5%",
    right: "1%",
    color: "dodgerblue",
  },
});
