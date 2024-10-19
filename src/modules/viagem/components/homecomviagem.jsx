import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

// Ícones e imagens que você vai usar
import iconeMapa from '../../../../assets/calendario.png'; 
import iconeCalendario from '../../../../assets/calendario.png';
import logo from '../../../../assets/logo.png';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [viagem, setViagem] = useState({
    titulo: '',
    cidade: '',
    gastoPrevisto: '',
    dataIda: '',
    dataVolta: '',
  });

  useEffect(() => {
    // Função que carrega a viagem cadastrada do AsyncStorage
    const carregarViagem = async () => {
      try {
        const titulo = await AsyncStorage.getItem('@tituloViagem');
        const cidade = await AsyncStorage.getItem('@nomeCidade');
        const gastoPrevisto = await AsyncStorage.getItem('@gastoPrevisto');
        const dataIda = await AsyncStorage.getItem('@dataIda');
        const dataVolta = await AsyncStorage.getItem('@dataVolta');

        setViagem({
          titulo: titulo || '',
          cidade: cidade || '',
          gastoPrevisto: gastoPrevisto || '',
          dataIda: dataIda ? new Date(dataIda).toLocaleDateString('pt-BR') : '',
          dataVolta: dataVolta ? new Date(dataVolta).toLocaleDateString('pt-BR') : '',
        });
      } catch (error) {
        console.log('Erro ao carregar a viagem:', error);
      }
    };

    const formatCurrency = (value) => {
        let numericValue = value.replace(/\D/g, "");
        if (numericValue.length === 0) {
          numericValue = "0";
        }
        numericValue = (numericValue / 100).toFixed(2).replace(".", ",");
        numericValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return `R$ ${numericValue}`;
      };

    carregarViagem();
  }, []);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={logo} style={styles.logo} />
      
      {/* Cartão da Viagem */}
      <View style={styles.cartaoViagem}>
        <View style={styles.tituloContainer}>
          <Text style={styles.tituloViagem}>{viagem.titulo}</Text>
          <View style={styles.cidadeContainer}>
            <Image source={iconeMapa} style={styles.iconeMapa} />
            <Text style={styles.textoCidade}>{viagem.cidade || 'Cidade não definida'}</Text>
          </View>
        </View>
        
        <View style={styles.detalhesContainer}>
          <View style={styles.gastosContainer}>
            <Image source={iconeMapa} style={styles.iconeMapa} />
            <Text style={styles.textoGasto}>{formatCurrency(viagem.gastoPrevisto)}</Text>
          </View>
          <View style={styles.datasContainer}>
            <Image source={iconeCalendario} style={styles.iconeCalendario} />
            <Text style={styles.textoData}>
              {viagem.dataIda} - {viagem.dataVolta}
            </Text>
          </View>
        </View>
      </View>

      {/* Botão de Adicionar */}
      <TouchableOpacity
        style={styles.botaoAdicionar}
        onPress={() => navigation.navigate('CadastroNovaViagem')}
      >
        <Text style={styles.textoBotao}>+ Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00050D',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  cartaoViagem: {
    backgroundColor: '#0D1A2E',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    marginBottom: 30,
  },
  tituloContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tituloViagem: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cidadeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconeMapa: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  textoCidade: {
    color: '#4CD964',
    fontSize: 14,
  },
  detalhesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  gastosContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textoGasto: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 5,
  },
  datasContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconeCalendario: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  textoData: {
    color: '#FFF',
    fontSize: 14,
  },
  botaoAdicionar: {
    backgroundColor: '#0E6EFF',
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
