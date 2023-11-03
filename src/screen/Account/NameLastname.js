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

const NameLastName = () => {
  const navigation = useNavigation();
  const { user, updateUser } = useAuth();

  const validationSchema = yup.object().shape({
    nombre: yup.string().required('El nombre es requerido'),
    apellido: yup.string().required('El apellido es requerido'),
  });

  const formik = useFormik({
    initialValues: {
      nombre: user ? user.firstname : '',
      apellido: user ? user.lastname : '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formData = {
        firstname: values.nombre,
        lastname: values.apellido,
      };
      const userId = user.id;

      console.log('Valores form:', formData);

      userController.updateUser(formData, userId)
        .then((response) => {
          updateUser('firstname', values.nombre);
          updateUser('lastname', values.apellido);

          console.log('Valores enviados:', response);

          navigation.goBack();
          Alert.alert('Nombre actualizado', 'El nombre se actualizó correctamente');
        })
        .catch((error) => {
          console.error('Error al actualizar:', error);
        });
    },
  });

  return (
    <ImageBackground source={homeImage} style={{ flex: 1, width: '100%', height: '100%' }}>
      <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 10 }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ marginVertical: 10, fontWeight: 'bold', color: "#fff", textAlign: "center" }}>Ingresa el nombre y apellido</Text>
          <TextInput
            label="Nombre"
            value={formik.values.nombre}
            onChangeText={formik.handleChange('nombre')}
            onBlur={formik.handleBlur('nombre')}
          />
          {formik.touched.nombre && formik.errors.nombre && (
            <Text style={{ color: 'red' }}>{formik.errors.nombre}</Text>
          )}
        </View>

        <View style={{ marginBottom: 20 }}>
          <TextInput
            label="Apellido"
            value={formik.values.apellido}
            onChangeText={formik.handleChange('apellido')}
            onBlur={formik.handleBlur('apellido')}
          />
          {formik.touched.apellido && formik.errors.apellido && (
            <Text style={{ color: 'red' }}>{formik.errors.apellido}</Text>
          )}
        </View>

        <Button mode="contained" buttonColor='#A7CB54' onPress={formik.handleSubmit}>
          Actualizar nombre
        </Button>
      </View>
    </ImageBackground>
  );

};

export default NameLastName;
