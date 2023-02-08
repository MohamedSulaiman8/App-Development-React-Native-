import { useState } from "react";
import { useRoute } from "@react-navigation/native";
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
  } from 'react-native';
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
  function ThirdScreen({ navigation }) {
    const route=useRoute();
    let info=route.params.paramKey
    return (
      <View>
        <View style={styles.title}>
          <Text style={styles.heading}>DESCRIPTION</Text>
        </View>
        <View styles={styles.maincontainer}>
          <Text style={styles.contentmain}>
           {info[1].description}
          </Text>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: info[1].urlToImage,
            }}
          />
        </View>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
      </View>
    );
  }
  export default ThirdScreen;