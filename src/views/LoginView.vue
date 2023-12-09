<template>
    <div class="w-100 d-flex justify-content-end p-5 vh-100">
        <div class="p-5 w-30 h-50 d-flex flex-column justify-content-center gap-3">
            <h2 class="text-white" style="text-align: center;">Profit<b class="text-danger">Max</b></h2>
            <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                    v-model="login.email">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                    v-model="login.senha">
                <label for="floatingPassword">Password</label>
            </div>
            <div class="d-flex flex-column gap-3">
                <p class="text-white">Esqueceu sua senha? <a role="button"
                        class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-danger"
                        @click="ModalEsqueceuSenha.Modal.show">Clique aqui</a></p>
                <p class="text-white">Novo por Aqui? <a role="button"
                        class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-danger"
                        @click="ModalCadastrar.Modal.show">Clique aqui</a></p>
            </div>
            <button type="button" class="btn btn-outline-danger mx-5 my-2" @click="Logar">Login</button>
        </div>
    </div>
    <ModalComp :Modal="ModalEsqueceuSenha">
        <template v-slot:header>
            <h5 class="modal-title">Esqueceu Senha</h5>
        </template>
        <template v-slot:body>
            <div class="d-flex flex-column gap-3">
                <div v-if="ModalEsqueceuSenha.props.prev == 1">
                    <div class="form-floating">
                        <input type="email" class="form-control" id="InputEmail" v-model="ModalEsqueceuSenha.props.email"
                            placeholder="Email">
                        <label for="InputEmail">Email</label>
                    </div>
                </div>
                <div v-else-if="ModalEsqueceuSenha.props.prev == 2">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="InputCodigo" v-model="ModalEsqueceuSenha.props.codigo"
                            placeholder="Codigo e-mail">
                        <label for="InputCodigo">Codigo e-mail</label>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3" v-else-if="ModalEsqueceuSenha.props.prev == 3">
                    <div class="form-floating">
                        <input type="password" class="form-control" id="Password" v-model="ModalEsqueceuSenha.props.senha"
                            placeholder="Password">
                        <label for="Password">Senha</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="PasswordConf"
                            v-model="ModalEsqueceuSenha.props.confirmacaoSenha" placeholder="Password">
                        <label for="PasswordConf">Confirmar senha</label>
                    </div>
                </div>
                <div class="d-flex flex-column gap-3">
                    <button type="button" class="btn btn-dark py-3" @click="ResetarSenha"><i
                            class="bi bi-send"></i>Enviar</button>
                    <button type="button" class="btn btn-danger py-3" @click="VoltarResetarSenha"
                        v-if="ModalEsqueceuSenha.props.prev != 1"><i class="bi bi-person-plus"></i>Voltar</button>
                </div>
            </div>
        </template>
        <template v-slot:footer>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <!-- <button type="button" class="btn btn-danger">Save</button> -->
        </template>
    </ModalComp>
    <ModalComp :Modal="ModalCadastrar">
        <template v-slot:header>
            <h5 class="modal-title">Novo Cliente</h5>
        </template>
        <template v-slot:body>
            <form class="d-flex flex-column gap-3">
                <div class="form-floating">
                    <input type="text" class="form-control" id="InputName" v-model="ModalCadastrar.props.nome"
                        placeholder="Name">
                    <label for="InputName">Nome completo</label>
                </div>
                <div class="form-floating">
                    <input type="email" class="form-control" id="InputEmail1" v-model="ModalCadastrar.props.email"
                        placeholder="Email">
                    <label for="InputEmail1">Email</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="Password" v-model="ModalCadastrar.props.senha"
                        placeholder="Password">
                    <label for="Password">Senha</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="PasswordConf"
                        v-model="ModalCadastrar.props.confirmacaoSenha" placeholder="Password">
                    <label for="PasswordConf">Confirmar senha</label>
                </div>
                <button type="button" class="btn btn-dark py-3" @click="CadastrarUser"><i class="bi bi-person-plus"></i>
                    Cadastrar</button>
            </form>
        </template>
    </ModalComp>
</template>
<script lang="ts">
import ModalComp from '@/components/ModalComp.vue';
import load from '@/entyti/Loading';
import { Cadastro, EsqueceuSenha, Login } from '@/entyti/Login';
import { ModalVue } from '@/entyti/Modal';
import { Store } from '@/stores/Login';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LoginView',
    components: { ModalComp },
    data() {
        const ModalCadastrar = new ModalVue<Cadastro>(new Cadastro());
        const ModalEsqueceuSenha = new ModalVue<EsqueceuSenha>(new EsqueceuSenha());
        const login: Login = { email: '', senha: '' };

        return {
            ModalCadastrar,
            ModalEsqueceuSenha,
            User: {} as Cadastro,
            login,
            store: Store()
        }
    },
    methods: {
        CadastrarUser() {
            load.show()
            if (this.ModalCadastrar.props)
                this.store.CadastrarUser(this.ModalCadastrar.props);
            load.hide()
        },
        ResetarSenha() {
            load.show()
            switch (this.ModalEsqueceuSenha.props.prev) {
                case 1:
                    this.store.ConfirmaEmail(this.ModalEsqueceuSenha.props.email);
                    this.ModalEsqueceuSenha.props.setPrev(2);
                    break;
                case 2:
                    // const user = Cadastro()
                    // this.store.ConfirmaCodigoEmail();
                    this.ModalEsqueceuSenha.props.setPrev(3);
                    break;
                case 3:

                    break;
            }
            load.hide()
        },
        VoltarResetarSenha() {
            load.show()
            switch (this.ModalEsqueceuSenha.props.prev) {
                case 1:
                    break;
                case 2:
                    this.ModalEsqueceuSenha.props.setPrev(1);
                    break;
                case 3:
                    this.ModalEsqueceuSenha.props.setPrev(2);
                    break;
            }
            load.hide()
        },
        async Logar() {
            load.show()
            if (this.login.email && this.login.senha) {
                const res = await this.store.Logar(this.login)
                if (res)
                    this.$router.push('Receitas');
            }
            load.hide()
        }
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
}</style>
