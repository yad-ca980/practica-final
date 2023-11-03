import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritosScreen from '../../../screen/Favoritos/FavoritesScreen';
import DetallePersonaje from '../../../screen/CharacterDetail/DetallePersonaje';

export default function StackFavoritos() {
    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
    <Stack.Screen
      name='Favoritos'
      component={FavoritosScreen}
      options={{
        title: '',
        headerTransparent: true,
        headerShown: true,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold', // Otras opciones de estilo para el título 
          color: 'green', // Cambia 'tu_color_texto_titulo' 
          fontSize: 25,
        }
      }}
    />

    <Stack.Screen
      name="DetallePersonaje"
      component={DetallePersonaje}
      options={{
        title: '',
        headerShown: true,
        headerTransparent: true,
        headerLeftContainerStyle:{
          marginTop: 90
        },
        headerTintColor: 'white'  // Color del ícono de la flecha de regreso
      }}
    />
  </Stack.Navigator>
  )
}