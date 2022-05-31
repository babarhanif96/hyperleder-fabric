'use strict';

import React, { useEffect, Component, useState } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Alert
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import axios from 'axios';






class ScanScreen extends Component {

  
 
  

  

  componentDidMount() {



//     const baseUrl = 'http://192.168.0.167:30000/addUser';

// // Passing configuration object to axios
// axios({
//   method: 'post',
//   url: baseUrl  ,
//   data: { userName: 'ali' },
//   // data: { key: '11'},
// }).then((response) => {
//   console.log(response.data);
// }).catch(function(error) {
//     console.log('There has been a problem with your fetch operation: ' + error.message);
//      // ADD THIS THROW error
//        throw error;
//      });

    //  const baseUrll = 'http://192.168.0.167:30000/makeEquipment';

    //  const formData = {
    //   manufacturer: 'babar hanif',
    //   equipmentNumber:'1234',
    //   equipmentName: 'pesticide',
    //   ownerName: 'ali',
    // }

    //  axios({
    //   method: 'post',
    //   url: baseUrll ,
    //   data: formData,
     
    //   // data: { key: '11'},
    // }).then((response) => {
    //   console.log(response);
    // }).catch(function(error) {
    //     console.log('There has been a problem with your fetch operation: ' + error.message);
    //      // ADD THIS THROW error
    //        throw error;
    //      });





        //  const baseUrlll = 'http://192.168.0.167:30000/queryByKey';

         
    
        //  axios({
        //   method: 'get',
        //   url: baseUrlll ,
        //   data: { key: '1234' },
         
        // }).then((response) => {
        //   console.log(response);
        // }).catch(function(error) {
        //     console.log('There has been a problem with your fetch operation: ' + error.message);
        //      // ADD THIS THROW error
        //        throw error;
        //      });











        // const baseUrllll = 'http://192.168.0.167:30001/addUser';

        // // Passing configuration object to axios
        // axios({
        //   method: 'POST',
        //   url: baseUrllll ,
        //   data: { userName: 'abcd' },
        //   // data: { key: '11'},
        // }).then((response) => {
        //   console.log(response.data);
        // })



            


//     //  fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // .then(response => response.json())
//     // .then(json => console.log(json))
//     // .catch(function(error) {
//     //   console.log('There has been a problem with your fetch operation: ' + error.message);
//     //    // ADD THIS THROW error
//     //     throw error;
//     //   });
  }


 onSuccess =     (e) => {
  
   

    // console.log(e.data);
    // alert(e.data);


    axios.get('http://192.168.0.163:30000/queryByKey', { params: { key: e.data } })
    .then((response) => {
      console.log(response.data.Record)
      alert(JSON.stringify(response.data.Record))
    })

    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err)

    // );

    // fetch('http://192.168.0.167:30000/queryByKey' )
    // .then((response) => console.log(response))

    
    // const baseUrl = 'https://reactnative.dev/movies.json';
    
    // // Passing configuration object to axios
    // axios({
    //   method: 'get',
    //   url: baseUrl,
    // }).then((response) => {
    //   console.log(response.data);
    // });

    

  }










render() {




  return (



    
    <QRCodeScanner
      onRead={this.onSuccess}
      flashMode={RNCamera.Constants.FlashMode.off}
      topContent={
        <Text style={styles.centerText}>
          Go to{' '}
          <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
          your computer and scan the QR code.
        </Text>
      }
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>OK. Got it!</Text>
        </TouchableOpacity>
      }

      
    />
  );
}
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});


export default ScanScreen;