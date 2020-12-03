import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import {TextInput, DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

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

export default function Perfilscreen(){
  return(
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <View>
            <View style={styles.margem}>
              <Text style={styles.texto}>Nome:</Text>
              <TextInput style={[styles.textinput, {width:270}]} 
              mode='flat'
              disabled={true}
              selectionColor='#9c5ec3'
              underlineColor='#9c5ec3'
              />
            </View>
            <View style={styles.margem}>
              <Text style={styles.texto}>Idade:</Text>
              <TextInput style={[styles.textinput, {width:50}]}
              mode='flat'
              disabled={true}
              selectionColor='#9c5ec3'
              underlineColor='#9c5ec3'
              keyboardType='numeric'
              maxLength= {2}
              />
            </View>
            <View style={styles.margem}>
              <Text style={styles.texto}>Sexo:</Text>
                <TextInput
                style={[styles.textinput, {width:150}]}
                mode='flat'
                disabled={true}
                selectionColor='#9c5ec3'
                underlineColor='#9c5ec3'
                />
            </View>
            <View style={styles.margem}>
              <Text style={styles.texto}>Email:</Text>
              <TextInput style={[styles.textinput, {width:270}]}
              mode='flat'
              disabled={true}
              selectionColor='#9c5ec3'
              underlineColor='#9c5ec3'
              />
            </View>
          </View>
        </View>
    </PaperProvider>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#c09cff',
  },
  margem:{
    flexDirection:'row',
    marginHorizontal:10,
    marginTop:30,
  },
  textinput:{
    marginLeft:10,
    color:'#d2b8ff',
    backgroundColor:'#ffffff',
    height:35,
    fontSize:18,
    top:10,
  },
  texto:{
    color:'#f5f5f5',
    height:30,
    alignSelf:'center',
    fontSize:17,
    top:10,
  },
});