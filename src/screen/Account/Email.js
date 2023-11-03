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

const Email = () => {
  const navigation = useNavigation();
  const { user, updateUser } = useAuth();

  const validationSchema = yup.object().shape({
    currentEmail: yup.string().email('El correo actual no es válido').required('El correo actual es requerido'),
    newEmail: yup.string().email('El nuevo correo no es válido').required('El nuevo correo es requerido'),
  });

  const formik = useFormik({
    initialValues: {
      currentEmail: user ? user.email : '',
      newEmail: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const formData = {
          email: values.newEmail,
        };
        const userId = user.id;

        const response = await userController.updateUser(formData, userId);
        updateUser('email', values.newEmail);

        navigation.goBack();
        Alert.alert('Correo actualizado', 'El correo se actualizó correctamente');
        console.log('Valores enviados:', response);
      } catch (error) {
        console.error('Error al actualizar:', error);
      }
    },
  });

  return (
    <ImageBackground source={homeImage} style={{ flex: 1, width: '100%', height: '100%' }}>
      <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 10 }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ marginVertical: 10, fontWeight: 'bold', color: "#fff" }}>Ingresa el nuevo correo electrónico</Text>

          <TextInput
            label="Correo electrónico actual"
            value={formik.values.currentEmail}
            onChangeText={formik.handleChange('currentEmail')}
            onBlur={formik.handleBlur('currentEmail')}
            editable={false}
          />
          {formik.touched.currentEmail && formik.errors.currentEmail && (
            <Text style={{ color: 'red' }}>{formik.errors.currentEmail}</Text>
          )}
        </View>

        <TextInput
          label="Nuevo correo electrónico"
          value={formik.values.newEmail}
          onChangeText={formik.handleChange('newEmail')}
          onBlur={formik.handleBlur('newEmail')}
        />
        {formik.touched.newEmail && formik.errors.newEmail && (
          <Text style={{ color: 'red' }}>{formik.errors.newEmail}</Text>
        )}

        <Button style={{ marginTop: 20 }} buttonColor='#A7CB54' mode="contained" onPress={formik.handleSubmit} disabled={!formik.isValid}>
          Actualizar correo
        </Button>
      </View>
    </ImageBackground>
  );
};

export default Email;
