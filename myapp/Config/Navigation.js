import React ,{useState, useEffect, useContext}from 'react';
import {View , Text} from "react-native";
import { NavigationContainer } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddToWallet from '../Screens/AddToWallet';
import MakeEquipment from '../Screens/MakeEquipment';
import Query from '../Screens/Query';
import QueryHistory from '../Screens/QueryHistory';

const Stack = createNativeStackNavigator()

function Mynavigation (){
    return(
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Manufacturer Org1" component={ AddToWallet} />
            <Stack.Screen name="Manufacturer" component={ MakeEquipment} />
        
          </Stack.Navigator>
        </NavigationContainer>
    )
    }
    
    export default Mynavigation;