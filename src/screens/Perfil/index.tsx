import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {
  MaterialCommunityIcons,
  Feather,
  AntDesign,
  FontAwesome,
  SimpleLineIcons,
  EvilIcons
} from '@expo/vector-icons';
import { Avatar, Divider} from 'react-native-paper';

import Typography from '../../components/Typography';
import styles from './styles';

const Perfil = () => {
  return(
    <ScrollView style={{backgroundColor:'#fff'}}>
        <View style={styles.container}>
          <View style={styles.viewCard}>
            <View style={styles.viewAvatar}>
              <Avatar.Image size={130} style={styles.avatar} source={require('../../assets/avatar.jpg') }/>
              <View style={styles.nomeCentro}>
                <Text style={styles.texto}>Garticuno</Text>
              </View>
            </View>
            <Divider/>
            <TouchableOpacity style={styles.margem}>
                <FontAwesome name='bell-o' size={25} style={styles.icone}/>
                <Typography text="Notificações" />
            </TouchableOpacity>
            <Divider/>
            <TouchableOpacity style={styles.margem}>
                <MaterialCommunityIcons name='wallet-outline' size={25} style={styles.icone}/>
                <Typography text="Carteira" />
            </TouchableOpacity>
            <Divider/>
            <TouchableOpacity style={styles.margem}>
                <FontAwesome name='heart-o' size={25} style={styles.icone}/>
                <Typography text="Favoritos" />
              </TouchableOpacity>
            <Divider/>
            <TouchableOpacity style={styles.margem}>
                <AntDesign name='creditcard' size={25} style={styles.icone}/>
                <Typography text="Cartões" />
              </TouchableOpacity>
            <Divider/>
            <TouchableOpacity style={styles.margem}>
                <SimpleLineIcons name='location-pin' size={25} style={styles.icone}/>
                <Typography text="Endereço" />
              </TouchableOpacity>
            <Divider/>
            <TouchableOpacity style={styles.margem}>
                <Feather name='edit' size={25} style={styles.icone}/>
                <Typography text="Editar perfil" />
              </TouchableOpacity>
              <Divider/>
            <TouchableOpacity style={styles.margem}>
                <EvilIcons name='gear' size={30} style={styles.icone}/>
                <Typography text="Configurações" />
              </TouchableOpacity>
              <Divider/>
            <TouchableOpacity style={styles.margem}>
              <AntDesign name='questioncircleo' size={25} style={styles.icone}/>
              <Typography text="FAQ" />
            </TouchableOpacity>
          </View>
        </View>
    </ScrollView>
  );
};

export default Perfil;
