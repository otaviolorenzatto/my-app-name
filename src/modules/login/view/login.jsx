import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import logo from "../../../../assets/logo.png";
import { loginControllerImpl } from "../di/di";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  const controller = loginControllerImpl(); // Usando o controller do login
  const [hidePass, setHidePass] = useState(true); 
  const [lembrarMe, setLembrarMe] = useState(false);

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
            placeholder="Email"
            placeholderTextColor="white"
            value={controller.email} // Bind com o estado do controller
            onChangeText={controller.setEmail} // Atualizando o estado no controller
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
              style={styles.icone}
              onPress={() => setHidePass(!hidePass)}
            >
              {hidePass ? (
                <Ionicons name="eye" color="#FFF" size={25} />
              ) : (
                <Ionicons name="eye-off" color="#FFF" size={25} />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.lembrarMeContainer}>
            <TouchableOpacity
              style={styles.lembrarMe}
              onPress={() => setLembrarMe(!lembrarMe)}
            >
              {lembrarMe ? (
                <Ionicons name="checkbox-outline" color="#FFF" size={20} />
              ) : (
                <Ionicons name="square-outline" color="#FFF" size={20} />
              )}
              <Text style={styles.lembrarMeText}> Lembrar-me</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.esqueciSenhaText}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.botaoEntrar}
          onPress={controller.handleLogin} // Usando a função de login do controller
        >
          <Text style={styles.textobotao}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.acessoLogin}
          onPress={() => controller.navigation.navigate("Cadastro")} 
        >
          <Text style={styles.texto}>Ainda não possui uma conta?</Text>
          <Text style={styles.login}>Cadastre-se agora!</Text>
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
    fontFamily: "Inter",
    color: "#FFF",
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
  inputArea: {
    position: "relative",
    marginBottom: 15,
  },
  senhaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  showPasswordText: {
    color: "#FFF",
    fontSize: 14,
  },
  lembrarMeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute", 
    top: 130, 
    left: 48,
    right: 50,
  },
  esqueciSenhaText: {
    color: "#FFF",
  },
  lembrarMe: {
    flexDirection: "row",
    alignItems: "center",
  },
  lembrarMeText: {
    color: "#FFF",
    marginLeft: 5,
  },
  botaoEntrar: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 50,
    marginBottom: 30,
    marginTop: 50,
    borderRadius: 40,
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
    marginTop: 5,
    width: 150,
  },
  icone: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  texto: {
    color: "#FFF",
    textAlign: "center",
    marginTop: 10,
    paddingBottom: 5,
  },
});
