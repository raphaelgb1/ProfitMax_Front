<template>
    <div class="d-flex my-5 gap-3 flex-column">
        <button class="btn m-auto my-0 d-block btn-dark">Novo Registro</button>
        <div class="d-flex gap-3 flex-wrap justify-content-center">
            <CardComp v-for="card in cards" :key="card.id" :card="card"></CardComp>
        </div>
    </div>
    <ModalComp :Modal="Modal"></ModalComp>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import CardComp from '@/components/CardComp.vue'
import { Card, CardType } from '@/entyti/Card';
import { Store } from '@/stores/Receitas';
import ModalComp from '@/components/ModalComp.vue';
import { ModalVue } from '@/entyti/Modal';
export default defineComponent({
    name:'ReceitasView',
    components: {
    CardComp,
    ModalComp
},
    data(){
        const cards: Array<Card> = [];
        cards.push(new Card(1,new Date().toString(), "Magalu", "Ações", CardType.Receita, "100,00"));
        cards.push(new Card(2,new Date().toString(), "Magalu", "Ações", CardType.Despesa, "100,00"));
        cards.push(new Card(3,new Date().toString(), "Magalu", "Ações", CardType.Receita, "100,00"));
        cards.push(new Card(4,new Date().toString(), "Magalu", "Ações", CardType.Receita, "100,00"));
        cards.push(new Card(5,new Date().toString(), "Magalu", "Ações", CardType.Despesa, "100,00"));
        cards.push(new Card(6,new Date().toString(), "Magalu", "Ações", CardType.Despesa, "100,00"));
        cards.push(new Card(7,new Date().toString(), "Magalu", "Ações", CardType.Receita, "100,00"));
        cards.push(new Card(8,new Date().toString(), "Magalu", "Ações", CardType.Despesa, "100,00"));
        cards.push(new Card(9,new Date().toString(), "Magalu", "Ações", CardType.Receita, "100,00"));
        cards.push(new Card(10,new Date().toString(), "Magalu", "Ações", CardType.Despesa, "100,00"));
        cards.push(new Card(11,new Date().toString(), "Magalu", "Ações", CardType.Receita, "100,00"));
        cards.push(new Card(12,new Date().toString(), "Magalu", "Ações", CardType.Receita, "100,00"));
        cards.push(new Card(13,new Date().toString(), "Magalu", "Ações", CardType.Despesa, "100,00"));
        cards.push(new Card(14,new Date().toString(), "Magalu", "Ações", CardType.Despesa, "100,00"));
        cards.push(new Card(15,new Date().toString(), "Magalu", "Ações", CardType.Receita, "100,00"));
        cards.push(new Card(16,new Date().toString(), "Magalu", "Ações", CardType.Despesa, "100,00"));
        const Modal = new ModalVue()
        return {
            cards,
            Modal
        }
    },
    mounted() {
        const store = Store();
        store.BuscasTransaction()
    }
})
</script>