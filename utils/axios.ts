import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:42000/",
  timeout: 1000,
});

export default api;
