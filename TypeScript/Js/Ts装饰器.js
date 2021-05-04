"use strict";
/**
 *
 * 装饰器是一种特殊类型的声明，本质上就是一个方法，可以注入到类、方法、属性、参数上，扩展其功能；
常见的装饰器：类装饰器、属性装饰器、方法装饰器、参数装饰器...
装饰器在写法上有：普通装饰器(无法传参)、装饰器工厂(可传参)
装饰器已是ES7的标准特性之一，是过去几年JS最大的成就之一！
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
///类装饰器---普通装饰器
//  function logClass(params:any){
//    console.log(params);
//    //就是当前类
//    params.prototype.apiUrl="动态拓展的属性"；
//    params.prototype.run=function(){
//      console.log("运动");
//    }
//  }
///类装饰器---装饰器工厂--可传参
//  function logClass(params:any){
//   return function(target:any){
//     console.log(params);
//     console.log(target);
//     target.prototype.name="xxhh"
//   }
// }
//  @logClass("hello")
//  class HttpClient{
//    constructor(){
//    }
//    getData(){
//    }
//  }
//  const http:any=new HttpClient()
//  console.log(http.name);
//  function logClass(target:any){
//   return class extends target{
//     apiUrl="我是修改后的数据";
//     getData(){
//       this.apiUrl=this.apiUrl+'----'
//       console.log(this.apiUrl);
//     }
//   }
// }
// @logClass
// //重载类的构造方法
//  class HttpClient{
//    public apiUrl:string|undefined;
//    constructor(){
//     this.apiUrl="我是构造函数里面的apiUrl"
//    }
//    getData(){
//    console.log(this.apiUrl);
//    }
//  }
// const http:any=new HttpClient()
// console.log(http.apiUrl);
// console.log(http.getData());
//2.属性装饰器
//类装饰器
//  function logClass(params:any){
//   return function(target:any){
//     console.log(params);
//     console.log(target);
//     target.prototype.name="xxhh"
//   }
// }
//属性装饰器
// function logProperty(params:any){
//   return function(target:any,attr:any){
//     console.log(target);
//     target[attr]=params
//     console.log(attr);
//   }
// }
// //@logClass('xxx')
// class HttpClient {
//   @logProperty("www.baidu.com")
//   public url: string | undefined;
//   constructor() {
//   }
//   getData() {
//     console.log(this.url);
//   }
// }
// const http:any=new HttpClient()
// console.log(http.getData());
//3.方法装饰器
// function logMethod(params:any){
//   return function(target:any,methodName:any,desc:any){
//     console.log(target);
//     console.log(methodName);
//     console.log(desc);
//     //修改装饰器方法，把装饰器方法里面传入的所有参数改为string类型
//     //1.保存当前的方法
//     const omethod=desc.value
//     desc.value=function(...res:any[]){
//       res=res.map((v)=>{
//         return String(v)
//       })
//       //对象冒充
//       omethod.apply(this,res)
//     }
//   }
// }
// class HttpClient {
//   public url: string | undefined;
//   constructor() {
//   }
//   @logMethod('www.http')
//   getData(...args:any[]) {
//     console.log(args);  
//     console.log("hhhhh");
//   }
// }
// const http:any=new HttpClient()
// http.getData('123',456)
//4.方法参数装饰器
function logParams(params) {
    return function (target, MethodName, paramsIndex) {
        console.log(target);
        console.log(MethodName);
        console.log(paramsIndex);
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function (uuid) {
        console.log(uuid);
    };
    __decorate([
        __param(0, logParams('uuid'))
    ], HttpClient.prototype, "getData", null);
    return HttpClient;
}());
