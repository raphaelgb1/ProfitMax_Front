import axios, { AxiosInstance } from "axios";

const httpClient: AxiosInstance = axios.create({
  // baseURL: "http://192.168.4.21:3001/",
  baseURL: "http://localhost:3001/",
  headers: {
    "Content-type": "application/json",
  },
});

export default httpClient;