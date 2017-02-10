export class User {
    userId:string;
    password:string;
    email:string;
    des:string;

     constructor(user?:{userId:string, password:string, email:string, des:string}) {
        this.userId = user.userId;
        this.password = user.password;
        this.email = user.email;
        this.des = user.des;
     }
}