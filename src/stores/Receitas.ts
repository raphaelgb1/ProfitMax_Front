import { defineStore } from 'pinia'
import httpClient from '@/http'
import { Store as Login } from './Login';

export const Store = defineStore('Transaction', {
    state: () => ({
    }),
    getters: {
    },
    actions: {
      async BuscasTransaction(){
        const login = Login();
        const { data } = await httpClient.get("/transactions",{params: { userId:login.User.Token }});
        console.log(data);
      }
    },
  })
  