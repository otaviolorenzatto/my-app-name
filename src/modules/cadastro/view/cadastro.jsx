import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import logo from "../../../../assets/logo.png";
import { cadastroControllerImpl } from "../di/di"; 
import { Ionicons } from '@expo/vector-icons';

export default function Cadastro() {
  const controller = cadastroControllerImpl(); 

  const [hidePass, setHidePass] = useState(true); 

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            value={controller.username} 
            onChangeText={controller.setUsername} 
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="white"
            value={controller.email} 
            onChangeText={controller.setEmail} 
          />

          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              placeholder="Insira sua senha"
              placeholderTextColor="#FFF"
              onChangeText={controller.setPassword} 
              value={controller.password} 
              secureTextEntry={hidePass} 
            />
            <TouchableOpacity
              style={styles.icon}
              onPress={() => setHidePass(!hidePass)}
            >
              {hidePass ? (
                <Ionicons name="eye-off" color="#FFF" size={25} />
              ) : (
                <Ionicons name="eye" color="#FFF" size={25} />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              placeholder="Confirme sua senha"
              placeholderTextColor="#FFF"
              onChangeText={controller.setConfirmPassword} 
              value={controller.confirmPassword} 
              secureTextEntry={hidePass} 
            />
            <TouchableOpacity
              style={styles.icon}
              onPress={() => setHidePass(!hidePass)}
            >
              {hidePass ? (
                <Ionicons name="eye-off" color="#FFF" size={25} />
              ) : (
                <Ionicons name="eye" color="#FFF" size={25} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.botaoCadastrar}
          onPress={controller.handleRegister} 
        >
          <Text style={styles.textobotao}>Cadastrar-se</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.acessoLogin}
          onPress={() => controller.navigation.navigate("Login")} 
        >
          <Text style={styles.login}>Já possuo uma conta</Text>
          <View style={styles.linha}></View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00050D",
    justifyContent: "center",
    paddingVertical: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 60, 
  },
  logo: {
    width: 98,
    height: 83,
    marginBottom: 10, 
  },
  titulo: {
    fontSize: 24,
    letterSpacing: 6.2,
    fontFamily: "Inter",
    color: "#FFF",
  },
  form: {
    paddingHorizontal: 40,
    marginBottom: 40, 
  },
  inputArea: {
    position: 'relative', 
    marginBottom: 5, 
  },
  input: {
    width: '100%', 
    fontSize: 18,
    color: "#FFF",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#FFF",
    marginBottom: 20, 
    paddingVertical: 10, 
  },
  icon: {
    position: 'absolute',
    right: 10, 
    top: 8,  
  },
  botaoCadastrar: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 40,
    alignItems: "center",
    marginHorizontal: 50,
    marginBottom: 20,
    marginTop: 20, 
  },
  textobotao: {
    color: "#FFF",
    fontSize: 18,
  },
  acessoLogin: {
    alignItems: "center",
  },
  login: {
    color: "#FFF",
    textAlign: "center",
    marginTop: 10,
    paddingBottom: 5,
  },
  linha: {
    borderBottomWidth: 1,
    borderBottomColor: "#FFF",
    width: 150,
    marginTop: 5,
  },
});
