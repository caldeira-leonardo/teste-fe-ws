import axios from "axios";

const api = axios.create({
  baseURL: "https://wswork.com.br",
});

export default api;
