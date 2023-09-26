<template>
    <div class="w-100 d-flex justify-content-end p-5 vh-100">
        <div class="p-5 w-30 h-50 d-flex flex-column justify-content-center gap-3">
            <h2 class="text-white" style="text-align: center;">Profit<b class="text-danger">Max</b></h2>
            <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
            </div>
            <div class="d-flex flex-column gap-3">
                <p class="text-white">Esqueceu sua senha? <b class="text-danger">Clique aqui</b></p>
                <p class="text-white">Novo por Aqui? <b class="text-danger">Clique aqui</b></p>
            </div>
            <button type="button" class="btn btn-outline-danger mx-5 my-2">Login</button>
        </div>
    </div>

    <ModalComp>
        <template v-slot:header>
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </template>
        <template v-slot:body>
            <p>Modal body text goes here.</p>
        </template>
        <template v-slot:footer>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
        </template>
    </ModalComp>
</template>
<script lang="ts">
import ModalComp from '@/components/ModalComp.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LoginView',
    components: { ModalComp }
})
</script>
<style>
body {
    background-image: url('../assets/gato-cat-coins.png');
    background-repeat: no-repeat;
    background-color: #282b30;
}
</style>

<style scoped>
.w-30 {
    width: 30%;
}

p {
    margin-bottom: 0px;
}
</style>