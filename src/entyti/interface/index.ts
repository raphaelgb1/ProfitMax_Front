export interface Base {

}

export type AppButton = {
    name: string
    callback: () => void
}

export interface ButtonCallback {
    (): void;
}

export interface Transaction {
    descricao: string
    total: number
    tipo: string
    categoria: string
}