<template>
  <SidebarsComp v-if="path">
    <template v-slot:header>
      <div class="d-flex w-100 justify-content-center py-3">
        <h1>ProfitMax</h1>
      </div>
    </template>
    <template v-slot:body>
      <ul class="nav flex-column">
        <li class="nav-item">
          <RouterLink class="nav-link " style="font-size: 24px; color: white" @click="Receita"  aria-current="page" to="/Receitas" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDark">Transações</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" style="font-size: 24px; color: white" @click="Relatorio" to="/Relatorio" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDark">Relatórios</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" style="font-size: 24px; color: Red" to="" @click="Sair" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDark">Sair</RouterLink>
        </li>
      </ul>
      <div class="d-flex justify-content-center">
        <div class="btn-group dropup-center dropup position-absolute bottom-0 translate-middle-y">
            <span type="button"
                  class="badge d-flex align-items-center text-dark-emphasis bg-dark-subtle border border-dark-subtle rounded-pill"
                  data-bs-toggle="dropdown">
              <img class="rounded-circle me-1" width="35" height="35" src="https://github.com/mdo.png" alt="">
              Perfil
              <span class="vr mx-2"></span>
              <a href="#"><i class="bi bi-chevron-up"></i></a>
            </span>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Perfil</a></li>
            <li><a class="dropdown-item" href="#">Menu item</a></li>
            <li><a class="dropdown-item" href="#">Menu item</a></li>
          </ul>
        </div>
      </div>
    </template>
  </SidebarsComp>
  <router-view/>
</template>
<script lang="ts">
import SidebarsComp from '@/components/SidebarsComp.vue';
import { Store } from "@/stores/Login";
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppView',
  components: {
    SidebarsComp
  },
  computed: {
    path() {
      return this.$route.name == 'login' ? false : true
    }
  },
  methods: {
    Receita() {
      this.$router.push('/Receitas');
    },
    Relatorio() {
      this.$router.push('/Relatorio');
    },
    Sair() {
      this.$router.push('/');
      Store().logout()
    }
  }
})
</script>
<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';
@import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
</style>
