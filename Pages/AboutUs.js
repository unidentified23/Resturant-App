import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Menu () {
  return (
    <View style={styles.container}>

        <Text style={styles.abtTxt1}>
        Dillong pty ltd  Est 
        2023, brings you the best
        quality at a reasonable
        price ,we offer food,
        Drinks and entertainment
        that best suits your 
        mood we are based  in
        Mahwelereng  zone 1 
        2306  Malapolosa srt   
        </Text>

        <Text style={styles.abtTxt1}>
        for more information
        contact us on the following:

        </Text>
     
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

  abtTxt1 : {
    fontWeight:"600",
    width:"50%",
    height:"30%",
    fontSize: 17,
    left: "20%",
    bottom:"15%",
    marginVertical:"2%",


  },

});
