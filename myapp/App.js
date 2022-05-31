/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
 import SyncStorage from 'sync-storage';
import ScanScreen from './scanner';
// import AddToWallet from './Screens/AddToWallet';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Wallet')}
    />
  </View>
  );
}




const AddToWallet = ({navigation}) => {


  





  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  const onPres = async ()=> {
    
  
    const baseUrl = 'http://192.168.0.163:30000/addUser';
    SyncStorage.set('userName', text);
    


    navigation.navigate('makeEquipment')
    
    axios({
      method: 'POST',
      url: baseUrl,
      data: { userName: text },
    }).then((response) => {
      console.log(response.data);
      alert(response.data);
    });


  }
  return (
    <View style={styles.view}>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={number}
        placeholder="Add user"
        
      />
       

<Button
  onPress={onPres}
  title="Submit"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>


    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'white',
    backgroundColor: 'black'


  },
  view: {
    backgroundColor: 'white',
    height: '100%'

  },
});


// =========================makeEquiment========================\




 
const MakeEquiment = ({navigation}) => {
  const [text, onChangeText] = React.useState("Useless Text");
  
  const [name, onChangeName] = React.useState("Useless Text");
  const [username, onChangeUserName] = React.useState(null);
  const [owner, onChangeOwner] = React.useState("Useless Text");
  
  const [numberr, onChangeNumberr] = React.useState('text');
  const [number, onChangeNumber] = React.useState(null);

  const onPres = async ()=> {
    
    
   const result = SyncStorage.get('userName');
   console.log(result);
   
    const baseUrll = 'http://192.168.0.163:30000/makeEquipment';
       

    const formData = {
     manufacturer: text,
     equipmentNumber:numberr ,
     equipmentName: name,
     ownerName: owner ,
    // manufacturer: 'aaaaaaaaa',
    //  equipmentNumber: '1111111111' ,
    //  equipmentName: 'ddddddddd',
    //  
   }
    // Passing configuration object to axios
    axios({
      method: 'post',
      url: baseUrll,
      data: formData ,
    }).then((response) => {
      console.log(response.config.data);
      alert(response.config.data);
      
    }).catch(function(error)
    {
      throw error;
    })
    navigation.navigate('byKey')

  }
  return (
    <View style={styles.view}>

<TextInput
        style={styles.input}
        onChangeText={onChangeUserName}
        value={number}
        placeholder="user name"
        
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={number}
        placeholder="Manufacturer"
        
      />
       <TextInput
        style={styles.input}
        onChangeText={onChangeNumberr}
        value={number}
        placeholder="Equipment Number"
        
      />
       <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={number}
        placeholder="Equipment Name"
        
      />
       <TextInput
        style={styles.input}
        onChangeText={onChangeOwner}
        value={number}
        placeholder="Owner Name"
        
      />

<Button
  onPress={onPres}
  title="Submit"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
    </View>
  );
};

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     color: 'white',
//     backgroundColor: 'black'


//   },
//   view: {
//     backgroundColor: 'white',
//     height: '100%'

//   },
// });





// ========================end makeEquiment=============================


// ===========================queryByKey=================================


const ByKey = ({navigation}) => {


  





  const [key, onChangeKey] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  const onPres = async ()=> {
    
  
    const baseUrlll = 'http://192.168.0.163:30000/queryByKey';
    // SyncStorage.get('userName', textt);
    


    axios.get('http://192.168.0.163:30000/queryByKey', { params: { key: key } })
    .then((response) => {
      console.log(response.data.Record)
      alert(JSON.stringify(response.data.Record))
      navigation.navigate('scan')
    })



    
    // axios({
    //   method: 'GET',
    //   url: baseUrlll,
    //   data: { key : key},
    // }).then((response) => {
    //   console.log(response.data);
    //   alert(response);
    // }).catch(function(error)
    // {
    //   throw error;
    // })


  }
  return (
    <View style={styles.view}>

      <TextInput
        style={styles.input}
        onChangeText={onChangeKey}
        value={key}
        placeholder="Add user"
        
      />
       

<Button
  onPress={onPres}
  title="Submit"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>


    </View>
  );
};

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     color: 'white',
//     backgroundColor: 'black'


//   },
//   view: {
//     backgroundColor: 'white',
//     height: '100%'

//   },
// });





// ==============================end queryBy Key==============================



const Stack = createNativeStackNavigator();

const App = () => {
 

  return (      
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Wallet" component={AddToWallet} />
      <Stack.Screen name="makeEquipment" component={MakeEquiment} />
      <Stack.Screen name="byKey" component={ByKey} />
      <Stack.Screen name="scan" component={ScanScreen} />

    
    </Stack.Navigator>
  </NavigationContainer>
  );
};




export default App;
