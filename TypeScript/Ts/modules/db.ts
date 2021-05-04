interface DBI<T>{
  add(info:T):boolean;
  updata(info:T,id:number):boolean;
  delete(id:number):boolean;
  getData():{name:string,age?:number}[];
}

export {DBI}