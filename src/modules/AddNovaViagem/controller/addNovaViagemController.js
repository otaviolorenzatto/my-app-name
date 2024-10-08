import { useState, useCallback } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const addNovaViagemController = (addNovaViagemUseCase) => {
  // Estados para o destino e controle do modal
  const [destino, setDestino] = useState("");
  const [detalhes, setDetalhes] = useState(null);
  const [mostraModal, setMostraModal] = useState(false);
  
  const navigation = useNavigation();

  // Função para abrir o modal
  const abrirModal = () => {
    setMostraModal(true);
  };

  // Função para fechar o modal
  const fecharModal = () => {
    setMostraModal(false);
  };

  // Função chamada ao selecionar o destino no GooglePlacesAutocomplete
  const handleDestinoSelecionado = (data, details) => {
    setDestino(data.description);
    setDetalhes(details);
    fecharModal();
    Alert.alert("Destino Selecionado", `Você selecionou: ${data.description}`);
  };

  // Função para salvar a nova viagem (caso de uso)
  const salvarViagem = async () => {
    if (!destino || !detalhes) {
      Alert.alert("Erro", "Por favor, selecione um destino antes de salvar.");
      return;
    }

    try {
      await addNovaViagemUseCase({
        destino,
        detalhes,
      });
      Alert.alert("Sucesso", "Viagem adicionada com sucesso!");
      navigation.navigate("TelaPrincipal"); // Exemplo de navegação após salvar
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Ocorreu um erro ao tentar salvar a viagem.");
    }
  };

  return {
    destino,
    detalhes,
    mostraModal,
    abrirModal,
    fecharModal,
    handleDestinoSelecionado,
    salvarViagem,
  };
};

export default addNovaViagemController;
