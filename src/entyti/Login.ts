export interface Login {
    email: string,
    senha: string,
}

export interface ICadastro {
    nome: string
    senha: string
    email: string
    confirmacaoSenha: string
}
export class Cadastro implements ICadastro {
    public nome: string;
    public senha: string;
    public email: string;
    public confirmacaoSenha: string;
    constructor() {
        this.nome = ""
        this.senha = ""
        this.email = ""
        this.confirmacaoSenha = ""
    }
}

export interface IModalEsqueceuSenha {
    prev: number, 
    email: string, 
    codigo: string, 
    senha: string, 
    confirmacaoSenha: string
}
export class EsqueceuSenha implements IModalEsqueceuSenha{
    prev: number;
    email: string;
    codigo: string;
    senha: string;
    confirmacaoSenha: string;
    constructor(){
        this.prev = 1
        this.email = ""
        this.codigo = ""
        this.senha = ""
        this.confirmacaoSenha = ""
    }
    public setPrev(dado: number) {
        this.prev = dado;
    }
}