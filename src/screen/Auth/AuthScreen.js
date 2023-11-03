import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Fonts from '../../constants/Fonts'
import LoginForm from '../../components/Auth/Login/LoginForm';
import RegisterForm from '../../components/Auth/Register/RegisterForm';

export default function AuthScreen() {

  //const [isLogin, setIsLogin] = useState(true);
 
  //const changeForm = () => {
    //setIsLogin(!isLogin);
  //}
  const [showLogin, setShowLogin] = useState(true);
 
  const showLoginRegister = () => {
    setShowLogin(prevState => !prevState)
  }

  {/* <View style={styles.container}>
      <Text style={{fontFamily:Fonts.family.bold, fontSize: Fonts.size.large, marginVertical: 20}}>AuthScreen</Text>
       <SocialButton title="Iniciar sesión con Facebook" imageType="facebook" color={Colors.facebookColor}/> 
      <SocialButton title="Iniciar sesión con Google" imageType="google" color={Colors.googleColor}/> 
       <SocialButton title="Iniciar sesión con Twitter" imageType="twitter" color={Colors.twitterColor}/> 
    </View> */}

  return (
    <ImageBackground
        source={require('../../assets/fondo.jpg')}
        style={styles.backgroundImage}>

    <View style={styles.container}>
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      
    {showLogin ? <LoginForm showRegister={showLoginRegister} /> : <RegisterForm showLogin={showLoginRegister} />}    
    </KeyboardAvoidingView>
    </View>
    </ImageBackground>
  )
}

  const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,// Un fondo oscuro para mejorar la legibilidad del texto
    justifyContent: 'center',
    alignItems: 'center',
  },
}) 