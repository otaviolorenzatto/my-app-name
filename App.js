import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import logo from './assets/logo.png'
import fundomenu from './assets/fundomenu.png'
import { ModalViagem } from './components/modal';
import { useState } from 'react';
import pessoa from './assets/pessoa.png';
import casinha from './assets/casinha.png';


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
      
      <View style={styles.linha}></View>
      <View style={styles.rodapeContainer}>
      {/* Botão da casa */}
      <TouchableOpacity>
        <View style={styles.iconecontainer}>
          <Image
            source={'./assets/casinha.png'} 
            style={styles.icone}
          />
        </View>
      </TouchableOpacity>

      {/* Botão da pessoa */}
      <TouchableOpacity>
        <View style={styles.iconecontainer}>
          <Image
            source={'./assets/pessoa'} 
            style={styles.icone}
          />
        </View>
      </TouchableOpacity>
    </View>
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
    justifyContent: 'space-between', // Distribui o conteúdo verticalmente
    paddingVertical: 20, // Adiciona padding vertical
  },

  header: {
    alignItems: 'center',
    marginTop: 50, // Adiciona espaçamento no topo
  },

  logo: {
    width: 98,
    height: 83,
    marginBottom: 24,
  },

  titulo: {
    fontSize: 24,
    letterSpacing: 6.2,
    fontFamily: 'Inter',
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
    height: 2,
    backgroundColor: 'rgba(255,255,255,0.50)',
    marginTop: 100,
  },

  rodapeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%', // Garante que o rodapé ocupe a maior parte da largura da tela
    paddingVertical: 20,
  },

  iconecontainer: {
    backgroundColor: '#0A1A2F', 
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },

  icone: {
    width: 24,
    height: 24,
    tintColor: '#fff', 
  },
  
});