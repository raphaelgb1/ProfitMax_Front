<template>
  <div class="dashboard">
    <div class="inline-cards">
      <!-- Card de Saldo Total -->
      <div class="card saldo-card">
        <h2>Saldo Total</h2>
        <div class="saldo-number">
          R$ {{ dashboard?.body?.saldo_atual }}
        </div>
      </div>
      <!-- Painel de Despesa -->
      <ExpensePanel
        title="Despesa"
        :total="dashboard?.body?.despesa.total"
        :percent="dashboard?.body?.despesa.percent"
        :quantity="dashboard?.body?.despesa.quantidade"
        :overduePayments="dashboard?.body?.despesa.pagamentos.atraso"
      />

      <!-- Painel de Receita -->
      <ExpensePanel
        title="Receita"
        :total="dashboard?.body?.receita.total"
        :percent="dashboard?.body?.receita.percent"
        :quantity="dashboard?.body?.receita.quantidade"
        :overduePayments="dashboard?.body?.receita.pagamentos.hoje"
      />

    </div>

    <!-- Outros Cards -->
    <div class="other-cards">

      <!-- Card de Gráfico de Pizza - Métodos de Pagamento -->
      <div class="card chart-container">
        <h2>Métodos de Pagamento</h2>
        <canvas ref="pagamentoChart" width="400" height="400"></canvas>
      </div>

      <!-- Card de Gráfico de Pizza - Categorias -->
      <div class="card chart-container">
        <h2>Categorias</h2>
        <canvas ref="categoriasChart" width="400" height="400"></canvas>
      </div>

      <!-- Cards de Comparação Despesa x Receita -->
      <div class="card chart-container">
        <h2>Total</h2>
        <canvas ref="totalChart" width="400" height="200"></canvas>
      </div>

      <div class="card chart-container">
        <h2>Percentual</h2>
        <canvas ref="percentualChart" width="400" height="200"></canvas>
      </div>

      <div class="card chart-container">
        <h2>Quantidade</h2>
        <canvas ref="quantidadeChart" width="400" height="200"></canvas>
      </div>

      <!-- Card de Movimentação - Ajustado para ocupar mais espaço -->
      <div class="card chart-container large-card">
        <h2>Movimentação Mensal</h2>
        <canvas ref="movimentacaoChart" width="800" height="400"></canvas>
      </div>

    </div>
  </div>
