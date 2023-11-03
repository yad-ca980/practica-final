import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Card({ characters }) {
  const navigation = useNavigation();
  
  const goToPersonaje = () => {
    navigation.navigate('DetallePersonaje', {
      name: characters.name,
      image: characters.image,
      id: characters.id,
      gender: characters.gender,
      species: characters.species,
      status: characters.status,
      origin: characters.origin.name,
    });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={goToPersonaje} >
      <View style={styles.container}>
        <View style={styles.textColumn}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.text}>{characters.name}</Text>
          <Text style={styles.label}>ID:</Text>
          <Text style={styles.text}>{characters.id}</Text>
          <Text style={styles.label}>Species:</Text>
          <Text style={styles.text}>{characters.species}</Text>
        </View>
        <View style={styles.imageContainer}>
          {characters.image && (
            <Image
              source={{ uri: characters.image }}
              style={styles.image}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#97CE4C',
    marginVertical: 10,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
  },
  label: {
    color: 'white',
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    marginBottom: 5, // Agregar margen inferior para separar las etiquetas y los valores
  },
  imageContainer: {
    alignItems: 'center', // Centrar la imagen verticalmente
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
