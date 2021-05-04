(function(){
//数字类型,只可赋值数字
let num: Number = 1
num = 2
num = 2.1
console.log(num);

//字符串类型，只可赋值字符串类型
let str: String = "hello ts"

//布尔类型
let flag: Boolean = false
flag = true

//数组类型
let arr: Number[] = [1, 2, 3]
let arr1: String[] = ["sss", "ko"]
//全部任意类型
let arr2: any[] = [1, 23, "dsd"]

//数组的第二种方法
let Arr: Array < String >= ["b", "54"]


//元组类型---可以指定数组里面每个元素的类型
let arrv: [Number, String, Boolean] = [1, "2", false]


//枚举类型
enum Flag {
  success = 1, fail = -1
}
console.log(Flag.success); //1


//null和undefined类型

let nu:null|undefined|number;
nu=2
console.log(nu);


//es5的定义方法
// function test(){
//   console.log("red");
  
// }

//无返回值的void类型
function test():void{
  console.log("red");
  
}


//返回值为数字类型
function test1():Number{
 return 666
}



//never类型，其他类型，包括null，underfined,不包含前面的数据类型

const error=(()=>{
  console.log("error");
})()


})()
