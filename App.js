import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom/tabs';

import HomeScreen from './Components/Home';
import SettingsScreen from './Components/Settings';

const Tab = createBottomTabNavigator();

function MyTabs(){
  return(
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );

}

export default function App(){

  return (
      <NavigationContainer>
        <MyTabs/>
      </NavigationContainer>
  );

}
