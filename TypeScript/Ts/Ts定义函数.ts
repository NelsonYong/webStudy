//函数的定义

//es5定义函数的方法
// let a=function(){

// }
// function b(){

// }

//ts中函数声明
(function(){
const t = function (): Number {
  return 123
}

function tt(): Number {
  return 123
}

//ts方法传参

function fun(num: Number, str: String): String {
  return `${str}现在${num}岁`
}
console.log(fun(12, "小明"));


//无返回值
function hg(): void {

}




//方法可选参数
//es5中方法的形参和实参可以不一样，在ts中不行，想要的话必须要配置，可选参数必须要配置到最后面
function fun1(str: String, num ? : Number): String {
  if (num) {
    return `${str}现在${num}岁`
  } else {
    return `${str}年龄保密`
  }
}
console.log(fun1("小明"));


//默认参数
//es5没有默认参数
//es6与ts都有默认参数
function fun2(str: String, num:Number=20): String {
    return `${str}现在${num}岁`

}
console.log(fun2("小明"));
console.log(fun2("小明",25));



//剩余参数
function sum(a:number,b:number,c:number,d:number):Number{
   return a+b+c+d
}

//三点运算符

function Sum(...res:number[]):Number{
  let sum:number=0
  res.forEach(el => {
    sum=sum+el
  });
  return sum
}

console.log(Sum(1,2,3));




//函数的重载
//两个或两个以上同名的函数，但它们的参数不一样，这时候会出现函数重载的情况
//ts为了兼容es5,es6,和Java有点不同


//es5中后加载的同名函数替换前面同名的函数


//ts中的函数重载
function getVal(num:number):number
function getVal(str:string):string
function getVal(any:any):any{
  if (typeof any==='string') {
    console.log(any);
    
  }
  if (typeof any==='number') {
    console.log(any);
    
  }
}

getVal("dfdsf")


//重载也可以使用可用参数进行判断



//箭头函数


const j=():number=>{
  return 123
}

console.log(j());

})()