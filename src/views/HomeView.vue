<template>
  <div class="home">
    <TransactionCardComp value="200,00" date="28/03/2023" transaction-name="Magalu" type="receita" hour="12:20"></TransactionCardComp>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import TransactionCardComp from "@/components/TransactionCardComp.vue"; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    TransactionCardComp,
  },
});
</script>
