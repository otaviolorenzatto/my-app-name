import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text } from "react-native";


import Login from "../modules/login/view/login";
import Cadastro from "../modules/cadastro/view/cadastro";
import AddNovaViagem from "../modules/viagem/view/viagem";
import Profile from "../modules/profile/view/profile";
import CadastroNovaViagem from "../modules/cadastroViagem/view/cadastroViagem";
import homecomviagem from "../modules/viagem/components/homecomviagem";

import homeIcon from "../../assets/casinha.png";
import profileIcon from "../../assets/pessoa.png";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator para as principais telas (home e perfil, por exemplo)
function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#00050D", 
          borderTopColor: "transparent", 
          paddingBottom: 47, 
          height: 65, 
        },
        tabBarActiveTintColor: "#0E6EFF", 
        tabBarInactiveTintColor: "rgba(255,255,255,0.5)", 
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12, 
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={AddNovaViagem} // Componente principal da home
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={homeIcon}
              style={{
                width: 32, 
                height: 32, 
                tintColor: focused ? "#0E6EFF" : "rgba(255,255,255,0.5)", 
                marginBottom: -5, 
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "#0E6EFF" : "rgba(255,255,255,0.5)",
                fontSize: 12,
              }}
            ></Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={profileIcon}
              style={{
                width: 32, 
                height: 32, 
                tintColor: focused ? "#0E6EFF" : "rgba(255,255,255,0.5)", 
                marginBottom: -5, 
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? "#0E6EFF" : "rgba(255,255,255,0.5)",
                fontSize: 12,
              }}
            ></Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Stack Navigator para rotas independentes como login, cadastro, etc.
function StackRoutes() {
  return (
    <Stack.Navigator>
      {/* Inclui o Tab Navigator como uma das rotas do Stack */}
      <Stack.Screen
        name="TabRoutes"
        component={TabRoutes} // Inclui as rotas com tabs
        options={{ headerShown: false }}
      />
      {/* Incluindo o resto das telas como parte do stack */}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="cadastroViagem" 
        component={CadastroNovaViagem} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name="homecomviagem" 
        component={CadastroNovaViagem} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}

export default StackRoutes;
