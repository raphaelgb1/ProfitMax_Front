export class CreateTransactionDto {
    userId:number;
    value:number;
    name: string;
    desc?: string;
    type: string;
    constructor(userId:number,value:number,name: string,type: string,desc?: string){
        this.userId = userId;
        this.value = value;
        this.name = name;
        this.type = type;
        if(desc)
            this.desc = desc;
        }
}
