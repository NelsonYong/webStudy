
(function(){
class User{
  username:string|undefined;
  password:string|undefined
  
}

// class MysqlDb{
//   add(user:User):boolean{
//     return true
//   }
// }

// const u=new User()
// u.username="张三"
// u.password="151"
// const db=new MysqlDb()
// console.log(db.add(u));


class Article{
  title:string|undefined;
  desc:string|undefined;
  status:number|undefined
  
}

// class MysqlDb{
//   add(user:Article):boolean{
//     console.log(user);
//     return true
//   }
// }

// const a=new Article()
// a.title="哈哈哈"
// a.desc="嘻嘻嘻"
// a.status=200
// const db=new MysqlDb()
// console.log(db.add(a));


//用泛型解决重复的代码
class MysqlDb<T>{
  add(user:T):boolean{
    console.log(user);
    return true
  }
  updata(user:T,id:number):boolean{
    console.log(user);
    console.log(id);
    return true
  }
}

// const a=new Article()
// a.title="哈哈哈"
// a.desc="嘻嘻嘻"
// a.status=200
// const db=new MysqlDb<Article>()
// console.log(db.add(a));


// const u=new User()
// u.username="张三"
// u.password="151"
// const db1=new MysqlDb<User>()
// console.log(db1.add(u));


//定义一个ArticleCate类和数据库进行映射
class ArticleCate{

  title:string|undefined;
  desc:string|undefined;
  status:number|undefined;
  constructor(params:{
    title:string|undefined;
    desc:string|undefined;
    status?:number|undefined;
  }){
    this.title=params.title
    this.desc=params.desc
    this.status=params.status
  }

}
const a=new ArticleCate({
title:'撒大苏打',
desc:'dasdsaihud'
})
const db=new MysqlDb<ArticleCate>()
console.log(db.add(a));
console.log(db.updata(a,123));


})()