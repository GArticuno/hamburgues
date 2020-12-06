import {FontAwesome } from '@expo/vector-icons';
import React, {Component} from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native';
import {Card, Paragraph, Title, Button, DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import styles from '../assets/styles/Carrinho';
import menu from '../assets/json/cardapio.js';

const theme={
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      primary:'#4caf50',
      accent:'#66bb6a',
      background:'#e8f5e9',
      text:'#000',
      disable:'#eeeeee',
    },
  };
  
  
  
  export default class App extends Component{
  
    constructor(props) {
      super(props);
  
      this.state = {
        data: menu
      };
      this.arrayholder = menu;
    }

    render(){
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => {
            return(
            <PaperProvider theme={theme}>
            <Card style={styles.card}>
              <Card.Title/>
              <Card.Content>
              <Title style={styles.title}>{item.nome}</Title>
              <View style={styles.viewpreco}>
                <Paragraph style={styles.paragrafo}>{item.direito}</Paragraph>
                <Paragraph style={styles.txtpreco}>{item.preco}</Paragraph>
              </View>
              </Card.Content>
              <Card.Cover source={{uri : item.foto}}/>
              <Card.Content>
                <View style={styles.viewdesc}>
                <Button>
                    <FontAwesome name={'trash-o'} size={30} color="#000"/>
                </Button>
                </View>
              </Card.Content>
            </Card>
            
            </PaperProvider>);}}
          keyExtractor={(item) => item.nome}
        />
      </SafeAreaView>
    );
  }
  };