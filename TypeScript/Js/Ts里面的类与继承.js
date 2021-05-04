"use strict";
//ts使用es6定义类的方法
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    // class Person{
    //   name:string;///属性，前面忽略关键字
    //   constructor(n:string){
    //     this.name=n;
    //   }
    //   run():void{
    //     console.log(this.name+"在运动");
    //   }
    //   getName():string{
    //     return this.name;
    //   }
    //   setName(name:string):void{
    //     this.name=name;
    //   }
    // }
    // const v=new Person("张三")
    // v.run();
    // console.log(v.getName());
    // v.setName("小明");
    // console.log(v.getName());
    // v.run()
    //ts中实现继承  探讨，父类与子类一样的方法
    // class Person{
    //   name:string;
    //   constructor(name:string){
    //     this.name=name;
    //   }
    //   run():string{
    //     return `${this.name}在运动`;
    //   }
    // }
    // const v=new Person("王五");
    // console.log(v.run());
    // class Web extends Person{
    //   constructor(name:string){
    //     super(name);//初始化父类的构造函数
    //   }
    //   work():string{
    //     return `${this.name}在工作`
    //   }
    //   run():string{
    //     return `${this.name}--子类在运动`
    //   }
    // }
    // const w=new Web("小红")
    // console.log(w.run());
    // console.log(w.work());
    ///ts类里面的修饰符，ts里面定义属性的时候给我们提供了三种修饰符
    /**
     *public:公有，在类的里面，子类，类外都可以访问
     * protected:保护类型，在类的里面，子类里面都可以访问，在类外无法访问
     * private：私有，在类里面可以访问，子类和类外都无法访问
     */
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        Person.prototype.run = function () {
            return this.name + "\u5728\u8FD0\u52A8-\u7236\u7C7B";
        };
        return Person;
    }());
    //protected类外无法访问
    // const v1=new Person("王五");
    //  console.log(v1.run());
    //private在当前类可以访问
    //const v1=new Person("王五");
    //  console.log(v1.run());
    var Web = /** @class */ (function (_super) {
        __extends(Web, _super);
        function Web(name) {
            return _super.call(this, name) || this;
        }
        Web.prototype.work = function () {
            return this.name + "\u5728\u5DE5\u4F5C";
        };
        return Web;
    }(Person));
    var v = new Web("王五");
    console.log(v.run());
})();
