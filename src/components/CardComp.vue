<template>
    <div role="button" class="card rounded-5" style="width: 18rem;">
        <div class="card-body d-flex flex-column align-items-center">
                <h6 class="card-subtitle mb-2 text-muted">{{ card.FullDate() }}</h6>
                <h2 class="card-title">{{ card.transactionName }}</h2>
                <p class="card-text">{{ card.transactionDescricao }}</p>
                <div :class="'d-flex align-items-center border rounded-5 '+ ClassBorder" style="width: max-content;">
                    <a href="#" :class="'btn rounded-5 ' + ClassButton()">
                        {{ card.Type }}
                    </a>
                    <span class="mx-3">{{ ' R$ ' + card.value }}</span>
                </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Card, CardType } from '@/entyti/Card'
export default defineComponent({
    name: 'CardComp',
    props: {
        card: {
            type: Object as () => Card,
            required: true
        }
    },
    methods: {
        ClassButton():string {
            return this.card.Type == CardType.Despesa ? 'btn-danger' : 'btn-primary'
        },
        ClassSpan():string {
            return this.card.Type == CardType.Despesa ? 'btn-danger' : 'btn-primary'
        },
        ClassBorder():string {
            return this.card.Type == CardType.Despesa ? 'border-danger' : 'border-primary'
        }
    }

})
</script>
<style></style>