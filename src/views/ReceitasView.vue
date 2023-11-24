<template>
    <div class="d-flex my-5 gap-3 flex-column">
        <button class="btn m-auto my-0 d-block btn-dark" @click="NovoCard">Novo Registro</button>
        <div class="d-flex gap-3 flex-wrap justify-content-center">
            <CardComp v-for="card in Cards" :key="card.userId" :card="card" @OpenModal="EditarCard(card)"></CardComp>
        </div>
    </div>
    <ModalComp :Modal="Modal">
        <template v-slot:header>
        <h5 class="modal-title">Cadastrar Nova Transação</h5>
      </template>
      <template v-slot:body>
        <form class="d-flex flex-column gap-3">
          <div class="form-floating">
            <input type="text" class="form-control" id="InputDescricao" v-model="Modal.props.desc"
              placeholder="Descrição">
            <label for="InputDescricao">Descrição</label>
          </div>
          <div class="form-floating">
            <input type="text" class="form-control" id="InputTotal" v-model="Modal.props.value" placeholder="Valor Total">
            <label for="InputTotal">Valor Total</label>
          </div>
          <div class="d-flex gap-3"> <!-- Contêiner flexível para posicionar os campos lado a lado -->
            <div class="form-floating">
              <input type="filter" class="form-control" id="InputTipo" v-model="Modal.props.type" placeholder="Tipo">
              <label for="InputTipo">Tipo</label>
            </div>
            <div class="form-floating">
              <input type="text" class="form-control" id="InputCategoria" v-model="Modal.props.categoryId"
                placeholder="Categoria">
              <label for="InputCategoria">Categoria</label>
            </div>
          </div>
        </form>
      </template>
    </ModalComp>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import CardComp from '@/components/CardComp.vue'
import { Cards } from '@/entyti/Card';
import { Store } from '@/stores/Receitas';
import ModalComp from '@/components/ModalComp.vue';
import { ModalVue } from '@/entyti/Modal';
export default defineComponent({
    name: 'ReceitasView',
    components: {
        CardComp,
        ModalComp
    },
    data() {
        // const cards: Array<Card> = [];
        // cards.push(new Card(new Date().toString(), "Magalu", "Ações", CardType.Receita, "1000,00", 1));
        // cards.push(new Card(new Date().toString(), "Magalu", "Ações", CardType.Despesa, "10,00", 2));
        // cards.push(new Card(new Date().toString(), "Magalu", "Ações", CardType.Receita, "1010,00", 3));
        // cards.push(new Card(new Date().toString(), "Magalu", "Ações", CardType.Receita, "1002,00", 4));
        // cards.push(new Card(new Date().toString(), "Magalu", "Ações", CardType.Despesa, "1030,00", 5));
        // cards.push(new Card(new Date().toString(), "Magalu", "Ações", CardType.Despesa, "1400,00", 6));
        // cards.push(new Card(new Date().toString(), "Magalu", "Ações", CardType.Receita, "1500,00", 7));
        // cards.push(new Card(new Date().toString(), "Magalu", "Ações", CardType.Despesa, "1060,00", 8));
        // cards.push(new Card(new Date().toString(), "Magalu", "Ações", CardType.Receita, "1007,00", 9));
        // cards.push(new Card(new Date().toString(), "Magalu", "Ações", CardType.Despesa, "1300,00", 10));
        // cards.push(new Card(new Date().toString(), "Magalu", "Ações", CardType.Receita, "89100,00", 11));
        // cards.push(new Card(new Date().toString(), "Magalu", "Ações", CardType.Receita, "5100,00", 12));
        // cards.push(new Card(new Date().toString(), "Magalu", "Ações", CardType.Despesa, "100,00", 13));
        // cards.push(new Card(new Date().toString(), "Magalu", "Ações", CardType.Despesa, "17800,00", 14));
        // cards.push(new Card(new Date().toString(), "Magalu", "Ações", CardType.Receita, "10780,00", 15));
        // cards.push(new Card(new Date().toString(), "Magalu", "Ações", CardType.Despesa, "10970,00", 16));
        const Modal = new ModalVue<Cards>(new Cards())
        return {
            // cards,
            Modal
        }
    },
    mounted() {
        // const store = Store();
        // store.BuscasTransaction();
    },
    computed: {
        Cards() {
            return Store().Cards;
        }
    },
    methods: {
        NovoCard() {
            this.Modal.SetProps(new Cards());
            this.Modal.Modal.show();
        },
        EditarCard(card: Cards) {
            this.Modal.props = card
            this.Modal.Modal.show();
        }
    }
})
</script>