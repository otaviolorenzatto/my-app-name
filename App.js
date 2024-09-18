import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import logo from './assets/logo.png'
import fundomenu from './assets/fundomenu.png'
import { ModalViagem } from './components/modal';
import { useState } from 'react';

export default function App() {

  const [mostraModal, setMostraModal] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={logo}
          style={styles.logo}
        />
      </View>
      <Text style={styles.titulo}>traveler</Text>
      <View >
        <Image
          source={fundomenu}
          style={styles.imagemfundomenu}
        />
      </View>
      <Text style={styles.texto}>Qual seu próximo destino?</Text>
      <TouchableOpacity style={styles.botao} onPress={ () => setMostraModal(true) }>
      <Text style={styles.textobotao}>+ Adicionar nova viagem</Text>
      </TouchableOpacity>
      <View style={styles.line}></View>
      <Modal visible={mostraModal} animationType='fade' transparent={true}> 
        <ModalViagem fechar={() => setMostraModal(false)}/>
      </Modal>

      

    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00050D',
    alignItems: 'center',
  },

  header:{
    justifyContent: 'center',
  },

  logo: {
    width: 98,
    height: 83,
    marginBottom: 24,
    marginTop: 100,
    
  },

  titulo:{
    fontSize: 24,
    letterSpacing: 6.2,
    fontFamily: 'Cochin',
    color: '#FFF'
  },

  imagemfundomenu:{
    width: 300,
    height: 300,
  },

  texto:{
    color: 'rgba(255,255,255,0.50)',
    fontSize: 22,     
  },

  textobotao:{
    color: '#FFF',
    fontSize: 18,
  },

  botao:{
    backgroundColor: '#0E6EFF',
    marginTop: 50, 
    width: 315,
    height: 51,
    borderRadius: 40, 
    alignItems: 'center',
    justifyContent: 'center',
  },

  line:{
    width: '90%',
    height: 2,
    backgroundColor: 'rgba(255,255,255,0.50)',
    marginTop: 80,
  },

  rodape:{

  },

  
});