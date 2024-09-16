import React, { useRef } from 'react';
import { View, StyleSheet, Animated, PanResponder } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export function ModalViagem({ fechar }) {
  const pan = useRef(new Animated.ValueXY()).current;

  // Criando o PanResponder para capturar o arrastar
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          { dy: pan.y }  // Movendo verticalmente
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dy > 50) {
          fechar();
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <View style={styles.conteudopesquisa}>
        {/* Linha que pode ser arrastada */}
        <Animated.View
          style={[styles.line, { transform: [{ translateY: pan.y }] }]}
          {...panResponder.panHandlers}
        />

        {/* GooglePlacesAutocomplete */}
        <GooglePlacesAutocomplete
          placeholder="Qual o seu destino?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyDgRNpVHxeabrd7SvG6WgALeXiSi5-JdAs',  // Substitua com sua API key
            language: 'pt-BR',  // Define o idioma
          }}
          fetchDetails={true}  // Para obter mais detalhes
          styles={{
            textInput: styles.textopesquisa,  // Aplica o estilo personalizado
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

  conteudopesquisa: {
    width: '100%',
    height: '85%',
    backgroundColor: '#071222',
    marginTop: 100,
    alignItems: 'center',
    borderRadius: 40,
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
