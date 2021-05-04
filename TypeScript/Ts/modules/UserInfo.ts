import {MysqlDB} from './MysqlDB'
interface user{
  id:number
  name:string,
  age?:number
}


class User implements user{
  id:number
  name:string;
  age?:number;
  constructor(id:number,name:string,age?:number){
    this.id=id
    this.name=name,
    this.age=age
  }
}
const UserModel=new MysqlDB<User>()
export{User,UserModel}