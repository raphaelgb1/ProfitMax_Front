export interface ICard {
    id?:number,
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

export class Card implements ICard {
    id?: number;
    value: string;
    Date: string;
    transactionDescricao: string;
    transactionName: string;
    Type: CardType;
    statusId: number;//outro enum
    constructor(Date: string,transactionName: string,transactionDescricao: string,Type: CardType,value: string, statusId: number,id?: number) {
        this.id = id;
        this.Date = Date;
        this.transactionName = transactionName;
        this.transactionDescricao = transactionDescricao;
        this.Type = Type;
        this.value = value;
        this.statusId = statusId;
    }

    
    public hour (): string {
        const date = new Date(this.Date);
        return date.toLocaleTimeString();
    }
    public date():string {
        const date = new Date(this.Date);
        return date.toLocaleDateString();
    }
    public FullDate(): string{
        const date = new Date(this.Date);
        return date.toLocaleString().split(', ').join(' ')
    }
}
export class Transaction {
    userId?:number;
    value?:number;
    name?: string;
    desc?: string;
    type?: CardType;
    paymentDate?: Date;
    paymentAccount?: string;
    paymentType: CardType = CardType.Receita;
    categoryId?: number;
    statusId?: number;
}
export class Cards extends Transaction {
    createDate: Date = new Date();
    constructor(){
        super();
    }
    public hour (): string {
        const date = new Date(this.createDate);
        return date.toLocaleTimeString();
    }
    public date():string {
        const date = new Date(this.createDate);
        return date.toLocaleDateString();
    }
    public FullDate(): string{
        const date = new Date(this.createDate);
        return date.toLocaleString().split(', ').join(' ')
    }
}