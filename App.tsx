import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { MaterialCommunityIcons, MaterialIcons, AntDesign} from '@expo/vector-icons';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Perfilscreen from './src/screens/Perfil';
import Cardapioscreen from './src/screens/Cardapio';
import Carrinhoscreen from './src/screens/Carrinho';

const Tab = createBottomTabNavigator();
const CarrinhoStack = createStackNavigator();

const CarrinhoStackScreen = () => (
  <CarrinhoStack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:'#242424',
        shadowColor:'#242424',
        elevation:0,
      },
      headerTintColor:'#242424',
    }}
  >
    <CarrinhoStack.Screen 
    name='Carrinho' 
    component={Carrinhoscreen}
    options={{
      title:'',
      headerLeft: ()=>(
        <TouchableOpacity>
          <Text style={styles.texto}>Pedidos em Andamento</Text>
        </TouchableOpacity>
      ),
      headerRight: ()=>(
        <TouchableOpacity>
        <Text style={styles.texto}>Pedidos Anteriores</Text>
      </TouchableOpacity>
      )
    }}/>
  </CarrinhoStack.Navigator>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PaperProvider theme={DefaultTheme}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Cardapio"
            screenOptions={{
              tabBarActiveBackgroundColor: '#fff',
              tabBarActiveTintColor: '#242424',
              tabBarInactiveTintColor: '#fff',
              tabBarInactiveBackgroundColor: '#242424',
              headerShown: false,
            }}
          >
            <Tab.Screen 
              name="Carrinho" 
              component={CarrinhoStackScreen} 
              options={{
                tabBarLabel:'Carrinho',
                tabBarIcon:({color}) =>(
                  <AntDesign name={'shoppingcart'} size={25} color={color} />
                ),
              }}/>
            <Tab.Screen 
              name="Cardapio" 
              component={Cardapioscreen} 
              options={{
                tabBarLabel:'Cardápio',
                tabBarIcon:({color}) =>(
                  <MaterialIcons name={'restaurant-menu'} size={25} color={color} />
                ),
              }}/>
            <Tab.Screen 
              name="Perfil" 
              component={Perfilscreen}
              options={{
                tabBarLabel:'Perfil',
                tabBarIcon:({color}) =>(
                  <MaterialCommunityIcons name={'account'} size={25} color={color} />
                ),
              }}/>
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  texto:{
    color:'#fff',
    padding:30,
    fontSize:15,
    width:170,
  },
});
