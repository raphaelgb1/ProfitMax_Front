// export interface Base {

// }

export type AppButton = {
    name: string
    callback: () => void
}

export interface ButtonCallback {
    (): void;
}

export class Transaction {
    public descricao: string
    public total: number
    public tipo: string
    public categoria: string
    constructor(){
        this.descricao = ""
        this.total = 1
        this.tipo = ""
        this.categoria = ""
    }
}