</template>
<script lang="ts">
import ExpensePanel from '@/components/ExpensePanel.vue';
import { Store } from '@/stores/Dashboard';
import Chart from 'chart.js/auto';
import { format, isBefore, isToday } from 'date-fns';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'RelatorioView',
  components: { ExpensePanel },
  data() {
    return {
      dashboard: null as unknown as any,
      dataReady: false,
      calendarDays: [] as any[],
    };
  },
  methods: {
    async fetchData() {
      const store = Store();
      const response = await store.getDasbboard();
      this.dashboard = response?.data;
      this.dataReady = true;
    },
    createCalendar() {
      const today = new Date();
      const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
      const despesaPagamentos = this.dashboard?.body?.despesa.pagamentos;
      const receitaPagamentos = this.dashboard?.body?.receita.pagamentos;

      this.calendarDays = Array.from({ length: lastDayOfMonth }, (_, index) => {
        const date = new Date(today.getFullYear(), today.getMonth(), index + 1);

        const despesaTransactions = despesaPagamentos?.atraso.concat(despesaPagamentos?.hoje || []).filter((payment: any) =>
          isBefore(date, new Date(payment.DUE_DATE))
        );

        const receitaTransactions = receitaPagamentos?.atraso.concat(receitaPagamentos?.hoje || []).filter((payment: any) =>
          isBefore(date, new Date(payment.DUE_DATE))
        );

        const transactions = [
          ...this.formatTransactions(despesaTransactions, 'despesa'),
          ...this.formatTransactions(receitaTransactions, 'receita'),
        ];

        const isTodayFlag = isToday(date) && transactions.some(transaction => transaction.type === 'despesa' && !transaction.isPastDue);
        const isPastDueFlag = transactions.some(transaction => transaction.type === 'despesa' && transaction.isPastDue);
        const isFutureFlag = transactions.some(
          transaction => transaction.type === 'despesa' && !transaction.isPastDue && !isToday(new Date(transaction.DTPAGAMENTO))
        );


        return {
          date: format(date, 'yyyy-MM-dd'),
          day: index + 1,
          isToday: isTodayFlag,
          isPastDue: isPastDueFlag,
          isFuture: isFutureFlag,
          transactions,
        };
      });
    },


    formatTransactions(transactions: any[], type: string) {
      return transactions?.map((transaction) => ({
        id: transaction.id,
        type,
        name: transaction.NOME,
        value: transaction.VALOR,
        isPastDue: transaction.isPastDue,
        DTPAGAMENTO: transaction.DTPAGAMENTO  // Adicione esta linha
      })) || [];
    },
    createChartLine(refName: any, data: any, labels: any) {
      this.createChart(refName, data, labels, 'line', [5,5]);
    },
    createChartBar(refName: any, data: any, labels: any) {
      this.createChart(refName, data, labels, 'bar');
    },
    createChartPieCategories(refName: any, data: any) {
      const canvasRef = this.$refs[refName];

      if (canvasRef instanceof HTMLCanvasElement && this.dataReady) {
        const ctx = canvasRef.getContext('2d');

        if (ctx) {
          const labels = Object.keys(data);
          const values = Object.values(data).map((categoria: any) => categoria.total);

          new Chart(ctx, {
            type: 'pie',
            data: {
              labels: labels,
              datasets: [
                {
                  label: 'Total',
                  data: values,
                  backgroundColor: this.generateRandomColors(values.length),
                },
              ],
            },
            options: {
              // Pode adicionar opções específicas do gráfico de pizza aqui, se necessário
            },
          });
        }
      } else {
        console.error(`Ref '${refName}' is not an HTMLCanvasElement or data is not ready.`);
      }
    },
    createChartPie(refName: any, data: any, labels: any) {
      const canvasRef = this.$refs[refName];

      if (canvasRef instanceof HTMLCanvasElement && this.dataReady) {
        const ctx = canvasRef.getContext('2d');

        if (ctx) {
          new Chart(ctx, {
            type: 'pie',
            data: {
              labels: labels,
              datasets: [
                {
                  label: 'Valor',
                  data: data,
                  backgroundColor: this.generateRandomColors(data.length),
                },
              ],
            },
            options: {
            },
          });
        }
      } else {
        console.error(`Ref '${refName}' is not an HTMLCanvasElement or data is not ready.`);
      }
    },
    createChart(refName: any, data: any, labels: any, type: any, borderDash?: any) {
      const canvasRef = this.$refs[refName];

      if (canvasRef instanceof HTMLCanvasElement && this.dataReady) {
        const ctx = canvasRef.getContext('2d');

        if (ctx) {
          new Chart(ctx, {
            type: type,
            data: {
              labels: labels,
              datasets: [
                {
                  label: 'Valor',
                  data: data,
                  backgroundColor: type === 'bar' ? 'rgba(75, 192, 192, 0.2)' : this.generateRandomColors(data.length),
                  borderColor: type === 'bar' ? 'rgba(75, 192, 192, 1)' : '#000',
                  borderWidth: 2,
                },
              ],
            },
          });
        }
      } else {
        console.error(`Ref '${refName}' is not an HTMLCanvasElement or data is not ready.`);
      }
    },
    createChartBarDespesaReceita(refName: any, data: any, label: string, color: string) {
      const canvasRef = this.$refs[refName];

      if (canvasRef instanceof HTMLCanvasElement && this.dataReady) {
        const ctx = canvasRef.getContext('2d');

        if (ctx) {
          new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ['Receita', 'Despesa'],
              datasets: [
                {
                  label: label,
                  data: data,
                  backgroundColor: [color, 'red'],
                },
              ],
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          });
        }
      } else {
        console.error(`Ref '${refName}' is not an HTMLCanvasElement or data is not ready.`);
      }
    },

    generateRandomColors(count: number) {
      const colors = [];
      for (let i = 0; i < count; i++) {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        colors.push(randomColor);
      }
      return colors;
    },
  },
  async mounted() {
    await this.fetchData();
    const dias = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate() + 1;

    if (this.dataReady) {
      this.createChartBar('despesaChart', [20, 20], ['Despesa Atraso', 'Despesa Hoje']);
      this.createChartBar('receitaChart', [30, 40], ['Receita Hoje', 'Outro']);
      this.createChartPieCategories('categoriasChart', this.dashboard?.body?.categorias || {});
      this.createChartLine(
        'movimentacaoChart',
        Array.from({ length: dias }, (_, index) => {
          const foundDate = this.dashboard?.body?.movimentacao.find((data: any) => {
            return new Date(data.data).getDate() === index + 1;
          });

          return foundDate ? foundDate.saldo : '';
        }) || [],
        Array.from({ length: dias }, (_, index) => {
          const foundDate = this.dashboard?.body?.movimentacao.find((data: any) => {
            return new Date(data.data).getDate() === index + 1;
          });
          return foundDate && new Date(foundDate.data).getMonth() === new Date().getMonth() ? foundDate.data : '';
        }) || []
      );
      this.createChartPie(
        'pagamentoChart',
        Object.values(this.dashboard?.body?.pagamentos).map((metodo: any) => metodo.total),
        Object.keys(this.dashboard?.body?.pagamentos)
      );
      const totalData = [
        this.dashboard?.body?.receita.total,
        this.dashboard?.body?.despesa.total,
      ];

      const percentualData = [
        this.dashboard?.body?.receita.percent,
        this.dashboard?.body?.despesa.percent,
      ];

      const quantidadeData = [
        this.dashboard?.body?.receita.quantidade,
        this.dashboard?.body?.despesa.quantidade,
      ];

      this.createChartBarDespesaReceita('totalChart', totalData, 'Total', 'green');
      this.createChartBarDespesaReceita('percentualChart', percentualData, 'Percentual', 'green');
      this.createChartBarDespesaReceita('quantidadeChart', quantidadeData, 'Quantidade', 'green');

      this.createCalendar();
    }
  },
});
</script>

