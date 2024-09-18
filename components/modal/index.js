import React, { useRef } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export function ModalViagem({ fechar }) {
  return (
    <View style={styles.container}>
      
      {/* Botão invisível para fechar o modal */}
      <TouchableOpacity style={styles.botaoinvisivel} onPress={fechar}>
        <View />
      </TouchableOpacity>

      <View style={styles.conteudopesquisa}>
        {/* Linha que pode ser arrastada */}
        <Animated.View style={[styles.line]} />

        {/* GooglePlacesAutocomplete */}
        <GooglePlacesAutocomplete
          placeholder="Qual o seu destino?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyDgRNpVHxeabrd7SvG6WgALeXiSi5-JdAs', // Substitua com sua API key
            language: 'pt-BR',  
          }}
          fetchDetails={true}  // Para obter mais detalhes
          styles={{
            textInput: styles.textopesquisa,  
            listView: styles.suggestionList,  // Personaliza a lista de sugestões
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00050D',
    flex: 1,
  },

  
  botaoinvisivel: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',  
    zIndex: 1,
  },

  conteudopesquisa: {
    width: '100%',
    height: '85%',
    backgroundColor: '#071222',
    marginTop: 100,
    alignItems: 'center',
    borderRadius: 40,
    zIndex: 2,  // Para garantir que fique acima do botão invisível
  },

  line: {
    width: '15%',
    height: 3,
    backgroundColor: 'rgba(255,255,255,0.50)',
    marginTop: 7,
  },

  textopesquisa: {
    backgroundColor: '#00050D',
    marginTop: 28,
    width: 315,
    height: 51,
    borderRadius: 40,
    paddingLeft: 24,
    color: 'rgba(255,255,255,0.65)',
  },

  suggestionList: {
    backgroundColor: '#071222',
    borderRadius: 20,
  },
});
