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
 } from 'react-native';
 
 import axios from 'axios';
 import SyncStorage from 'sync-storage';
 
 
 
 const MakeEquiment = () => {
   const [text, onChangeText] = React.useState("Useless Text");
   
   const [name, onChangeName] = React.useState("Useless Text");
   const [owner, onChangeOwner] = React.useState("Useless Text");
   
   const [numberr, onChangeNumberr] = React.useState('text');
   const [number, onChangeNumber] = React.useState(null);
 
   const onPres = async ()=> {
     
     
    const result = SyncStorage.get('userName');
    console.log(result);
    
    //  const baseUrl = 'http://192.168.0.163:30000/makeEquipment';
        

    //  var formData = {
    //   manufacturer: text,
    //   equipmentNumber:numberr ,
    //   equipmentName: name,
    //   ownerName: owner 
    // }
    //  // Passing configuration object to axios
    //  axios({
    //    method: 'POST',
    //    url: baseUrl,
    //    data: { userName: formData },
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
 
 
 export default MakeEquiment;
 