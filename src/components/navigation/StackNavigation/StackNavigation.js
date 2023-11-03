import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RickAndMortyApi from '../../../api/RickandMortyApi';
import DetallePersonaje from '../../../screen/CharacterDetail/DetallePersonaje';

export default function StackNavigation() {
    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
    <Stack.Screen
      name='RickAndMortyApi'
      component={RickAndMortyApi}
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
        headerTintColor: 'white'  // Color del ícono de la flecha de regreso
      }}
    />
  </Stack.Navigator>
  )
}