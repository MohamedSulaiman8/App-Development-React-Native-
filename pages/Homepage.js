import { useState } from "react";
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
function HomeScreen({ navigation }) {
    const [info,setInfo]=useState("Hello");
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=19a6f1df65984d9fb905dd0d3c2878e5`)
    .then(response=>response.json())
    .then(data=>{
      setInfo(data.articles)
    })
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.heading}>Get latest News Updates</Text>
          </View>
          <View style={{ height: 50 }}>
            <Text style={styles.sub1}>LATEST NEWS:</Text>
            <View style={styles.content}>
              <Text style={styles.sub1content}>
                {info[0].title}
              </Text>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: info[0].urlToImage,
                }}
              />
              <Button
                title="News"
                onPress={() => navigation.navigate('Second',{paramKey:info})}
              />
            </View>
            <View style={styles.content}>
              <Text style={styles.sub1content}>
                {info[1].title}
              </Text>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri:info[1].urlToImage ,
                }}
              />
              <Button title="News" onPress={() => navigation.navigate('Third',{paramKey:info})} />
            </View>
            <View style={styles.content}>
              <Text style={styles.sub1content}>
                {info[2].title}
              </Text>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: info[2].urlToImage,
                }}
              />
              <Button
                title="News"
                onPress={() => navigation.navigate('Fourth',{paramKey:info})}
              />
            </View>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footertext}>ALL RIGHTS RESERVED</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
  export default HomeScreen;