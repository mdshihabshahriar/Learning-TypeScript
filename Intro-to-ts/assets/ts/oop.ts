// class Account{
//     readonly id: number;
//     public name: string;
//     protected balance: number;

//     constructor(id: number, name: string, balance: number){
//         this.id = id;
//         this.name = name;
//         this.balance = balance;
//     }
// }

class Account{
    constructor(
        readonly id: number,
        public name: string,
        protected balance: number
    ){}
}