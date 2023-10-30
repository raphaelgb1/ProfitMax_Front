<template>
  <div class="col-sm-4 mb-2 mb-sm-0">
    <div class="card" :class="cardClass">
      <div class="card-body">
        <div>
          <span class="card-title" style="padding-right: 12px">{{ formatDate(date) }}</span>
          <span class="card-title">{{ formatHour(hour) }}</span>
        </div>
        <h2 class="card-text">{{ transactionName }}</h2>
        <div class="type_and_price">
          <a :class="typeClass" href="#" class="btn">{{ cardType }}</a>
          <span class="value">{{ 'R$ ' + props.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps, computed} from 'vue';

enum CardType {
  Despesa = 'despesa',
  Receita = 'receita'
}

const props = defineProps({
  type: String,
  date: String,
  hour: String,
  transactionName: String,
  value: {type: String, required: true},
});

const typeClass = computed(() => {
  return {
    'btn-danger': props.type === CardType.Despesa,
    'btn-primary': props.type === CardType.Receita,
  };
});

const cardType = computed(() => {
  return props.type === CardType.Despesa ? 'Despesa' : 'Receita';
});

const cardClass = computed(() => {
  return {
    'card': true,
  };
});

function formatDate(date: string) {
  return date;
}
function formatHour(hour: string) {
  return hour;
}
</script>

<style scoped>
.card {
  max-width: 400px;
  width: auto;
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: #fff;
  transition: box-shadow 0.2s;
  cursor: pointer;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  .card-title{
    font-size: 12px;
    color: gray;
  }

  .btn{
    border-radius: 20px;
  }
}

.type_and_price {
  display: inline-flex;
  gap: 5px;
  align-items: center;
  padding-right: 20px;
  border: 1px solid #ccc;
  border-radius: 20px;
}


</style>
