
var flag = true


function sum(sum1, sum2) {
  return sum1 + sum2
}

export {

  flag,
  sum
}

export function keepdata() {
  return console.log('keepdata success');
}

export class stu{

  setname(name){
    this.name=name
  }
 getname(){
   return name
 }
  
}


const test={
  age:18,
  name:'test'
}
test.age=20 
console.log(test);

//只能起一个default，在导入者可以随便命名
export default test


//统一导出、导入

//export{flag,sum,keepdata,stu,test}

//import * as ss from "./aaa.js"