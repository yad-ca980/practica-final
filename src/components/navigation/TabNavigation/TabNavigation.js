import React from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from './TabNavigation.styles';
import CustomTabBarButton from './CustomTabBarButton';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import StackNavigation from '../../navigation/StackNavigation/StackNavigation';
import StackFavoritos from '../../navigation/StackNavigation/StackFavoritos';
import AccountScreen from '../../../screen/AccountScreen';
import { useAuth } from '../../../hooks/useAuth';
import { createStackNavigator } from '@react-navigation/stack';
import NameLastname from '../../../screen/Account/NameLastname';
import User from '../../../screen/Account/User';
import Password from '../../../screen/Account/Password';
import Email from '../../../screen/Account/Email';

const Stack= createStackNavigator();
const Tab = createBottomTabNavigator();
const cuentaStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cuenta"
        component={AccountScreen}
        options={{
          title: 'Cuenta',
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="NameLastname"
        component={NameLastname}
        options={{
          title: 'Nombre y apellido',
      
        }}
      />
       <Stack.Screen
        name="Email"
        component={Email}
        options={{
          title: 'Email',
          
        }}
      />
       <Stack.Screen
        name="User"
        component={User}
        options={{
          title: 'Usuario',
         
        }}
      />
       <Stack.Screen
        name="Password"
        component={Password}
        options={{
          title: 'Password',
         
        }}
      />
    </Stack.Navigator>
  );
}

export default function TabNavigation() {
  const { logout } = useAuth();

  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={({ route }) => ({
        tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
        tabBarStyle: {
          backgroundColor: '#0D0D0D',
        },
      })}
    >
      <Tab.Screen
        name="Cuenta"
        component={cuentaStack}
        options={{
          tabBarLabel: 'Mi perfil',
          title: '',
          headerShown: true,
          headerTransparent: true,
        }}
      />

      <Tab.Screen
        name="Inicio"
        component={StackNavigation}
        options={{
          title: 'Inicio',
          headerShown: false,
          tabBarButton: () => (
            <CustomTabBarButton iconSource={require('../../../../assets/rick1.png')} />
          ),
        }}
      />

      <Tab.Screen
        name="StackFavoritos"
        component={StackFavoritos}
        options={{
          title: 'Favoritos',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const setIcon = (route, routeStatus) => {
  let iconName = '';
  let color = '#F0F2EB';

  if (routeStatus.focused) {
    color = '#A7CB54';
  }

  if (route.name === 'Inicio') {
    iconName = 'home';
  }
  if (route.name === 'Cuenta') {
    iconName = 'user';
  }
  if (route.name === 'StackFavoritos') {
    iconName = 'heart';
  }

  return <AwesomeIcon name={iconName} color={color} style={styles.icon} />;
};
