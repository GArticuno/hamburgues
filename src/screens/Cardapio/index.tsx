import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import { Card, Title, Paragraph, Button, Searchbar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';
import { cardapio } from '../../json/cardapio';
import type { CardapioProps } from '../../json/types';

const Cardapio = () => {
  const [data, setData] = useState<CardapioProps[]>(cardapio);
  const [value, setValue] = useState(``);

  const searchFilterFunction = (text: string) => {
    setValue(text);
    const newData = cardapio.filter(item => {
      const itemData = `${item.nome.toUpperCase()}`;

      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    setData(newData);
  };

  const renderHeader = () => (
    <Searchbar
      placeholder="Pesquise aqui..."
      placeholderTextColor="#fff"
      value={value}
      onChangeText={text => searchFilterFunction(text)}
      style={styles.procura}
    />
  );

    return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
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
                <Text style={styles.txt}>{item.ingredientes}</Text>
                <Button>
                  <AntDesign name={'shoppingcart'} size={30} color="#fff"/>
                </Button>
              </View>
            </Card.Content>
          </Card>
          )
        }}
        keyExtractor={(item) => item.nome}
        ListHeaderComponent={renderHeader}
      />
    </SafeAreaView>
    )
};

export default Cardapio;