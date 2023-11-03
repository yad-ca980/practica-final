import React, { useState, useCallback, useContext } from 'react';
import { getFavoriteApi } from '../../api/favorito';
import axios from 'axios';
import HomeScreen from '../HomeScreen';
import { ENV } from '../../utils/constants';
import { useFocusEffect } from '@react-navigation/native';

import { AuthContext } from '../../context/AuthContext'; // Archivo de  autenticación.

export default function FavoritesScreen() {
  const [personajes, setPersonajes] = useState([]);
  const [characters, setCharacters] = useState([]);
  

  const { user } = useContext(AuthContext); // Obtiene el usuario autenticado desde la carpeta context , archivo AuthContext

  // Función para obtener la lista completa de personajes
  const fetchAllCharacters = async () => {
    const allCharactersData = [];

    let page = 1;
    let hasMoreData = true;

    while (hasMoreData) {
      const url = `${ENV.API_URL_RM}?page=${page}`;

      try {
        const response = await axios.get(url);
        if (response.data.results) {
          allCharactersData.push(...response.data.results);

          if (response.data.info.next) {
            page++;
          } else {
            hasMoreData = false;
          }
        } else {
          hasMoreData = false;
        }
      } catch (error) {
        console.error(error);
        break;
      }
    }

    return allCharactersData;
  };

  useFocusEffect(
    useCallback(() => {
      // Efecto que se ejecuta cuando la pantalla recibe el enfoque
      (async () => {
        // Se obtiene la lista de personajes favoritos del usuario autenticado
        const favoriteResponse = await getFavoriteApi(user.id); // Usar el ID del usuario autenticado.
        setPersonajes(favoriteResponse);

        // Se obtiene la lista completa de personajes
        const allCharactersData = await fetchAllCharacters();
        setCharacters(allCharactersData);
      })();
    }, [user.id]) // Se agrega el user.id como dependencia para que se actualice cuando el usuario cambie.
  );

  return (
    <HomeScreen
      // Se filtra y muestra los personajes favoritos en la pantalla principal
      characters={characters.filter((character) => personajes.includes(character.id))}
    />
  );
}