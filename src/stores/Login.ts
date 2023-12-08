import { Cadastro, Login } from '@/entyti/Login'
import toast from '@/entyti/Toastr'
import { User } from '@/entyti/User'
import httpClient from '@/http'
import { defineStore } from 'pinia'

export const Store = defineStore('Login', {
  state: () => ({
    User: JSON.parse(localStorage.getItem("User") || "{}"),
    isAuthenticated: typeof localStorage.getItem("User") == 'string' || false
  }),
  getters: {

  },
  actions: {
    logout(){
      localStorage.clear();
      this.User = {};
      this.isAuthenticated = false;
    },
    async CadastrarUser(User: Cadastro){
      try {
        console.log("usuario: " + User)
        const { data } = await httpClient.post("/user/create", User);
        if(data.body){
          this.User = data.body;
          toast.success('Usuário criado com sucesso!')
        }
        console.log(data);
        console.log(this.User);
      } catch (error) {
        toast.error('Erro ao cadastrar usuário')
      }
    },

    async ConfirmaEmail(Email: string){
      try {
        const { data } = await httpClient.post("/email", {userEmail: Email});
        console.log(data);
        toast.success('Email enviado!')
      } catch (error) {
        toast.error('Erro ao enviar email!')
      }
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
      try {
        const { data } = await httpClient.post("/user/get/login", login);
        if(data.status){
          this.User = new User(login.email,data.body.token, data.body.id);
          localStorage.setItem("User", JSON.stringify(this.User));
          console.log(data)
          this.isAuthenticated = true;
          return true;
        }
        toast.error('Usuário não encontrado ou inválido' + '\n' + 'Verifique email e senha!')
        return false;
      } catch (error: any) {
        if (error?.response?.status == 403)
          toast.error('Usuário não encontrado ou inválido' + '\n' + 'Verifique email e senha!')
        else
          toast.error('Erro ao realizar Login!')
      }
    }
  },
})
