export interface ICard {
    id?: number,
    Date: string,
    transactionName: string,
    transactionDescricao: string,
    Type: CardType,
    value: string,
    hour: () => string,
    date: () => string,
    FullDate: () => string,
}

export enum CardType {
    Despesa = 'Despesa',
    Receita = 'Receita'
}

export enum paymentType {
    Credito_em_conta = 1,
    Boleto = 2,
    Debito_Automatico = 3,
    Conta_Corrente = 4,
    Dinheiro = 5,
    Contra_cheque = 6,
    Cartao_de_Credito = 7,
    Cartao_de_Debito = 8,
    PIX = 9
}
export enum statusId {
    PAGO = 1,
    PEDENTE = 2,
    CANCELADO = 3,
    AGENDADO = 4
}
export enum categoryId {
    LAZER = 1,
    RECORENTE = 2,
    BENS_MATERIAS = 3,
    EXTRAS = 4,
}

export class Card implements ICard {
    id?: number;
    value: string;
    Date: string;
    transactionDescricao: string;
    transactionName: string;
    Type: CardType;
    statusId: number;//outro enum
    constructor(Date: string, transactionName: string, transactionDescricao: string, Type: CardType, value: string, statusId: number, id?: number) {
        this.id = id;
        this.Date = Date;
        this.transactionName = transactionName;
        this.transactionDescricao = transactionDescricao;
        this.Type = Type;
        this.value = value;
        this.statusId = statusId;
    }


    public hour(): string {
        const date = new Date(this.Date);
        return date.toLocaleTimeString();
    }
    public date(): string {
        const date = new Date(this.Date);
        return date.toLocaleDateString();
    }
    public FullDate(): string {
        const date = new Date(this.Date);
        return date.toLocaleString().split(', ').join(' ')
    }
}
export interface Transaction {
    userId?: number;
    value?: number;
    name?: string;
    desc?: string;
    type?: CardType;
    paymentDate?: string;
    paymentAccount?: string;
    paymentType: paymentType;
    categoryId?: categoryId;
    statusId?: statusId;
}
export class Cards implements Transaction {
    userId?: number = 0;
    name?: string = "";
    desc?: string = "";
    value?: number = 0;
    type?: CardType = CardType.Receita;
    categoryId?: categoryId = categoryId.LAZER;
    paymentType: paymentType = paymentType.PIX;
    createDate: string| Date = "";
    paymentDate?: string = "";
    paymentAccount?: string = "";
    statusId?: statusId = statusId.PAGO;
    transactionID?:number =0;
    // constructor(){}
    public hour(): string {
        const date = new Date(this.createDate);
        return date.toLocaleTimeString();
    }
    public date(): string {
        const date = new Date(this.createDate);
        return date.toLocaleDateString();
    }
    public FullDate(): string {
        const date = new Date(this.createDate);
        return date.toLocaleString().split(', ').join(' ')
    }
}

export interface CradGil {
    CATEGORIA_ID : number,
DESCRICAO : string,
DTCRIACAO : string,
DTEDICAO : string | null,
DTPAGAMENTO : string | null,
IDTRANSACTIONS : number
IDUSUARIO : number
NOME : string 
PAYMENT_ACCOUNT : string
PAYMENT_TYPE_ID : number,
STATUS_ID: number
TIPO:number
VALOR:number
}