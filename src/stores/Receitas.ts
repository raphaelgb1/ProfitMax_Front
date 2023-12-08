import { defineStore } from 'pinia'
import httpClient from '@/http'
import { Store as Login } from './Login';
import { CardType, Cards } from '@/entyti/Card';
import { CreateTransactionDto } from "@/entyti/Transaction";
import { ref } from 'vue';

export const Store = defineStore('Transaction', {
    state: () => ({
        // Saldo: ref<number>(0),
        Cards: [] as Cards[]
    }),
    getters: {},
    actions: {
        async BuscasTransaction() {
            const login = Login();
            const { data } = await httpClient.get("/transactions", { params: { userId: login.User.id } });
            const cards: Cards[] = [];
            for (let i = 0; i < data.length; i++) {
                const card = new Cards().setCard(data[i])
                cards.push(card)
            }
            this.Cards = cards;
        },
        async CadastrarTransaction(Transaction: Cards) {
            const user = Login().User;

            const dto = new CreateTransactionDto(user.id, Transaction.value, Transaction.name, parseInt(Transaction.paymentType.toString()), parseInt(Transaction.categoryId.toString()), parseInt(Transaction.statusId.toString()), parseInt(Transaction.type.toString()), Transaction.paymentAccount, Transaction.desc, new Date(Transaction.createDate));

            console.log(dto);
            const { data } = await httpClient.post("/transactions", dto);
            console.log(data);
            this.BuscasTransaction();
        },
        async EditarTransaction(Transaction: Cards) {
            const dto = {
                  idUsuario     : Transaction.userId
                , valor         : Transaction.value*1
                , nome          : Transaction.name
                , descricao     : Transaction.desc
                , dtPagamento   : Transaction.paymentDate
                , paymentTypeId : Transaction.paymentType*1
                , categoriaId   : Transaction.categoryId*1
                , statusId      : Transaction.statusId*1
                , paymentAccount: Transaction.paymentAccount
                , tipo          : Transaction.type*1
                , transactionId : Transaction.transactionID
            }
            console.log(dto)
            const { data } = await httpClient.patch("/transactions", dto);
            console.log(data);
            this.BuscasTransaction();
        },
        async DeletarTransaction(id: number) {
            const { data } = await httpClient.delete(`/transactions/${id}`);
            console.log(data);
            this.BuscasTransaction();
        }
    },
})
