export interface ICard {
    id:number,
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
    id: number;
    Date: string;
    transactionDescricao: string;
    transactionName: string;
    Type: CardType;
    value: string;
    constructor(id: number, Date: string,transactionName: string,transactionDescricao: string,Type: CardType,value: string) {
        this.id = id;
        this.Date = Date;
        this.transactionName = transactionName;
        this.transactionDescricao = transactionDescricao;
        this.Type = Type;
        this.value = value;
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