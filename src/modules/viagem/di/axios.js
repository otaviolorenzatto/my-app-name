import axios from "axios";
import { getToken } from "../../../core/domain/model/jwtToken";

const axiosInstance = axios.create({
  baseURL: "https://traveler-api-n420.onrender.com",
  // baseURL: "http://192.168.200.78:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const jwtAuthToken = await getToken();

      if (jwtAuthToken) {
        config.headers["Authorization"] = `Bearer ${jwtAuthToken}`;
      }

      return config;
    } catch (error) {
      console.log("Erro ao recuperar o token:", error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
