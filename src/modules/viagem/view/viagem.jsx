import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import logo from "../../../../assets/logo.png";
import fundomenu from "../../../../assets/fundomenu.png";
import { ModalViagem } from "../../modal/view/modal.jsx";
import { viagemControllerImpl } from "../di/di.js";

export default function Viagem() {
  const controller = viagemControllerImpl();

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

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setMostraModal(true)}
      >
        <Text style={styles.textobotao}>+ Adicionar nova viagem</Text>
      </TouchableOpacity>

      <View style={styles.linha}></View>

      <Modal visible={mostraModal} animationType="fade" transparent={true}>
        <ModalViagem fechar={() => setMostraModal(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00050D",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  header: {
    alignItems: "center",
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
    fontFamily: "Inter", 
    color: "#FFF",
    fontWeight: "bold",
  },
  imagemfundomenu: {
    width: 300,
    height: 300,
  },
  texto: {
    color: "rgba(255,255,255,0.50)",
    fontSize: 22,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "#0E6EFF",
    width: 315,
    height: 51,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 140,
  },
  textobotao: {
    color: "#FFF",
    fontSize: 18,
  },
  icon: {
    width: 30,
    height: 30,
  },
  linha: {
    borderBottomWidth: 1,
    borderBottomColor: "#FFF",
    width: 150,
    marginTop: 5,
    width: "90%",
},
});
