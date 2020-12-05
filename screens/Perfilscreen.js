import { MaterialCommunityIcons, Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { Avatar, Divider} from 'react-native-paper';
import styles from '../assets/styles/Perfil';

export default function Perfilscreen(){
  return(
        <View style={styles.container}>
          <View style={styles.viewCard}>
            <Avatar.Image size={130} style={styles.avatar}/>
            <View style={styles.nomeCentro}>
              <Text style={styles.texto}>Mateus Santos</Text>
            </View>
              <View style={styles.margem}>
                <TouchableOpacity>
                  <Entypo name='bell' size={25}/>
                  <Text>Notificações</Text>
                </TouchableOpacity>
              </View>
              <Divider/>
              <View style={styles.margem}>
                <TouchableOpacity>
                  <Entypo name='wallet' size={25}/>
                  <Text>Carteira</Text>
                </TouchableOpacity>
              </View>
              <Divider/>
              <View style={styles.margem}>
                <TouchableOpacity>
                  <MaterialIcons name='favorite' size={25}/>
                  <Text>Favoritos</Text>
                </TouchableOpacity>
              </View>
              <Divider/>
              <View style={styles.margem}>
                <TouchableOpacity>
                  <AntDesign name='creditcard' size={25}/>
                  <Text>Cartões</Text>
                </TouchableOpacity>
              </View>
              <Divider/>
              <View style={styles.margem}>
                <TouchableOpacity>
                  <MaterialIcons name='location-on' size={25}/>
                  <Text>Endereço</Text>
                </TouchableOpacity>
              </View>
              <Divider/>
              <View style={styles.margem}>
                <TouchableOpacity>
                  <MaterialCommunityIcons name='account-edit' size={25}/>
                  <Text>Editar perfil</Text>
                </TouchableOpacity>
              </View>
              <Divider/>
          </View>
        </View>
  );
}