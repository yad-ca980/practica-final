import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomTabBarButton = ({ iconSource }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Inicio'); // Navega a la pantalla "Inicio" (HomeScreen)
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
      <Image source={iconSource} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'relative',
    top: -20, // Ajusta según sea necesario para que esté visible y alineada correctamente
    alignSelf: 'center', // Ajusta según sea necesario para la alineación horizontal
  },
  icon: {
    width: 64,
    height: 64,
    zIndex: 100, // Asegura que la imagen esté por encima de la barra de pestañas
    justifyContent: 'center', // Centra el contenido horizontalmente
  },
});

export default CustomTabBarButton;
