import axios from "axios";

const isProd = process.env.NODE_ENV === "production";
const API_KEY = "https://jsonplaceholder.typicode.com";

const apiClient = axios.create({
  baseURL: isProd ? API_KEY : process.env.API_KEY,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
