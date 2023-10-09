import { Base } from ".";
import { Cadastro as CadastroInterface } from "../interface/Login";
export class Cadastro extends Base implements CadastroInterface {
    readonly nome: string; 
    readonly senha: string;
    readonly email: string;
    readonly confirmacaoSenha: string;
    constructor(obj: CadastroInterface){
        super();
        this.nome = obj.nome;
        this.senha = obj.senha;
        this.email = obj.email;
        this.confirmacaoSenha = obj.confirmacaoSenha;
    }
}