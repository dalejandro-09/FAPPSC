import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.56.11:3001/api",
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // o de donde lo guardes
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
