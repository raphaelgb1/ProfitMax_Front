<template>
  <div class="header">
    <h1>{{ title }}</h1>
    <div>
      <p class="value d-inline">Valor:</p>
      <p class="value d-inline" :class="{ 'negative': valor < 0, 'positive': valor >= 0 }">R${{ valor.toFixed(2) }}</p>
    </div>
    <Btn :button="button">
      <template #icon>
        <i class="bi bi-plus bi-lg"></i>
      </template>
    </Btn>
  </div>
</template>
  
<script lang="ts">
import { ButtonCallback } from '@/entyti/interface';
import { defineComponent } from 'vue';
import Btn from './Button.vue';


export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header',
    components: {
      Btn
    },
    props: {
        title: String,
        valor: {
            Number,
            default: 0
        },
        button: {
            type: Object as () => {
                name: string;
                callback: ButtonCallback;
            },
            default: null
        }
    }
});
</script>
  
<style scoped>
.header {
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header h1 {
  font-size: 24px;
  margin: 0;

}

.header p {
  font-size: 16px;
  margin: 0;
}

.button {
  background-color: #17181A;
  gap: 8px;
  color: white;
  border: none;
  padding: 16px 24px 16px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 12px;
}

.font {
  font-size: 20px;
}

.value {
  font-weight: 400;
  font-size: 28px !important;
}

.positive {
  color: #26C436
}

.negative {
  color: #c42626
}

@media screen and (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
  }

  .button {
    margin-top: 10px;
  }
}
</style>
  