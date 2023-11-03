import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import { addFavoriteApi, isFavoriteApi, removeFavoriteApi } from '../../api/favorito';
import { AuthContext } from '../../context/AuthContext';

export default function Favoritos(props) {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadFavorite, setReloadFavorite] = useState(false);

  // Obtén el usuario actual del contexto de autenticación
  const { user } = useContext(AuthContext);
  const userId = user.id; // Suponiendo que el usuario tiene un campo 'id'.

  useEffect(() => {
    (async () => {
      try {
        const response = await isFavoriteApi(userId, id); // Proporciona userId al verificar si es favorito.
        setIsFavorite(response);
      } catch (error) {
        console.error('Error al verificar si es favorito:', error);
      }
    })();
  }, [id, reloadFavorite]);

  const onReloadFavorite = () => {
    setReloadFavorite((prev) => !prev);
  };

  const addFavoritos = async () => {
    try {
      await addFavoriteApi(userId, id); // Proporciona userId al agregar a favoritos.
      onReloadFavorite();
    } catch (error) {
      console.error('Error al añadir a favoritos:', error);
    }
  };

  const removeFavoritos = async () => {
    try {
      await removeFavoriteApi(userId, id); // Proporciona userId al eliminar de favoritos.
      onReloadFavorite();
    } catch (error) {
      console.error('Error al eliminar de favoritos:', error);
    }
  }

  const iconColor = isFavorite ? "red" : "white";

  return (
    <View style={styles.container}>
      <IconButton
        icon="heart"
        iconColor={iconColor}
        size={40}
        onPress={isFavorite ? removeFavoritos : addFavoritos}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});