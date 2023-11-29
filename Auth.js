import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/ProductDetailScreen';
import CartScreen from './screens/CartScreen';

// function BottomNavigator() {
//   const Tab = createBottomTabNavigator();
//   // options={{ headerShown: false }}

//   return (
//     // <NavigationContainer>
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={HomePage}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Entypo name="home" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Detail"
//         component={DetailPage}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Entypo name="home" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="First"
//         component={FirstPage}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Ionicons name="people-circle-outline" size={size} color={color} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//     // </NavigationContainer>
//   );
// }

function Auth() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: 'Detail',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default Auth;
