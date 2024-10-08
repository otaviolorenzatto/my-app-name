import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Modal, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import flecha from "../../../../assets/flechaesquerda.png";
import addNovaViagemController from "../controller/addNovaViagemController";

export function AddNovaViagem() {
  const controller = addNovaViagemController();

  return (
    <View style={styles.container}>
      {/* Botão para abrir o modal */}
      <TouchableOpacity style={styles.botao} onPress={controller.abrirModal}>
        <Text style={styles.textobotao}>+ Adicionar nova viagem</Text>
      </TouchableOpacity>

      {/* Modal para pesquisa do destino */}
      <Modal visible={controller.mostraModal} animationType="fade" transparent={true}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.botaoinvisivel} onPress={controller.fecharModal}></TouchableOpacity>

          <View style={styles.conteudopesquisa}>
            <GooglePlacesAutocomplete
              placeholder="Qual o seu destino?"
              onPress={controller.handleDestinoSelecionado}
              query={{
                key: "SUA_API_KEY_AQUI", // Coloque aqui a chave de API do Google
                language: "pt-BR",
              }}
              fetchDetails={true}
              styles={{
                textInput: styles.textopesquisa,
                listView: styles.suggestionList,
              }}
              textInputProps={{
                placeholderTextColor: "rgba(255,255,255,0.65)",
                style: styles.textopesquisa,
              }}
            />
            <TouchableOpacity onPress={controller.fecharModal} style={styles.fundobotao}>
              <Image source={flecha} style={styles.fundoicone} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00050D",
    justifyContent: "center",
    alignItems: "center",
  },
  botao: {
    backgroundColor: "#0E6EFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  textobotao: {
    color: "#FFF",
    fontSize: 18,
  },
  botaoinvisivel: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 100, 
    backgroundColor: "transparent",
    zIndex: 1,
  },
  conteudopesquisa: {
    width: "100%",
    height: "85%",
    backgroundColor: "#071222",
    marginTop: 100,
    alignItems: "center",
    borderRadius: 40,
    zIndex: 2,
  },
  textopesquisa: {
    width: 320,
    backgroundColor: "#00050D",
    marginTop: 28,
    height: 51,
    borderRadius: 40,
    paddingLeft: 65,
    color: "rgba(255,255,255,0.65)",
    alignSelf: "center",
    zIndex: 1, 
  },
  suggestionList: {
    backgroundColor: "#071222",
    borderRadius: 20,
    width: 320,
    alignSelf: "center",
  },
  fundobotao: {
    position: 'absolute',
    left: 15, 
    top: 30,
    zIndex: 3,  
  },
  fundoicone: {
    width: 25,
    height: 25,
    position: 'absolute',
    left: 35,  
    top: 20,   
    zIndex: 3,
  },
});
