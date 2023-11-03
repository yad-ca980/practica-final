import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import Favoritos from '../../components/Favoritos/Favoritos'

const DetallePersonaje = (props) => {
  const { route: { params } } = props;

  return (
    <ImageBackground source={require('../../../assets/fondo.jpg')} style={styles.backgroundImage}>
      

      <View style={styles.container}>
     

        {/* Contenedor para la imagen y el nombre */}
        <View style={styles.imageNameContainer}>
          <Image style={styles.image} source={{ uri: params.image }} />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{params.name}</Text>
            
            <Favoritos id={params.id}/>
          </View>
        </View>
        {/* Contenedor para la información */}
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Estado:</Text>
            <Text style={styles.infoValue}>{params.status}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Especie:</Text>
            <Text style={styles.infoValue}>{params.species}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Género:</Text>
            <Text style={styles.infoValue}>{params.gender}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Origen:</Text>
            <Text style={styles.infoValue}>{params.origin}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 90,
  },
  imageNameContainer: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  image: {
    marginBottom: 10,
    width: 250,
    height: 250,
    borderRadius: 2000,
  },
  nameContainer: {
    flexDirection: 'column',
    alignItems: 'center',  // Alineación vertical
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',  // Cambié el color del nombre 
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor: 'transparent',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    color: "white"
  },
  infoLabel: {
    fontWeight: 'bold',
    marginRight: 10,
    flex: 1,
    color: "white"
  },
  infoValue: {
    flex: 2,
    color: "white"
  },
  favoriteIcon: {
    marginTop: 10,
  },
});

export default DetallePersonaje;
