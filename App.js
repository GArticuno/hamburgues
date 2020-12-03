import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

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

function MainTab({navigation}){
  return(
    <Text>Em construção</Text>
  );
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
    <StatusBar backgroundColor='#000' style="light"/>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'
      drawerContentOptions={{
        activeTintColor: '#ffffff',
        inactiveTintColor: '#cfcfcf',
        inactiveBackgroundColor:'#673ab7',
        activeBackgroundColor:'#7e57c2',
      }}
      >
        <Drawer.Screen name='Home' component={MainTab}/>
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
