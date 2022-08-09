import axios from "axios";

const API_KEY = "https://jsonplaceholder.typicode.com";

const apiClient = axios.create({
  baseURL: (process.env.API_KEY as string) || API_KEY,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
