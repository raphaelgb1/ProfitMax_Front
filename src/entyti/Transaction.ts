export class CreateTransactionDto {
    idUsuario: number;
    valor: number;
    nome: string;
    descricao?: string;
    dtPagamento?: Date;
    paymentTypeId: number;
    categoriaId: number;
    statusId: number;
    paymentAccount?: string;

    constructor(idUsuario: number, valor: number, nome: string, paymentTypeId: number, categoriaId: number, statusId: number,  tipo: number,paymentAccount?: string, descricao?: string, dtPagamento?: Date,) {
        this.idUsuario = idUsuario;
        this.valor = valor;
        this.nome = nome;
        this.descricao = descricao;
        this.dtPagamento = dtPagamento;
        this.paymentTypeId = paymentTypeId;
        this.categoriaId = categoriaId;
        this.statusId = statusId;
        this.paymentAccount = paymentAccount;
        this.tipo = tipo;
    }

    tipo: number;


}
