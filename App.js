import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import MainTab from './navigation/MainTabScreen'

const theme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'#9c27b0',
    accent:'#ce93d8',
    background:'#f3e5f5',
    text:'#4a148c',
    disable:'#eeeeee',
  },
};

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'
      drawerContentOptions={{
        activeTintColor: '#000',
        inactiveTintColor: '#fff',
        inactiveBackgroundColor:'#000',
        activeBackgroundColor:'#fff',
      }}
      >
        <Drawer.Screen name='Home' component={MainTab}/>
        <Drawer.Screen name='FAQ' component={MainTab}/>
        
      </Drawer.Navigator>
    </NavigationContainer>
</PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