<style scoped>
.card {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 15px;
  margin: 10px;
  display: inline-block;
  min-width: 200px;
}

.chart-container {
  margin-top: 20px;
}

.movimentacao-card {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 15px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.movimentacao-card:hover {
  transform: scale(1.05);
}

.saldo-card {
  background-color: #51a80a;
  /* Cor de fundo do card */
  color: #fff;
  /* Cor do texto */
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Sombra */
  transition: transform 0.3s ease-in-out;
}

.saldo-card:hover {
  transform: scale(1.05);
  /* Efeito de escala ao passar o mouse */
}

.saldo-number {
  font-size: 65px;
  font-weight: bold;
  margin-top: 10px;
}

.calendar-container {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 15px;
  margin: 10px;
  overflow: hidden;
}

.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

.calendar div {
  position: relative;
  padding: 5px;
  text-align: center;
  font-weight: bold;
}

.day-number {
  display: block;
}

.transactions-tooltip {
  position: absolute;
  top: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: none;
}

.calendar-day:hover .transactions-tooltip {
  display: block;
}

.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.inline-cards {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.other-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
}

.large-card {
  width: 100%; /* Largura total do container pai */
  max-width: 1200px; /* Largura máxima para não ocupar a tela inteira */
  height: 400px; /* Altura desejada */
}
</style>