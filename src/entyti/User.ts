export class User {

    readonly email: string
    readonly Token: string
    readonly id: string

    constructor (email: string, Token: string, id: string) {
        this.email = email;
        this.Token = Token;
        this.id = id;
    }
}