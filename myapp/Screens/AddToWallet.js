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
   TextInput,
   View,
   Button,
   AsyncStorageStatic
   
 } from 'react-native';
 
 import axios from 'axios';
 import SyncStorage from 'sync-storage';
 
 
 const AddToWallet = () => {


  





   const [text, onChangeText] = React.useState("Useless Text");
   const [number, onChangeNumber] = React.useState(null);
 
   const onPres = async ()=> {
     
   
     const baseUrl = 'http://192.168.0.163:30000/addUser';
     SyncStorage.set('userName', text);
     const result = SyncStorage.get('userName');
     console.log(result);
     // Passing configuration object to axios
    //  axios({
    //    method: 'POST',
    //    url: baseUrl,
    //    data: { userName: text },
    //  }).then((response) => {
    //    console.log(response.data);
    //    alert(response.data);
    //  });


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
 
 
 export default AddToWallet;
 