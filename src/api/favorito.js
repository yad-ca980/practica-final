import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from 'lodash';
import { ENV } from "../utils/constants";

// Crear la función que trae los favoritos de un usuario ya logueado
export const getFavoriteApi = async (userId) => {
  try {
    const response = await AsyncStorage.getItem(`${ENV.STORAGE.FAVORITE}_${userId}`);
    return JSON.parse(response || "[]"); // Si no hay datos, devuelve un arreglo vacío.
  } catch (error) {
    console.log(error);
  }
};

//  Función que añade favoritos para un usuario ya logueado
export const addFavoriteApi = async (userId, id) => {
  try {
    const favorites = await getFavoriteApi(userId);
    favorites.push(id);
    await AsyncStorage.setItem(`${ENV.STORAGE.FAVORITE}_${userId}`, JSON.stringify(favorites));
  } catch (error) {
    console.log(error);
  }
};

// Se crea la función que verifica si un elemento es favorito para un usuario
export const isFavoriteApi = async (userId, id) => {
  try {
    const favorites = await getFavoriteApi(userId);
    return includes(favorites, id);
  } catch (error) {
    console.log(error);
    return false;
  }
};

// Se crea la función que elimina un elemento de la lista de favoritos de un usuario 
export const removeFavoriteApi = async (userId, id) => {
  try {
    const favorites = await getFavoriteApi(userId);
    const newFavorites = pull(favorites, id);
    await AsyncStorage.setItem(`${ENV.STORAGE.FAVORITE}_${userId}`, JSON.stringify(newFavorites));
  } catch (error) {
    console.log(error);
  }
};