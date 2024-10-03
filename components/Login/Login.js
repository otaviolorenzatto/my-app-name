import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react'; 
import { useNavigation } from '@react-navigation/native'; 
import logo from '../../assets/logo.png';




export default function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.titulo}>traveler</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome de Usuário"
          placeholderTextColor="white"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="white"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Nova senha"
          placeholderTextColor="white"
          onPress={() => setShowPassword(!showPassword)}
          value={password}
          onChangeText={(text) => setPassword(text)}       
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmar nova senha"
          placeholderTextColor="white"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.botaoCadastrar}>
        <Text style={styles.textobotao}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.acessoLogin}
        onPress={() => navigation.navigate('Cadastro')} 
      >
        <Text style={styles.texto}>Ainda não possui uma conta?</Text>
        <Text style={styles.login}>Cadastre-se agora!</Text>
        <View style={styles.linha}></View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00050D',
    justifyContent: 'center', 
    paddingVertical: 20, 
  },
  header: {
    alignItems: 'center',
    marginBottom: 50, 
  },
  logo: {
    width: 98,
    height: 83,
    marginBottom: 24,
  },
  titulo: {
    fontSize: 24,
    letterSpacing: 6.2,
    fontFamily: 'Inter',  
    color: '#FFF',
  },
  form: {
    paddingHorizontal: 50,
  },
  input: {
    fontSize: 18,
    color: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#FFF",  
    marginBottom: 30,
    padding: 10,  
  },
  botaoCadastrar: {
    backgroundColor: '#007AFF',  
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 50,  
    marginBottom: 30,
    marginTop: 50,
  },
  textobotao: {
    color: '#FFF',
    fontSize: 18,
  },
  acessoLogin: {
    alignItems: 'center', 
  },
  login: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 10, 
    paddingBottom: 5, 
  },
  linha: {
    borderBottomWidth: 1, 
    borderBottomColor: '#FFF', 
    width: '80%', 
    marginTop: 5, 
    width: 150,
  },
  texto: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 10, 
    paddingBottom: 5, 
  },
});