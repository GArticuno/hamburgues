import React from 'react';
import { MaterialCommunityIcons, MaterialIcons, AntDesign} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import { TouchableOpacity, Text } from 'react-native';

import styles from './assets/styles/app';
import Perfilscreen from './screens/Perfilscreen';
import Cardapioscreen from './screens/Cardapioscreen';
import Carrinhoscreen from './screens/Carrinhoscreen';



const Tab = createBottomTabNavigator();
const CarrinhoStack = createStackNavigator();

const theme={
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      primary:'#000000',
      accent:'#ce93d8',
      background:'#fff',
      text:'#4a148c',
      disable:'#eeeeee',
    },
  };

export default function App(){
    return(
        <PaperProvider theme={theme}>
        <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Cardapio"
          tabBarOptions={{
            activeTintColor: '#242424',
            inactiveTintColor: '#fff',
            inactiveBackgroundColor:'#242424',
            activeBackgroundColor:'#fff',
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
    );
}

const CarrinhoStackScreen = ({navigation}) => (
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
      backgroundColor:'#673ab7',
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