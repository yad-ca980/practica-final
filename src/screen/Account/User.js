import React from 'react';
import { View, Text, SafeAreaView, ImageBackground } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useAuth } from '../../hooks/useAuth';
import { userController } from '../../api/users';
import { Alert } from 'react-native';
import homeImage from '../../assets/fondo.jpg';

const User = () => {
  const navigation = useNavigation();
  const { user, updateUser} = useAuth();

  const validationSchema = yup.object().shape({
    usuario: yup.string().required('El usuario es requerido'),
  });

  const formik = useFormik({
    initialValues: {
      usuario: user ? user.username : '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const formData = {
          username: values.usuario,
        };
        const userId = user.id;

        const response = await userController.updateUser(formData, userId);

        updateUser('username', values.usuario);

        navigation.goBack();

        Alert.alert('Usuario actualizado', 'El usuario se actualizó correctamente');
        console.log('Valores enviados:', response);
      } catch (error) {
        console.error('Error al actualizar:', error);
      }
    },
  });

  return (
    <ImageBackground source={homeImage} style={{ flex: 1, width: '100%', height: '100%' }}>
      <View style={{
        flex: 1, justifyContent: 'center', marginHorizontal: 10}}>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ marginVertical: 10, fontWeight: 'bold', color: "#fff" }}>Ingresa el nuevo usuario</Text>
          <TextInput
            label="Usuario"
            value={formik.values.usuario}
            onChangeText={formik.handleChange('usuario')}
            onBlur={formik.handleBlur('usuario')}
          />
          {formik.touched.usuario && formik.errors.usuario && (
            <Text style={{ color: 'red' }}>{formik.errors.usuario}</Text>
          )}
        </View>

        <Button buttonColor='#A7CB54' mode="contained" onPress={formik.handleSubmit}>
          Actualizar usuario
        </Button>
      </View>
    </ImageBackground>
  );
};

export default User;
