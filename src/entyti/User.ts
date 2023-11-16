export class User {

    readonly email: string
    readonly Token: string

    constructor (email: string, Token: string) {
        this.email = email;
        this.Token = Token;
    }
}