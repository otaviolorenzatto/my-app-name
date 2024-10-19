import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Perfil</Text>
      <View style={styles.linha}></View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00050D',
  },
  text: {
    color: '#FFF',
    fontSize: 24,
  },
  linha: {
    borderBottomWidth: 1,
    borderBottomColor: "#FFF",
    width: 150,
    marginTop: 5,
    width: "90%",
},
});
