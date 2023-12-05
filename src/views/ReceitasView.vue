<template>
  <div class="d-flex my-5 gap-3 flex-column">
    <button class="btn m-auto my-0 d-block btn-dark" @click="NovoCard">Novo Registro</button>
    <div class="d-flex gap-3 flex-wrap justify-content-center">
      <CardComp v-for="card in Cards" :key="card.userId" :card="card" @OpenModal="EditarCard(card)"></CardComp>
    </div>
  </div>
  <ModalComp :Modal="Modal">
    <template v-slot:header>
      <h5 class="modal-title">{{ editar ? "Editar" : "Cadastrar Nova"}} Transação</h5>
    </template>
    <template v-slot:body>
      <form class="d-flex flex-column gap-3">
        <div class="form-floating">
          <input type="text" class="form-control" id="InputName" v-model="Modal.props.name" placeholder="Nome">
          <label for="InputName">Nome</label>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control" id="InputDescricao" v-model="Modal.props.desc" placeholder="Descrição">
          <label for="InputDescricao">Descrição</label>
        </div>
        <div class="form-floating">
          <input type="number" class="form-control" id="InputTotal" v-model="Modal.props.value" placeholder="Valor Total">
          <label for="InputTotal">Valor Total</label>
        </div>
        <div class="d-flex gap-3"> <!-- Contêiner flexível para posicionar os campos lado a lado -->
          <select class="form-select" aria-label="Default select example" v-model="Modal.props.type">
            <option value="1">Despesa</option>
            <option value="2">Receita</option>
          </select>
          <select class="form-select" aria-label="Default select example" v-model="Modal.props.categoryId">
            <option value="1">LAZER</option>
            <option value="2">RECORENTE</option>
            <option value="3">BENS MATERIAS</option>
            <option value="4">EXTRAS</option>
          </select>
        </div>
        <div class="form-floating">
          <select class="form-select" aria-label="Default select example" id="TipoPagamento" v-model="Modal.props.paymentType">
            <option value="1">Credito_em_conta</option>
            <option value="2">Boleto</option>
            <option value="3">Debito_Automatico</option>
            <option value="4">Conta_Corrente</option>
            <option value="5">Dinheiro</option>
            <option value="6">Contra_cheque</option>
            <option value="7">Cartao_de_Credito</option>
            <option value="8">Cartao_de_Debito</option>
            <option value="9">PIX</option>
          </select>
          <label for="TipoPagamento">Tipo de pagamento</label>
        </div>
        <div class="form-floating">
            <input id="Date" class="form-control" type="date" v-model="Modal.props.createDate" />
            <label for="Date">Date</label>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control" id="InputDescricaoPagamento" v-model="Modal.props.paymentAccount" placeholder="Descrição">
          <label for="InputDescricaoPagamento">Descrição de pagamento</label>
        </div>
        <div class="form-floating">
          <select class="form-select" aria-label="Default select example" id="TipoPagamento" v-model="Modal.props.statusId">
            <option value="1">PAGO</option>
            <option value="2">PEDENTE</option>
            <option value="3">CANCELADO</option>
            <option value="4">AGENDADO</option>
          </select>
          <label for="TipoPagamento">Tipo de pagamento</label>
        </div>
        <button type="button" class="btn btn-dark py-3" @click="Salvar"><i class="bi bi-person-plus"></i>Salvar</button>
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
    const Modal = new ModalVue<Cards>(new Cards());
    const editar = false;
    return {
      // cards,
      Modal,
      editar
    }
  },
  mounted() {
    const store = Store();
    if(store.Cards.length == 0){
      store.BuscasTransaction();
    }
  },
  computed: {
    Cards() {
      return Store().Cards;
    }
  },
  methods: {
    NovoCard() {
      this.Modal.SetProps(new Cards());
      this.editar = false;
      this.Modal.Modal.show();
    },
    EditarCard(card: Cards) {
      this.Modal.props = card;
      this.editar = true;
      this.Modal.Modal.show();
    },
    Salvar(){
      if(this.editar){
        Store().EditarTransaction(this.Modal.props);
      }else{
        Store().CadastrarTransaction(this.Modal.props);
      }
    }
  }
})
</script>