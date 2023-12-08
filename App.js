import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons"; 
import Home from './Pages/Home';
import SignUp from './Pages/SingUp';
import Login from './Pages/Login';
import Menu from './Pages/Menu';
import Cart from './Pages/Cart';
import AboutUs from './Pages/AboutUs';
import flourMenu from './Pages/flourMenu';
import DesertsDrinks from './Pages/Deserts&Drinks';
import LocalCuisine from './Pages/LocalCuisine';
import InterCuisine from './Pages/InterCuisine';
import Admin from './Pages/Admin';
import ViewItem from './Pages/Viewitem';
import SignOutButton from './Pages/components/SignOutBtn';



export default function App() {
  const Tab = createBottomTabNavigator();
  
  return (
    <NavigationContainer style={styles.container}>
      <SignOutButton/>
    <Tab.Navigator  screenOptions={{tabBarStyle: { borderRadius:15, bottom:"1%", backgroundColor: "dodgerblue", height:"10%",width:"95%",alignSelf:"center", color:"white" },
                                    headerStyle: { backgroundColor: 'dodgerblue',},
                                    headerTitle: { color:'white'}
                                  }
    
    
  } initialRouteName="SignUp"
    
    >
    <Tab.Screen 
    name="Home" 
    component={Home} 
    options={{
    
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="home" color="white" size={30} />
      ),
    }}
    
    />
    <Tab.Screen name="Menu"
     component={Menu} 
     options={{
      
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="fast-food-outline" color="white" size={30} />
      ),
    }}
     />
    <Tab.Screen
     name="Login"
     component={Login} 
     options={{
      tabBarVisible: false, //like this
      tabBarButton: (props) => null,//hide tab bar on this screen
    
  }}
     />
      <Tab.Screen
     name="ViewItem"
     component={ViewItem} 
     options={{
      tabBarVisible: false, //like this
      tabBarButton: (props) => null,//hide tab bar on this screen

  }}
     />
    <Tab.Screen
     name="SignUp" 
     component={SignUp} 
     options={{
      tabBarVisible: false, //like this
      tabBarButton: (props) => null,//hide tab bar on this screen
      tabBarShowLabel:false,
    

  }}
     />

<Tab.Screen
     name="Admin"
     component={Admin} 
     options={{
      tabBarVisible: false, //like this
      tabBarButton: (props) => null,//hide tab bar on this screen

  }}
     />

    <Tab.Screen name="Cart"
     component={Cart} 
     options={{
      
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="cart-outline" color="white" size={30} />
      ),
    }}
     />
 

  <Tab.Screen name="About us"
   component={AboutUs}
   options={{
    
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="call" color="white" size={30} />
    ),
  }}
   />
     
     <Tab.Screen
     name="flourMenu" 
     component={flourMenu} 
     options={{
      tabBarVisible: false, //like this
      tabBarButton: (props) => null,//hide tab bar on this screen

  }}
     />

<Tab.Screen
     name="LocalCuisine" 
     component={LocalCuisine} 
     options={{
      tabBarVisible: false, //like this
      tabBarButton: (props) => null,//hide tab bar on this screen

  }}
     />

<Tab.Screen
     name="Deserts & Drinks" 
     component={DesertsDrinks} 
     options={{
      tabBarVisible: false, //like this
      tabBarButton: (props) => null,//hide tab bar on this screen

  }}
     />

<Tab.Screen
     name="InterCuisine" 
     component={InterCuisine} 
     options={{
      tabBarVisible: false, //like this
      tabBarButton: (props) => null,//hide tab bar on this screen

  }}
     />
    

    </Tab.Navigator>

    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
