import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image,Button,Alert, TouchableOpacity } from 'react-native';

export default function App() {
  // Create a variable which is called counter // var counter
  // To change the value of the variable , I will use setCounter method..
  // counter = counter + 1 <-- In React normally you will not use this ..
  // The initial value is 0 , => var counter = 0
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello World. This is my first app</Text>
      <Text style={styles.subHeader}>I am so happy with this app</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'http://static.asiawebdirect.com/m/kl/portals/kuala-lumpur-ws/homepage/pagePropertiesOgImage/kuala-lumpur.jpg.jpg',
        }}
      />
       <Button
        title="Press me"
        onPress={() => 
         // Alert.alert('Simple Button pressed')
         // FOr the time being to test on web
         alert("Alert is pressed")
        }
      />

      <Text style={styles.subHeader}>Counter example</Text>
      <Text>{counter}</Text>
      <TouchableOpacity onPress={()=> setCounter(counter+1)} 
      style={styles.increment}>
      <Text style={styles.buttonColor}>Increment</Text>
      </TouchableOpacity>
       <TouchableOpacity onPress={()=>setCounter(counter-1)} 
       style={styles.decrement}>
      <Text style={styles.buttonColor}>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setCounter(0)} style={styles.reset}>
      <Text style={styles.buttonColor}>Reset</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize:24,
    color:'#f00'
  },
  subHeader: {
    fontSize:18,
    color:'blue',
    marginTop:8
  },
  tinyLogo: {
    width: 300,
    height: 200,
    marginTop:8
  },
  increment: {
    alignItems: "center",
    backgroundColor: "green",
   
    width:'100%',
    padding: 10
  },
  decrement: {
    alignItems: "center",
    backgroundColor: "blue",

    width:'100%',
    padding: 10
  },
  reset: {
    alignItems: "center",
    backgroundColor: "red",
    
    width:'100%',
    padding: 10
  },
  buttonColor: {
    color:'white'
  }

});
