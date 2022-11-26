import React from 'react';

import { FontAwesome } from '@expo/vector-icons';
import { View, SafeAreaView, FlatList } from 'react-native';
import { Card, Paragraph, Title, Button } from 'react-native-paper';

import styles from './styles';
import { cardapio } from '../../json/cardapio';

const Carrinho = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cardapio}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => {
          return (
            <Card style={styles.card}>
              <Card.Content style={styles.content}>
                <Title style={styles.title}>{item.nome}</Title>
                <View style={styles.viewpreco}>
                  <Paragraph style={styles.paragrafo}>{item.direito}</Paragraph>
                  <Paragraph style={styles.txtpreco}>{item.preco}</Paragraph>
                </View>
              </Card.Content>
              <Card.Cover source={{ uri: item.foto }}/>
              <Card.Content style={styles.content}>
                <View style={styles.viewdesc}>
                  <Button>
                    <FontAwesome name={'trash-o'} size={30} color="#000"/>
                  </Button>
                </View>
              </Card.Content>
            </Card>
          )
        }}
      />
    </SafeAreaView>
  )
};

export default Carrinho;