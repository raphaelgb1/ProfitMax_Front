import { defineStore } from 'pinia'
import httpClient from '@/http'
import { Store as Login } from './Login';
import { Cards, Transaction } from '@/entyti/Card';

export const Store = defineStore('Transaction', {
    state: () => ({
      Cards: [] as Cards[]
    }),
    getters: {
    },
    actions: {
      async BuscasTransaction(){
        const login = Login();
        const { data } = await httpClient.get("/transactions",{params: { userId:login.User.id }});
        this.Cards = data;
        console.log(data);
      },
      async CadastrarTransaction(Transaction: Transaction){
        const { data } = await httpClient.post("/transactions", Transaction);
        console.log(data);
        this.BuscasTransaction();
      },
      async EditarTransaction(Transaction: Transaction){
        const { data } = await httpClient.put("/transactions",Transaction);
        console.log(data);
        this.BuscasTransaction();
      },
      async DeletarTransaction(id: number){
        const { data } = await httpClient.delete("/transactions",{params: { id }});
        console.log(data);
        this.BuscasTransaction();
      }
    },
  })
  