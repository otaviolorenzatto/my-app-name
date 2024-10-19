import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Rotas from "./src/rotas/rotas";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  return (
    <NavigationContainer>
      <Rotas />
    </NavigationContainer>
  );
}
