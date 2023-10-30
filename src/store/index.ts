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
    },

    async ConfirmaEmail(Email: string){
      const { data } = await httpClient.post("/email", Email);
      console.log(data);
    },

    async ConfirmaCodigoEmail(User: Cadastro, Codigo: number){
      const { data } = await httpClient.post("/email/recovery", {
        userEmail: User.email,
        token: Codigo
      });
      console.log(data);
    },

    async ConfirmaSenha(User: Cadastro){
      const { data } = await httpClient.post("/email/password", {
        newEmail: User.email,
        newPassword: User.senha,
        confimationPassword: User.confirmacaoSenha
      } );
      console.log(data);
    },
  },
})
