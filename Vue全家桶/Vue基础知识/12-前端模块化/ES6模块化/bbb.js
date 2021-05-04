// import { flag,stu } from "./aaa.js";
import * as ss from "./aaa.js";
let name = '小红'
let stu1 =new ss.stu()

stu1.setname('小红')
console.log(stu1.name);

if (ss.flag) {
  console.log('小红');
}