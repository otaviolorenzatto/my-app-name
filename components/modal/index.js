import React from "react";
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export function ModalViagem({ fechar }) {
  return (
    <View style={styles.container}>
      {/* Botão invisível para fechar o modal */}
      <TouchableOpacity style={styles.botaoinvisivel} onPress={fechar}></TouchableOpacity>

      <View style={styles.conteudopesquisa}>
        {/* Linha que pode ser arrastada */}
        <Animated.View style={[styles.line]} />

        {/* GooglePlacesAutocomplete */}
        <GooglePlacesAutocomplete
          placeholder="Qual o seu destino?"
          onPress={(data, details = null) => {
            console.log(data, details);
          }}
          query={{
            key: "AIzaSyDgRNpVHxeabrd7SvG6WgALeXiSi5-JdAs",
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00050D",
    flex: 1,
  },

  botaoinvisivel: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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

  line: {
    width: "15%",
    height: 3,
    backgroundColor: "rgba(255,255,255,0.50)",
    marginTop: 7,
  },

  textopesquisa: {
    width: 350,   
    backgroundColor: "#00050D",
    marginTop: 28,
    maxWidth: 315,
    height: 51,
    borderRadius: 40,
    paddingLeft: 34,
    color: "rgba(255,255,255,0.65)",
    alignSelf: 'center',
    justifyContent: "center",
  },

  suggestionList: {
    backgroundColor: "#071222",
    borderRadius: 20,
  },
});
