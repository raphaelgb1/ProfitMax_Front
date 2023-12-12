<!-- ExpensePanel.vue -->

<template>
  <div class="panel">
    <h2>{{ title }}</h2>
    <div class="panel-content">
      <div class="panel-info">
        <p>Total: R$ {{ total }}</p>
        <p>Percentual: {{ percent }}%</p>
        <p>Quantidade: {{ quantity }}</p>
      </div>
      <div class="panel-payments">
        <h3>Pagamentos em Atraso</h3>
        <ul>
          <li v-for="payment in overduePayments" :key="payment.NOME">
            {{ payment.NOME }} - R$ {{ payment.VALOR }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    total: Number,
    percent: Number,
    quantity: Number,
    overduePayments: Array,
  },
};
</script>

<style scoped>
.panel {
  max-width: 300px; /* Defina a largura máxima desejada */
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 10px;
}

.panel h2 {
  font-size: 1.2em;
  margin-bottom: 5px;
}

.panel-content {
  display: flex;
  justify-content: space-between;
}

.panel-info,
.panel-payments {
  flex: 1;
}

.panel-payments h3 {
  margin-top: 0;
  font-size: 1em;
}

.panel-payments ul {
  padding: 0;
  list-style-type: none;
  margin: 0;
}

.panel-payments li {
  margin-bottom: 3px;
  font-size: 0.9em;
}
</style>
