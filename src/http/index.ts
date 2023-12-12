import axios, { AxiosError, AxiosInstance } from "axios";

const httpClient: AxiosInstance = axios.create({
  baseURL: "http://profitmax.ddns.net:3004/",
  headers: {
    "Content-type": "application/json",
  },
});

// Tratamento global de erros
httpClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      // O servidor respondeu com um status de erro (4xx ou 5xx)
      console.error("Erro de resposta do servidor:", error.response.data);
    } else if (error.request) {
      // A solicitação foi feita, mas não houve resposta do servidor
      console.error("Sem resposta do servidor:", error.request);
    } else {
      // Algo aconteceu durante a configuração da solicitação que provocou um erro
      console.error("Erro durante a configuração da solicitação:", error.message);
    }
    return Promise.reject(error);
  }
);

export default httpClient;
