import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, Alert} from 'react-native';
import { Button, List, Divider} from 'react-native-paper';
import { useAuth } from '../hooks/useAuth';
import homeImage from '../../assets/fondo.jpg';
import { useNavigation } from '@react-navigation/native';

const fondoArriba = require('../../assets/logo.jpeg');
const fondoAbajo = require('../assets/info.jpeg');


export default function AccountScreen() {
  const navigation = useNavigation();

  const handleItemClick = (screenName) => {
    navigation.navigate(screenName);
  };

  const items = [
    {
      title: 'Cambiar nombre y apellido',
      description: 'Cambiar nombre y apellido',
      icon: 'account-arrow-up-outline',
      screen: 'NameLastname',
    },
    {
      title: 'Cambiar email',
      description: 'Cambiar email ',
      icon: 'email-sync-outline',
      screen: 'Email',
    },
    {
      title: 'Cambiar nombre de usuario',
      description: 'Cambiar nombre de usuario',
      icon: 'account-convert',
      screen: 'User',
    },

    {
      title: 'Cambiar contraseña',
      description: 'Cambiar contraseña de tu cuenta',
      icon: 'onepassword',
      screen: 'Password',
    },
  ];
  const { user, logout } = useAuth();
  const handleLogout = () => {
    Alert.alert(
      'Cerrar sesión',
      '¿Estás seguro de que deseas cerrar la sesión?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Cerrar sesión',
          onPress: () => {
            logout(); // Realiza el cierre de sesión
          },
        },
      ]
    );
  };

  return (
    <ImageBackground source={homeImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.textcontainer}>Bienvenido</Text>
        <View style={styles.bottomHalf}>
          <View style={styles.userInfoContainer}>
            <ScrollView>
              <View style={styles.userInfo}>
                <Text style={styles.username}>Usuario: {user.username}</Text>
                <Text style={styles.username}>Email: {user.email}</Text>
                <View>
                  <List.Section>
                    {items.map((item, index) => (
                      <React.Fragment key={index}>
                        <List.Item 
                          title={item.title}
                          description={item.description}
                          left={() => <List.Icon color='green' icon={item.icon} />}
                          onPress={() => handleItemClick(item.screen)}
                          titleStyle={{ color: 'white' }}
                      
                        />
                        {index < items.length - 1 && <Divider style={{ height: 1.3 }} />}
                      </React.Fragment>
                    ))}
                  </List.Section>
                </View>
                <Button style={{ width: "100%", borderRadius: 5, backgroundColor: "green" }} mode="contained" onPress={handleLogout}>
                  Cerrar sesión
                </Button>
              </View>
            </ScrollView>
          </View>

        </View>

      </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  textcontainer: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 50,
  },
  topHalf: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomHalf: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 20,
    marginTop: -50,
  },
  avatarContainer: {
    width: 170, //tamaño del avatar
    height: 170,
    borderRadius: 60,
    overflow: 'hidden',
    margin: 87  // Ajuste para subir el avatar más arriba
  },
  avatar: {
    flex: 1,
    width: null,
    height: null,
  },
  userInfoContainer: {
    flex: 1,
    //backgroundColor: 'rgba(255, 255, 255, 0.7)', //fondo transparente
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  userInfo: {
    padding: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#ffffff'
  },
  email: {
    fontSize: 16,
    color: '#ffffff'
  },
});
