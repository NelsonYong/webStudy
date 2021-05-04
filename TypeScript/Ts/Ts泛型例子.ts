/**
 * 功能:定义一个操作数据库的库，支持MySQL mssql,mongoDb
 * 要求1：功能一样，add get delete get方法
 * 约束统一规范，以及代码重用
 */

 (function(){
interface DBI < T > {
  add(info: T): boolean;
  updata(info: T, id: number): boolean;
  delete(id: number): boolean;
  get(): any[]
}

//定义一个操作MySQL的类

class mysql < T > implements DBI < T > {
  constructor(){
     console.log("连接数据库");
     
  }  
  add(info: T): boolean {
    console.log(info);
    return true

  }
  updata(info: T, id: number): boolean {
    console.log(info);
    console.log(id);
    return true
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(): any[] {
    return [{name:'aaa',password:'dsadad'},{name:'aaa',password:'dsadad'},{name:'aaa',password:'dsadad'}]
  }

}

class mssql < T > implements DBI < T > {
  add(info: T): boolean {
    console.log(info);
    return true
  }
  updata(info: T, id: number): boolean {
    console.log(info);
    console.log(id);
    return true
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(): any[] {
    throw new Error("Method not implemented.");
  }

}

class mongoDb < T > implements DBI < T > {
  add(info: T): boolean {
    console.log(info);
    return true
  }
  updata(info: T, id: number): boolean {
    console.log(info);
    console.log(id);
    return true
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(): any[] {
    throw new Error("Method not implemented.");
  }

}


//定义一个User类与数据库做映射
class User {
  username: string | undefined;
  password: string | undefined;

}

const u = new User()
u.username = "张三"
u.password = "1231sd"

const mysqldb = new mysql < User > ()
mysqldb.add(u)
mysqldb.updata(u, 123)

console.log(mysqldb.get());


})()