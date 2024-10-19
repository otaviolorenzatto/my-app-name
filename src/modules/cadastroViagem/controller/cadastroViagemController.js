import { useState, useEffect } from "react";
import { Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const cadastroViagemController = (addNovaViagemUseCase) => () => {
  const navigation = useNavigation();

  // Estados utilizados
  const [tituloViagem, setTituloViagem] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [dataIda, setDataIda] = useState(null);
  const [dataVolta, setDataVolta] = useState(null);
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [selectedCalendar, setSelectedCalendar] = useState("");
  const [gastoPrevisto, setGastoPrevisto] = useState("R$ 0,00");
  const [cidade, setCidade] = useState("");

  // Função para obter cidade armazenada no AsyncStorage (chamada no useEffect)
  const obterCidade = async () => {
    try {
      const cidadeArmazenada = await AsyncStorage.getItem("@nomeCidade");
      if (cidadeArmazenada) {
        setCidade(cidadeArmazenada);
      }
    } catch (error) {
      console.log("Erro ao obter a cidade:", error);
    }
  };

  // Função para salvar cidade selecionada
  const selecionarCidade = async (cidadeSelecionada) => {
    try {
      setCidade(cidadeSelecionada);
      await AsyncStorage.setItem("@nomeCidade", cidadeSelecionada);
    } catch (error) {
      console.log("Erro ao salvar a cidade:", error);
    }
  };

  // Função para salvar a data de ida
  const salvaDataIda = async (dataIdaSelecionada) => {
    try {
      if (dataIdaSelecionada) {
        await AsyncStorage.setItem("@dataIda", dataIdaSelecionada.toISOString());
        setDataIda(dataIdaSelecionada);
        console.log("Data de ida salva:", dataIdaSelecionada);
      }
    } catch (error) {
      console.log("Erro ao salvar sua data de ida!", error);
    }
  };

  // Função para salvar a data de volta
  const salvaDataVolta = async (dataVoltaSelecionada) => {
    try {
      if (dataVoltaSelecionada) {
        await AsyncStorage.setItem("@dataVolta", dataVoltaSelecionada.toISOString());
        setDataVolta(dataVoltaSelecionada);
        console.log("Data de volta salva:", dataVoltaSelecionada);
      }
    } catch (error) {
      console.log("Erro ao salvar sua data de volta!", error);
    }
  };

  // Função para manipular a data de ida
  const handleConfirmIda = (selectedDate) => {
    setCalendarVisible(false);
    salvaDataIda(selectedDate);
  };

  // Função para manipular a data de volta
  const handleConfirmVolta = (selectedDate) => {
    setCalendarVisible(false);
    salvaDataVolta(selectedDate);
  };

  // Função para exibir a data no formato correto
  const formatarData = (date) => {
    if (!date) return "Selecionar data";
    return new Date(date.getTime() + date.getTimezoneOffset() * 60000).toLocaleDateString("pt-BR");
  };

  // Exibe ou esconde o calendário ao clicar nas datas
  const toggleCalendar = (type) => {
    if (selectedCalendar === type && isCalendarVisible) {
      setCalendarVisible(false);
    } else {
      setSelectedCalendar(type);
      setCalendarVisible(true);
    }
  };

  // Fecha o teclado e o calendário ao clicar fora
  const dismissKeyboardAndCalendar = () => {
    Keyboard.dismiss();
    if (isCalendarVisible) {
      setCalendarVisible(false);
    }
  };

  // Função para formatar o valor como moeda
  const formatCurrency = (value) => {
    let numericValue = value.replace(/\D/g, "");
    if (numericValue.length === 0) {
      numericValue = "0";
    }
    numericValue = (numericValue / 100).toFixed(2).replace(".", ",");
    numericValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `R$ ${numericValue}`;
  };

  const handleGastoChange = (value) => {
    setGastoPrevisto(formatCurrency(value));
  };

  // Função para adicionar viagem e salvar os dados
  const handleAdicionar = async () => {
    try {
      const resultado = await addNovaViagemUseCase.salvarViagem({
        titulo: tituloViagem,
        dataIda,
        dataVolta,
        gastoPrevisto,
        cidade,
      });

      if (resultado.success) {
        navigation.navigate("homecomviagem"); // Navega para a tela "homecomviagem" após o sucesso
      } else {
        alert(resultado.message); // Mostra a mensagem de erro caso algo dê errado
      }
    } catch (error) {
      console.log("Erro ao adicionar viagem:", error);
    }
  };

  // Chama a função de obter cidade ao iniciar
  useEffect(() => {
    obterCidade();
  }, []);

  return {
    cidade,
    selecionarCidade,
    tituloViagem,
    setTituloViagem,
    isEditing,
    setIsEditing,
    dataIda,
    dataVolta,
    isCalendarVisible,
    selectedCalendar,
    gastoPrevisto,
    handleConfirmIda,
    handleConfirmVolta,
    formatarData,
    toggleCalendar,
    dismissKeyboardAndCalendar,
    handleGastoChange,
    handleAdicionar,
  };
};

// Exporta o controlador como padrão
export default cadastroViagemController;
