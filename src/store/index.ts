import { defineStore } from 'pinia'
import httpClient from '@/http'
import { Cadastro } from '@/entyti/interface/Login'

export const useLoginStore = defineStore('Login', {
  state: () => ({ 
    count: 0, 
  }),
  getters: {
    double: state => state.count * 2,
  },
  actions: {
    async CadastrarUser(User: Cadastro){
      console.log("usuario: " + User)
      const { data } = await httpClient.post("/user/create", User);
      console.log(data);
    }
  },
})
