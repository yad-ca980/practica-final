import { View, Text, Alert, ScrollView, TouchableOpacity, ImageBackground, StyleSheet, Image} from 'react-native'
import React, { useState } from 'react'
//import { styles } from './LoginForm.styles'
import { TextInput, Button } from 'react-native-paper';
import Fonts from '../../../constants/Fonts'
import { globalStyles } from '../../../styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authApi } from '../../../api/auth';
import Toast from 'react-native-root-toast';
import { useAuth } from '../../../hooks/useAuth';


export default function LoginForm(props) {
    // Definir un estilo común
const commonTextStyle = {
  fontFamily: Fonts.family.bold,
  fontSize: Fonts.size.medium,
  marginVertical: 20,
  color: 'white'
};

  const { showRegister } = props;
  const {login} = useAuth();

   
  const formik = useFormik({
      initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email(true).required(true),
      password: Yup.string().required(true).min(6,true),
    }),
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        const { email, password } = formData;
        const response = await authApi.login(email, password);
        login(response.jwt)
        Alert.alert('Fue logueado exitosamente'); // Show success alert
      } catch (error) {
        Toast.show('Usuario o contraseña incorrectos', {
          position: Toast.positions.CENTER
        });

      }
    }
  })


  return (

    <View style={styles.container}> 
    
       
    <Image source={require('../../../assets/log.jpeg')} style={styles.logo} />
        
      <TextInput
        label="Correo electronico"
        style={globalStyles.input}
        autoCapitalize="none"
        onChangeText={(text) => formik.setFieldValue("email", text)}
        value={formik.values.email}
        error={formik.errors.email}
      />

      <TextInput
        label="Contraseña"
        secureTextEntry={true}
        style={globalStyles.input}
        autoCapitalize="none"
        onChangeText={(text) => formik.setFieldValue("password", text)}
        value={formik.values.password}
        error={formik.errors.password}
      />

    
      <Button 
       mode="contained" 
       style={globalStyles.buttonText}
      onPress={formik.handleSubmit}
      loading={formik.isSubmitting}
      buttonColor='#A7CB54'
      >
        Iniciar sesión
        
       </Button>
       <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        
        <TouchableOpacity onPress={showRegister} style={{ marginLeft: 10 }}>
          <Text style={{ ...commonTextStyle, color: '#fff' }}>Registrate</Text>
        </TouchableOpacity>
        </View>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 20,
    borderRadius: 200
  },
});


