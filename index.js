/**
 * @format
 */
//import App from './src/screens/App'
import {AppRegistry} from 'react-native';
import Agenda from './src/screens/Agenda';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Agenda);
