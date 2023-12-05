import {defineStore} from 'pinia'
import httpClient from '@/http'
import {Store as Login} from './Login';
import {Cards, CradGil, Transaction} from '@/entyti/Card';
import {CreateTransactionDto} from "@/entyti/Transaction";

export const Store = defineStore('Transaction', {
    state: () => ({
        Cards: [] as Cards[]
    }),
    getters: {},
    actions: {
        async BuscasTransaction() {
            const login = Login();
            const {data} = await httpClient.get("/transactions", {params: {userId: login.User.id}});
            // const teste = await fetch(`http://localhost:3001/transactions?userId=${login.User.id}`);
            for (let i = 0; i < data.length; i++) {
                const temp = new Cards();
                temp.userId = data[i].IDUSUARIO;
                temp.categoryId = data[i].CATEGORIA_ID;
                temp.desc = data[i].DESCRICAO
                temp.createDate = data[i].DTCRIACAO
                temp.name = data[i].NOME
                // temp.paymentDate = data[i].DTPAGAMENTO
                temp.transactionID = data[i].IDTRANSACTIONS
                temp.paymentAccount = data[i].PAYMENT_ACCOUNT
                temp.paymentType = data[i].PAYMENT_TYPE_ID
                // temp.type = data[i].TIPO
                temp.value = data[i].VALOR
                this.Cards.push(temp)
            }
            console.log(this.Cards)
            // data.array.forEach((data:any)  => {
            //   const temp = new Cards();
            //   temp.userId = data.IDUSUARIO;
            //   temp.categoryId = data.CATEGORIA_ID;
            //   temp.desc = data.DESCRICAO
            //   temp.createDate = data.DTCRIACAO
            //   temp.name = data.NOME
            //   // temp.paymentDate = data.DTPAGAMENTO
            //   temp.transactionID = data.IDTRANSACTIONS
            //   temp.paymentAccount = data.PAYMENT_ACCOUNT
            //   temp.paymentType = data.PAYMENT_TYPE_ID
            //   // temp.type = data.TIPO
            //   temp.value = data.VALOR
            //   this.Cards.push(temp)
            // });
        },
        async CadastrarTransaction(Transaction: Cards) {
            const user = Login().User;

            const dto = new CreateTransactionDto(user.id, Transaction.value, Transaction.name, parseInt(Transaction.paymentType.toString()), parseInt(Transaction.categoryId.toString()), parseInt(Transaction.statusId.toString()), parseInt(Transaction.type.toString()), Transaction.paymentAccount,Transaction.desc, new Date(Transaction.createDate));

            console.log(dto);
            const {data} = await httpClient.post("/transactions", dto);
            console.log(data);
            this.BuscasTransaction();
        },
        async EditarTransaction(Transaction: Transaction) {
            const {data} = await httpClient.put("/transactions", Transaction);
            console.log(data);
            this.BuscasTransaction();
        },
        async DeletarTransaction(id: number) {
            const {data} = await httpClient.delete("/transactions", {params: {id}});
            console.log(data);
            this.BuscasTransaction();
        }
    },
})
  