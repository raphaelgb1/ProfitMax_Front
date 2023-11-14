import { defineStore } from 'pinia'
import httpClient from '@/http'
import { Cadastro, Login } from '@/entyti/Login'
import { User } from '@/entyti/User'

export const Store = defineStore('Login', {
  state: () => ({
    User: {} as User
  }),
  getters: {

  },
  actions: {
    async CadastrarUser(User: Cadastro){
      console.log("usuario: " + User)
      const { data } = await httpClient.post("/user/create", User);
      if(data.body){
        this.User = data.body;
        prompt('Usuario criado!')
      }
      console.log(data);
      console.log(this.User);
    },

    async ConfirmaEmail(Email: string){
      const { data } = await httpClient.post("/email", {userEmail: Email});
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
    async Logar(login: Login) {
      const { data } = await httpClient.post("/user/get/login", login);
      if(data.code == 200){
        this.User = new User(login.email,data.body.token);
        console.log(data)
        return true;
      }
      return false;
    }
  },
})
