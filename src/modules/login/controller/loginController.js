import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useState, useCallback } from "react";
import { Alert } from "react-native";

const useLoginController = (loginUseCase) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      return () => {
        setEmail("");
        setPassword("");
      };
    }, [])
  );

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }

    try {
      const response = await loginUseCase({
        email: email,
        senha: password,
      });

      if (response?.token) {
        Alert.alert("Sucesso", "Login realizado com sucesso!");
        navigation.navigate("AddNovaViagem");
      } else {
        Alert.alert("Erro", "Credenciais inválidas.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Ocorreu um erro ao tentar fazer login.");
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    navigation,
  };
};

export default useLoginController;
