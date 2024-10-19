import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getToken, getUser } from "../../../core/domain/model/jwtToken";

const viagemController = () => () => {
  const [token, setToken] = useState();
  async function executaGetUser() {
    const usuario = await getUser();
    console.log(usuario);
  }

  useEffect(() => {
    executaGetUser();
  }, []);

  return { token };
};

export default viagemController;