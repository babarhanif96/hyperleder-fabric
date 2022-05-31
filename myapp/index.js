/**
 * @format
 */

import {AppRegistry} from 'react-native';
import ScanScreen from './scanner';
import App from './App';
import {name as appName} from './app.json';

import AddToWallet from './Screens/AddToWallet'
import MakeEquiment from './Screens/MakeEquipment';

AppRegistry.registerComponent(appName, () => App);
