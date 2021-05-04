"use strict";
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
    // let str:string="dsd dwefd wqwr";
    // str=str.replace(/\s*/g,"")
    // console.log(str);
    //类绑定的叫静态方法
    //类内部的是实例方法
    // class Person{
    //   public name:string;
    //   static  age:number=20;
    //   constructor(name:string){
    //     this.name=name
    //   }
    //   //实例方法
    //   run():string{
    //     return `${this.name}在运动`
    //   }
    //   work():string{
    //     return `${this.name}在工作`
    //   }
    //   //静态方法 没法直接调用类里面的属性
    //   static print():string{
    //     return `${this.age}写作业`
    //   }
    // }
    // const v = new Person("小明")
    // console.log(Person.print());
    //多态，父类定义一个方法不去实现，让继承它的子类实现，每一个子类都不同的表现
    // class Animal{
    //   public name:string;
    //   constructor(name:string){
    //     this.name=name
    //   }
    //   eat(){
    //     console.log("吃的方法");
    //   }
    // }
    // class Dog extends Animal{
    //   constructor(name:string){
    //     super(name)
    //   }
    //   eat(){
    //     console.log(this.name+"吃🥩");
    //   }
    // }
    // class Cat extends Animal{
    //   constructor(name:string){
    //     super(name)
    //   }
    //   eat(){
    //     console.log(this.name+"吃🐟");
    //   }
    // }
    //用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生(继承的子类)的类中实现
    //abstract抽象方法只能放在抽象类里面
    //抽象类和抽象方法用来定义标准的Animal这个类要求它的子类必须包含eat
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        //必须实现抽象类里面的抽象方法
        function Dog(name) {
            return _super.call(this, name) || this;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + "吃🥩");
        };
        return Dog;
    }(Animal));
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat(name) {
            return _super.call(this, name) || this;
        }
        Cat.prototype.eat = function () {
            console.log(this.name + "吃🐟");
        };
        return Cat;
    }(Animal));
    var dog = new Dog("小狗");
    dog.eat();
})();
