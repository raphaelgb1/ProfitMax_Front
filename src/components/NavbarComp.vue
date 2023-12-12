<template>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid">
            <slot name="Logo"></slot>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav w-100 d-flex justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active disabled" aria-current="page">Saldo: {{ saldo }}</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-danger" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { CardType, statusId } from '@/entyti/Card';
import { Store } from '@/stores/Receitas';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavbarComp',
    computed:{
        saldo(){
            const store = Store();
            let saldo = 0;
            for (const card of store.Cards) {
                if(card.type == CardType.Despesa && card.statusId == statusId.PAGO)
                    saldo -= card.value;
                else if(card.statusId == statusId.PAGO)
                    saldo += card.value;
            }
            const Saldo = `${(saldo < 0 ? '- ': '')}R$ ${saldo.toFixed(2).toString().split('-').join('').replace('.',',')}`
            return Saldo
        }
    }

})
</script>