//es5里面的类

//最简单的类
// function Person(){
//   this.name="张三",
//   this.age=18
// }
//构造函数与原型链上增加方法
// function Person(){
//   this.name="张三",
//   this.age=18，

//   this.run=function(){
//     console.log("run");
    
//   }
// }
// function Person(){
//   this.name="张三",
//   this.age=18
// }
// Person.prototype.sex="男"
// Person.prototype.run=function(){
//   console.log("run");
  
// }


//类里面的静态方法，只能父类调用，不能实例对象调用

// Person.getInfo=function(){
//   console.log("我是个人信息");
  
// }


//es5里面的继承  原型链+对象冒充的组合继承模式
// function Person(){
//   this.name="张三",
//   this.age=18,
//   this.run1=function(){
//     console.log("reun1");
    
//   }
// }
// Person.prototype.sex="男"
// Person.prototype.run=function(){
//   console.log("run");
  
// }
// Person.getInfo=function(){
//   console.log("我是个人信息");
  
// }

// function Web(){
//   Person.call(this)//对象冒充继承
// }

// var w=new Web()
// w.run1()//对象冒充可以继承类里面的属性和方法，但不能继承原型链中的属性与方法



// //原型链继承既可以继承父类的方法和属性，也能继承父类原型链上的方法和属性
// Web.prototype=new Person()
// var ww=new Web()
// ww.run()
// ww.run1()


//原型链实现继承的问题？
function Person(name){
  this.name=name,
  this.age=18,
  this.run1=function(){
    console.log("reun1"+this.name);
    
  }
}
Person.prototype.sex="男"
Person.prototype.run=function(){
  console.log("run");
  
}
Person.getInfo=function(){
  console.log("我是个人信息");
}

// function web(name){}
// web.prototype=new Person()
// const w=new web("xiaoming")
// w.run()//原型链无法给构造函数传参


//原型链+对象冒充 
function web(name){
  Person.call(this,name)
}

web.prototype=Person.prototype
const w=new web("xiaoming")
w.run1()
