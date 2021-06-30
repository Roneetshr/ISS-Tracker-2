import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import HomeScreen from './Screens/HomeScreen';
import ISSLocatationScreen from './Screens/LocationScreen';
import MeteorScreen from './Screens/Meteor';




const Stack = createStackNavigator()

function App(){

  <NavigationContainer>
    <Stack.Navigator initialRouteName = "Home" screenOptions = {{
      headerShown:false,
    }}>
      <Stack.Screen name = "Home" component = {HomeScreen}/>
      <Stack.Screen name = "Location" component = {ISSLocatationScreen}/>
      <Stack.Screen name = "Meteor" component = {MeteorScreen}/>

    </Stack.Navigator>
  </NavigationContainer>

}

export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
