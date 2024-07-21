import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import About from './pages/About.jsx';
import AntDesign from 'react-native-vector-icons/AntDesign'; 
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size, focused }) => (
              focused ? <Ionicons name="home" color={color} size={28} /> : <Ionicons name="home-outline" color={color} size={28} />
            ),
            tabBarStyle: {
              backgroundColor: 'white',
              borderTopColor: 'white',
              shadowColor: 'white',
              elevation: 0,
              marginBottom: 10,
              marginTop: 10,
            },
            tabBarLabelStyle: {
              fontSize: 14,
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'black',
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            headerShown: false,
            tabBarLabel: 'About',
            tabBarIcon: ({ color, size, focused }) => (
              <AntDesign name={focused ? "infocirlce" : "infocirlceo"} color={color} size={28} />
            ),
            tabBarStyle: {
              backgroundColor: 'white',
              borderTopColor: 'white',
              shadowColor: 'white',
              elevation: 0,
              marginBottom: 10,
              marginTop: 10,
            },
            tabBarLabelStyle: {
              fontSize: 14,
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'black',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size, focused }) => (
              focused ? <FontAwesome name="user" color={color} size={28} /> : <FontAwesome name="user-o" color={color} size={28} />
            ),
            tabBarStyle: {
              backgroundColor: 'white',
              borderTopColor: 'white',
              shadowColor: 'white',
              elevation: 0,
              marginBottom: 10,
              marginTop: 10,
            },
            tabBarLabelStyle: {
              fontSize: 14,
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'black',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
