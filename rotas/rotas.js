import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../components/Login/Login";
import Cadastro from "../components/Cadastro/Cadastro";
import AddNovaViagem from "../components/AddNovaViagem/AddNovaViagem";
import { ModalViagem } from "../components/modal/pesquisaC.E.P";

const Stack = createNativeStackNavigator(); 

export default function rotas() {
    return(
        <Stack.Navigator>

        <Stack.Screen
        name = "Cadastro"
        component={Cadastro}
        options={{headerShown: false}}
        />

        <Stack.Screen
        name = "Login"
        component={Login}
        options={{headerShown: false}}
        />

        <Stack.Screen
        name = "AddNovaViagem"
        component={AddNovaViagem}
        options={{headerShown: false}}
        />

        <Stack.Screen
        name = "ModalViagem"
        component={ModalViagem}
        options={{headerShown: false}}
        />
        </Stack.Navigator>
    )
}