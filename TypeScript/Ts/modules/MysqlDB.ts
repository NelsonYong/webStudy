import {
  DBI
} from './db'

class MysqlDB < T > implements DBI < T > {
  protected list: Array < any > ;
  constructor(list: [] = []) {
    console.log("数据库连接成功");
    this.list = list;
  }
  add(info: T): boolean {
    console.log(info);
    this.list.push(info)
    return true
  }
  updata(info: T, iid: number): boolean {
    this.list.forEach(el => {
      if (iid === el.id) {
        const {id,name,age}= JSON.parse(JSON.stringify(info));
        el.id=id
        el.name=name
        el.age=age
        console.log("修改成功");
      }
    });
    return true
  }
  delete(id: number): boolean {
    for (let index = 0; index < this.list.length; index++) {
      if (id == this.list[index].id) {
        this.list.splice(index, 1)
        console.log("删除成功");
        return true
      }
    }
    return true
  }
  getData(): any[] {
    return this.list
  }

}

export {
  MysqlDB
}