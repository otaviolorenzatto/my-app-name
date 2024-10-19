import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";

const SESSION_TOKEN_KEY = "token";

export async function getToken() {
  return await AsyncStorage.getItem(SESSION_TOKEN_KEY);
}

export async function setToken(token) {
  return await AsyncStorage.setItem(SESSION_TOKEN_KEY, token);
}

export async function getUser() {
  const token = await getToken();
  console.log(token);

  const decodedToken = token ? jwt_decode(token) : null;

  return decodedToken;
}
