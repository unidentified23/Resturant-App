import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import BottomTabBar from '@react-navigation/bottom-tabs';


export default function App() {
  const Tab = createBottomTabNavigator();
  
  return (
    <NavigationContainer style={styles.container}>
      <SignOutButton/>
    <Tab.Navigator  screenOptions={{ headerStyle: { backgroundColor: '#FAD6A5'}}
    
  } initialRouteName="SignUp"
    tabBarOptions={{
      borderRadius: 15,
      bottom:25,
    }}
    >
    <Tab.Screen 
    name="Home" 
    component={Home} 
    
    />
    <Tab.Screen name="Menu" component={Menu} />
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

    <Tab.Screen name="Cart" component={Cart} />
    <Tab.Screen 
     name="AboutUs" 
     component={AboutUs} 
     options={{
      tabBarVisible: false, //like this
      tabBarButton: (props) => null,//hide tab bar on this screen

  }}
     />

  <Tab.Screen name="About us" component={AboutUs} />
     
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
