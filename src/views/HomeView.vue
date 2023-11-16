<template>
  <div>
    <button @click="modalAberto2.Modal.show">abrir modal</button>
    <ModalComp :Modal="modalAberto2">
      <template v-slot:header>
        <h5 class="modal-title">Cadastrar Nova Transação</h5>
      </template>
      <template v-slot:body>
        <form class="d-flex flex-column gap-3">
          <div class="form-floating">
            <input type="text" class="form-control" id="InputDescricao" v-model="modalAberto2.props.descricao"
              placeholder="Descrição">
            <label for="InputDescricao">Descrição</label>
          </div>
          <div class="form-floating">
            <input type="text" class="form-control" id="InputTotal" v-model="modalAberto2.props.total" placeholder="Valor Total">
            <label for="InputTotal">Valor Total</label>
          </div>
          <div class="d-flex gap-3"> <!-- Contêiner flexível para posicionar os campos lado a lado -->
            <div class="form-floating">
              <input type="filter" class="form-control" id="InputTipo" v-model="modalAberto2.props.tipo" placeholder="Tipo">
              <label for="InputTipo">Tipo</label>
            </div>
            <div class="form-floating">
              <input type="text" class="form-control" id="InputCategoria" v-model="modalAberto2.props.categoria"
                placeholder="Categoria">
              <label for="InputCategoria">Categoria</label>
            </div>
          </div>
          <!-- <Btn :button="botaoCadastro">
              <template #icon>
                <i class="bi bi-patch-plus-fill"></i>
              </template>
            </Btn> -->
        </form>
      </template>
    </ModalComp>
    <!-- <Header :title="title" :valor="valor" :button="botao" /> -->
    <TransactionCardComp value="200,00" date="28/03/2023" transaction-name="Magalu" type="receita" hour="12:20">
    </TransactionCardComp>
    <CardComp v-for="card in cards" :key="card.id" :card="card"></CardComp>
  </div>
</template>
  
<script lang="ts">
// import Btn from '@/components/Button.vue';
// import Header from '@/components/Header.vue';
import ModalComp from '@/components/ModalComp.vue';
import { Transaction } from '@/entyti/index';
import { defineComponent } from 'vue';
import TransactionCardComp from "@/components/TransactionCardComp.vue";
import CardComp from '@/components/CardComp.vue'
import { Card, CardType } from '@/entyti/Card';
import { ModalVue } from '@/entyti/Modal';

export default defineComponent({
  name: 'HomeView',
  components: {
    // Header,
    ModalComp,
    // Btn,
    TransactionCardComp,
    CardComp,
  },
  data() {
    const cards: Array<Card> = [];
    cards.push(new Card(1, new Date().toString(), "Magalu", "Ações", CardType.Receita, "100,00"));
    const modalAberto2 = new ModalVue<Transaction>(new Transaction());
    return {
      modalAberto2,
      cards,
      title: 'Investimentos',
      valor: -1,
      Transaction: {} as Transaction,
      botao: {
        name: 'Registrar Investimentos',
        callback: this.abrirModal,
      },
      botaoCadastro: {
        name: 'Cadastrar',
        callback: this.registrar,
      },
      modalAberto: false,
    };
  },
  methods: {
    registrar() {
      return false
    },
    abrirModal() {
      this.modalAberto = true;
    },
    fecharModal() {
      this.modalAberto = false;
    },
  },
});
</script>
