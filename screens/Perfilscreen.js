import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import {View, Text} from 'react-native';
import {TextInput, Avatar} from 'react-native-paper';
import styles from '../assets/styles/Perfil';

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