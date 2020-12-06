import { MaterialCommunityIcons, Feather, AntDesign, FontAwesome, SimpleLineIcons, EvilIcons} from '@expo/vector-icons';
import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import { Avatar, Divider} from 'react-native-paper';
import styles from '../assets/styles/Perfil';

export default function Perfilscreen(){
  return(
    <ScrollView style={{backgroundColor:'#fff'}}>
        <View style={styles.container}>
          <View style={styles.viewCard}>
            <View style={styles.viewAvatar}>
            <Avatar.Image size={180} style={styles.avatar}/>
            <View style={styles.nomeCentro}>
              <Text style={styles.texto}>Mateus Santos</Text>
            </View>
            </View>
            <Divider/>
              <TouchableOpacity style={styles.margem}>
                  <FontAwesome name='bell-o' size={25} style={styles.icone}/>
                  <Text style={styles.textoN}>Notificações</Text>
              </TouchableOpacity>
              <Divider/>
              <TouchableOpacity style={styles.margem}>
                  <MaterialCommunityIcons name='wallet-outline' size={25} style={styles.icone}/>
                  <Text style={styles.textoN}>Carteira</Text>
              </TouchableOpacity>
              <Divider/>
              <TouchableOpacity style={styles.margem}>
                  <FontAwesome name='heart-o' size={25} style={styles.icone}/>
                  <Text style={styles.textoN}>Favoritos</Text>
                </TouchableOpacity>
              <Divider/>
              <TouchableOpacity style={styles.margem}>
                  <AntDesign name='creditcard' size={25} style={styles.icone}/>
                  <Text style={styles.textoN}>Cartões</Text>
                </TouchableOpacity>
              <Divider/>
              <TouchableOpacity style={styles.margem}>
                  <SimpleLineIcons name='location-pin' size={25} style={styles.icone}/>
                  <Text style={styles.textoN}>Endereço</Text>
                </TouchableOpacity>
              <Divider/>
              <TouchableOpacity style={styles.margem}>
                  <Feather name='edit' size={25} style={styles.icone}/>
                  <Text style={styles.textoN}>Editar perfil</Text>
                </TouchableOpacity>
                <Divider/>
              <TouchableOpacity style={styles.margem}>
                  <EvilIcons name='gear' size={30} style={styles.icone}/>
                  <Text style={styles.textoN}>Configurações</Text>
                </TouchableOpacity>
                <Divider/>
              <TouchableOpacity style={styles.margem}>
                  <AntDesign name='questioncircleo' size={25} style={styles.icone}/>
                  <Text style={styles.textoN}>FAQ</Text>
                </TouchableOpacity>
          </View>
        </View>
    </ScrollView>
  );
}