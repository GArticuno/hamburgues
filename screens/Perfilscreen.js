import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import {TextInput, Avatar} from 'react-native-paper';

export default function Perfilscreen(){
  return(
        <View style={styles.container}>
          <View>
            <Avatar.Image size={130} style={styles.avatar}/>
            <View style={styles.nomeCentro}>
              <Text style={styles.texto}>Mateus Santos</Text>
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
          </View>
        </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f5f5f5',
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
    color:'#000',
    height:30,
    alignSelf:'center',
    fontSize:17,
    top:10,
  },
  avatar:{
    alignSelf:'center',
    marginTop:10,
  },
  nomeCentro:{
    alignSelf:'center',
  },
});