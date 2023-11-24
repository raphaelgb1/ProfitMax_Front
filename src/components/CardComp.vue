<template>
    <div role="button" class="card rounded-5" style="width: 18rem;" @click="$emit('OpenModal')">
        <div class="card-body d-flex flex-column align-items-center">
                <h6 class="card-subtitle mb-2 text-muted">{{ card.FullDate() }}</h6>
                <h2 class="card-title">{{ card.name }}</h2>
                <p class="card-text">{{ card.desc }}</p>
                <div :class="'d-flex align-items-center border rounded-5 '+ ClassBorder" style="width: max-content;">
                    <a href="#" :class="'btn rounded-5 ' + ClassButton()">
                        {{ card.type }}
                    </a>
                    <span class="mx-3">{{ ' R$ ' + card.value }}</span>
                </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Cards, CardType } from '@/entyti/Card'
export default defineComponent({
    name: 'CardComp',
    props: {
        card: {
            type: Object as () => Cards,
            required: true
        }
    },
    methods: {
        ClassButton():string {
            return this.card.type == CardType.Despesa ? 'btn-danger' : 'btn-primary'
        },
        ClassSpan():string {
            return this.card.type == CardType.Despesa ? 'btn-danger' : 'btn-primary'
        },
        ClassBorder():string {
            return this.card.type == CardType.Despesa ? 'border-danger' : 'border-primary'
        }
    }

})
</script>
<style></style>