
import {User,UserModel} from './modules/UserInfo'

let user=new User(1,'小明',18)
console.log(UserModel.add(user));
user=new User(2,'小红',18)
console.log(UserModel.add(user));
user=new User(3,'小黑',18)
console.log(UserModel.add(user));
console.log(UserModel.updata(user,2));
console.log(UserModel.getData());




