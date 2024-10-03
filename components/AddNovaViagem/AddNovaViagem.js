import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import logo from '../../assets/logo.png';
import fundomenu from '../../assets/fundomenu.png';
import pessoa from '../../assets/pessoa.png';
import casinha from '../../assets/casinha.png';

import { ModalViagem } from '../modal/pesquisaC.E.P';

export default function App() {
  const [mostraModal, setMostraModal] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
      </View>

      <Text style={styles.titulo}>traveler</Text>
      
      <View>
        <Image source={fundomenu} style={styles.imagemfundomenu} />
      </View>

      <Text style={styles.texto}>Qual seu próximo destino?</Text>

      <TouchableOpacity style={styles.botao} onPress={() => setMostraModal(true)}>
        <Text style={styles.textobotao}>+ Adicionar nova viagem</Text>
      </TouchableOpacity>
      
      <View style={styles.linha}></View>
      
      <View style={styles.rodapeContainer}>
        <TouchableOpacity>
          <View style={styles.casinhacontainer}>
            <Image source={casinha} style={styles.casinha} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.pessoacontainer}>
            <Image source={pessoa} style={styles.pessoa} />
          </View>
        </TouchableOpacity>
      </View>

      <Modal visible={mostraModal} animationType='fade' transparent={true}> 
        <ModalViagem fechar={() => setMostraModal(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00050D',
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingVertical: 20, 
  },
  header: {
    alignItems: 'center',
    marginTop: 50, 
  },
  logo: {
    width: 98,
    height: 83,
    marginBottom: 24,
  },
  titulo: {
    fontSize: 24,
    letterSpacing: 6.2,
    fontFamily: 'Inter',  // Aplicar a fonte Inter
    color: '#FFF',
  },
  imageContainer: {
    flex: 2, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagemfundomenu: {
    width: 300,
    height: 300,
  },
  texto: {
    color: 'rgba(255,255,255,0.50)',
    fontSize: 22,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#0E6EFF',
    width: 315,
    height: 51,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textobotao: {
    color: '#FFF',
    fontSize: 18,
  },
  linha: {
    width: '90%',
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.50)',
    marginTop: 130,
  },
  rodapeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', 
    paddingVertical: 10,
  },
  casinhacontainer: {
    backgroundColor: '#0A1A2F', 
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 50,
  },
  pessoacontainer:{
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 50,
  },
  pessoa: {
    width: 30,
    height: 30,
    tintColor: '#fff', 
  },
  casinha: {
    width: 30,
    height: 30,
    tintColor: '#0E6EFF', 
  },
});
