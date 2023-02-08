import {useState} from 'react';
import HomeScreen from './pages/Homepage';
import SecondScreen from './pages/Secondpage';
import ThirdScreen from './pages/Thirdpage';
import FourthScreen from './pages/Fourthpage';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  Alert,
  TouchableHighlight,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import { NavigationContainer, navigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'beige',
    height: 990,
  },
  title: {
    backgroundColor: 'maroon',
    height: 120,
    fontWeight: 'bold',
  },
  heading: {
    padding: 20,
    fontSize: 33,
    color: 'beige',
    textAlign: 'center',
  },
  sub1: {
    fontSize: 25,
    padding: 10,
    color: 'red',
    fontWeight: 'bold',
  },
  sub1content: {
    padding: 20,
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 150,
    height: 100,
    marginLeft: 90,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  content: {
    height:255,
    backgroundColor: 'lightgrey',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  footer: {
    marginTop: 770,
    height:150,
    backgroundColor: 'maroon',
  },
  footertext: {
    padding:10,
    textAlign: 'center',
    color: 'beige',
  },
  contentmain: {
    padding: 20,
    backgroundColor: 'lightgrey',
  },
  maincontainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Main page' }}
        />
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{ title: 'News' }}
        />
        <Stack.Screen
          name="Third"
          component={ThirdScreen}
          options={{ title: 'News' }}
        />
        <Stack.Screen
          name="Fourth"
          component={FourthScreen}
          options={{ title: 'News' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;