import React, {Component} from "react";
import {SafeAreaView, View, Text, FlatList, TouchableOpacity, StatusBar} from "react-native";
import {DefaultTheme,Card, Title, Paragraph, Button, Provider as PaperProvider, Searchbar} from "react-native-paper";
import { AntDesign} from "@expo/vector-icons";
import styles from "../assets/styles/Cardapio";
import menu from "../assets/json/cardapio.js";

const theme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:"#4caf50",
    accent:"#66bb6a",
    background:"#e8f5e9",
    text:"#fff",
    disable:"#eeeeee",
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

  renderHeader = () => {
    return (
      <PaperProvider theme={theme}>
        <Searchbar
        placeholder="Pesquise aqui..."
        placeholderTextColor="#fff"
        onChangeText={text => this.searchFilterFunction(text)}
        style={styles.procura}
      />
      </PaperProvider>
    );
  };

  searchFilterFunction = text => {    
    const newData = this.arrayholder.filter(item => {      
      const itemData = `${item.nome.toUpperCase()}`;
      
       const textData = text.toUpperCase();
        
       return itemData.indexOf(textData) > -1;    
    });
    
    this.setState({ data: newData });  
  };


  render(){

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
      backgroundColor="#000" 
      barStyle="light"
      />
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
                <Text style={styles.txt}>{item.ingredientes}</Text>
                <Button style={styles.icone}>
                  <AntDesign name={"shoppingcart"} size={30} color="#fff"/>
                </Button>
              </View>
            </Card.Content>
          </Card>
          
          </PaperProvider>);}}
        keyExtractor={(item) => item.nome}
        ListHeaderComponent={this.renderHeader}
      />
    </SafeAreaView>
  );
}
};