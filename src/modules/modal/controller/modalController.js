import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useModalController = (fechar) => { 
  const [cidade, setCidade] = useState(null);
  const navigation = useNavigation();

  const salvaCidade = async (cidadeSelecionada) => {
    try {
      if (cidadeSelecionada) {
        await AsyncStorage.setItem("@nomeCidade", cidadeSelecionada);
        console.log(`Cidade ${cidadeSelecionada} salva com sucesso!`);
        setCidade(cidadeSelecionada);
        navigation.navigate("cadastroViagem");
      } else {
        console.log("Nenhuma cidade selecionada.");
      }
    } catch (error) {
      console.log("Erro ao salvar o nome da cidade:", error);
    }
  };

  const handleSelectCity = (cidadeSelecionada) => {
    salvaCidade(cidadeSelecionada); 
    fechar(); 
  };

  return {
    salvaCidade,
    handleSelectCity, 
    setCidade,
    cidade,
  };
};

export default useModalController;
