/**
软件工程中，我们不仅要创建一致的定义良好的 API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，
同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。
在像 C# 和 Java 这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。
设计泛型的关键目的是在成员之间提供有意义的约束，这些成员可以是：类的实例成员、类的方法、函数参数和函数返回值。
 */

//泛型解决类 接口 方法的复用性以及不特定的数据类型的支持


//只能返回string类型
// function getData(value: string): string {
//   return value
// }

//同时返回string类型 和 number 类型
//返回任意类型，相当于放弃了类型检查，但是我们希望传入什么，就返回什么
// function getData(value: any): any {
//   return value
// }

(function(){

//泛型，传入什么就返回什么

// function getData < T > (value: T): T {
//   return value
// }
//这个就可以返回任意参数
// function getData<T>(value:T):any{
//   return value
// }
//定义了泛型可以在调用函数的时候定义传入的类型
// getData < number > (111)
// getData < string > ('hhhh')





//泛型类：比如有个最小堆算法，需要同时支持返回数字和字符串 a-z 两种类型，通过类的泛型来实现

// class MinClass<T>{
//   public list:T[] = [];

//   add(value:T):void {
//    this.list.push(value)
//   }
//   min():T {
//     let min = this.list[0]
//     for (let index = 0; index < this.list.length; index++) {
//       if (min > this.list[index]) {
//         min = this.list[index]
//       }
//     }
//     return min
//   }

// }
// const Min=new MinClass<string>()
// // Min.add(1)
// // Min.add(2)
// // Min.add(3)
// Min.add('a')
// Min.add('b')
// console.log(Min.min());





//函数接口
// interface Config{
//   (value1:string,value2:string):string
// }

// const setData:Config=function(val:string,val2:string):string{
//   return val+val2
// }

//泛型接口

interface Config<T>{

  (value:T):T

}

const getData=function<T>(val:T):T{
  return val
}

// console.log(
//   getData<string>("555"));

const myData:Config<string>=getData
//console.log(myData(6666));//错误
console.log(myData('6666'));


})()
