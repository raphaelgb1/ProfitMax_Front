<template>
  <SidebarsComp>
    <template v-slot:header>
      <div class="d-flex w-100 justify-content-center py-3">
        <h1>ProfitMax</h1>
      </div>
    </template>
    <template v-slot:body>

      <!-- <div class="dropup-center dropup dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
        </button>
        <ul class="dropdown-menu dropdown-menu-dark">
          <li><a class="dropdown-item active" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
      <div class="btn-group dropup">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Dropup
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Menu item</a></li>
          <li><a class="dropdown-item" href="#">Menu item</a></li>
          <li><a class="dropdown-item" href="#">Menu item</a></li>
        </ul>
      </div> -->
      <div class="d-flex justify-content-center">
        <div class="btn-group dropup-center dropup position-absolute bottom-0 translate-middle-y">
          <span type="button" class="badge d-flex align-items-center text-dark-emphasis bg-dark-subtle border border-dark-subtle rounded-pill" data-bs-toggle="dropdown">
            <img class="rounded-circle me-1" width="35" height="35" src="https://github.com/mdo.png" alt="">
            Perfil
            <span class="vr mx-2"></span>
            <a href="#"><i class="bi bi-chevron-up"></i></a>
          </span>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Menu item</a></li>
            <li><a class="dropdown-item" href="#">Menu item</a></li>
            <li><a class="dropdown-item" href="#">Menu item</a></li>
          </ul>
        </div>
      </div>
    </template>
  </SidebarsComp>
  <div>

  </div>
</template>

<script lang="ts">
import SidebarsComp from '@/components/SidebarsComp.vue';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'HomeView',
  components: {
    SidebarsComp
  },
});
</script>
