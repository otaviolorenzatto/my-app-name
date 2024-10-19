import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://traveler-api-n420.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
