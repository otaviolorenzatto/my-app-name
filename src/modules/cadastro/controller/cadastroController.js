import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useState, useCallback } from "react";
import { Alert } from "react-native";

const cadastroController = (cadastroUseCase) => () => {
  const [state, setState] = useState("suo");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      return () => {
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      };
    }, [])
  );

  const handleRegister = async () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }

    try {
      // Fazendo a requisição POST para o endpoint da API
      const response = await cadastroUseCase({
        nome: username,
        email: email,
        senha: password,
      });
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      navigation.navigate("Login");
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Ocorreu um erro ao tentar cadastrar.");
    }
  };

  return {
    state,
    setState,
    handleRegister,
    password,
    setPassword,
    username,
    setUsername,
    email,
    setEmail,
    confirmPassword,
    setConfirmPassword,
    navigation,
  };
};

export default cadastroController;
