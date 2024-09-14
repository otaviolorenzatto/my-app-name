import React, { useRef } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, PanResponder, Animated } from "react-native";

export function ModalViagem({ fechar }) {
  const pan = useRef(new Animated.ValueXY()).current;

  // Criando o PanResponder para capturar o arrastar
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: Animated.event(
        [
          null, 
          { dy: pan.y }  // Movendo verticalmente
        ], 
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dy > 50) {
          // Se o movimento vertical (dy) for maior que 100 pixels, fechar o modal
          fechar();
        } else {
          // Caso contrário, a linha volta para a posição original
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

        {/* Campo de texto para pesquisa de destino */}
        <TextInput 
          style={styles.textopesquisa} 
          placeholder="Qual o seu destino?" 
          placeholderTextColor='rgba(255,255,255,0.65)' 
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
});
