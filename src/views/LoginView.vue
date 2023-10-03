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
                <p class="text-white">Esqueceu sua senha? <a role="button"
                        class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-danger"
                        @click="() => EsqueceuSenha = !EsqueceuSenha">Clique aqui</a></p>
                <p class="text-white">Novo por Aqui? <a role="button"
                        class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-danger"
                        @click="() => Cadastrar = !Cadastrar">Clique aqui</a></p>
            </div>
            <button type="button" class="btn btn-outline-danger mx-5 my-2">Login</button>
        </div>
    </div>
    <ModalComp :ModalOpen="EsqueceuSenha">
        <template v-slot:header>
            <h5 class="modal-title">Esqueceu Senha</h5>
        </template>
        <template v-slot:body>
            <p>Modal body text goes here.</p>
        </template>
        <template v-slot:footer>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-danger">Save</button>
        </template>
    </ModalComp>
    <ModalComp :ModalOpen="Cadastrar">
        <template v-slot:header>
            <h5 class="modal-title">Novo Cliente</h5>
        </template>
        <template v-slot:body>
            <form class="d-flex flex-column gap-3">
                <div class="form-floating">
                    <input type="text" class="form-control" id="InputName" placeholder="Name">
                    <label for="InputName">Nome completo</label>
                </div>
                <div class="form-floating">
                    <input type="email" class="form-control" id="InputEmail1" placeholder="Email">
                    <label for="InputEmail1">Email</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">Senha</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">Confirmar senha</label>
                </div>
                <button type="button" class="btn btn-dark py-3"><i class="bi bi-person-plus"></i> Cadastrar</button>
            </form>
        </template>
    </ModalComp>
</template>
<script lang="ts">
import ModalComp from '@/components/ModalComp.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LoginView',
    components: { ModalComp },
    data() {
        return {
            Cadastrar: false,
            EsqueceuSenha: false
        }
    },
    methods: {

    }
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