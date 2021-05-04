(function () {
  //1.属性接口
  //2.函数接口
  //3.可索引接口
  //4.类类型接口
  //5.接口拓展



  //1.属性接口   对js的约束


  //约束json
  // function test(labelinfo:{lable:string}):void{

  // }
  //test({lable:'666',name:'dsd'})

  //    interface FullName{
  //      firstName:string;
  //      secondName:string;
  //    }

  //    function print(name:FullName):void{
  //      console.log(name.firstName+name.secondName);

  //    }
  // //必须要包含firstName和secondName
  //    print({firstName:'yangjie',secondName:'man'})

  //2.接口，可选属性
  // interface FullName {
  //   firstName: string;
  //   secondName?: string;
  // }

  // function print(name: FullName): void {
  //   console.log(name.firstName + name.secondName);
  // }

  // print({firstName:'666'})


  interface Config {
    type: string,
      url: string,
      async :boolean
    data ? : string,
      dataType ? : string
  }
  function Ajax(config: Config) {
    let xhr = new XMLHttpRequest();

    xhr.open(config.type, config.url, config.async);

    xhr.send(config.data);

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log('success');
        if (config.dataType == 'json') {
         console.log( JSON.parse(xhr.responseText));
         
        } else {
          console.log(xhr.responseText);
        }

      }

    }
  }
  Ajax({
    type: 'get',
    async: true,
    url: 'http://49.234.86.61:8000/BlogDev/Data/SearchText.php',
    dataType: 'json'
  });


  //3.函数类型的接口，对方法传入的参数  以及返回值进行约束----批量约束

  //加密函数类型接口
  interface encrypt{
    (key:string,value:string):string
  }
  let md5:encrypt=function(key:string,value:string){

    //模拟操作
    return key+value

  }
 console.log( md5("张三",'hhhh'));


 //4.可索引接口，数组，对象的约束（不常用）
 
 //数组约束
 interface UserArr{
   [index:number]:string
 }

//let arr1:UserArr=['aaa','bbb']
let arr:Array<UserArr>=['aaa','bbb']
console.log(arr);


//对象约束
interface UserObj{
  [index:string]:string
}

let obj:UserObj={name:'aaa'}
console.log(obj);



//5.类类型的接口：对类的约束和抽象类有点相似

// interface Animal{
//   name:string;
//   eat(str:string):string;
// }

// class Dog implements Animal{
//   name:string;
//   constructor(name:string){
//     this.name=name
//   }

//   eat(str:string):string{
//     return `${this.name+str}吃肉`
//   }
// }

// class Cat implements Animal{
//   name:string;
//   constructor(name:string){
//     this.name=name
//   }

//   eat(str:string):string{
//     return `${this.name+str}吃🐟`
//   }
// }

// const dog = new Dog("小狗")
// console.log(dog.eat('笑嘻嘻'));

// const cat=new Cat('小猫')
// console.log(cat.eat('笑嘻嘻'));




//6.接口的拓展，接口可以继承接口

interface Animal{
  name:string
  eat():void
}

interface Person extends Animal{
  work():void
}

class Programmer{
  name:string
  constructor(name:string){
   this.name=name
  }

  coding(code:string):void{

    console.log(this.name+"在"+code);
    

  }
}

class Web extends Programmer implements Person{
  name:string;
  constructor(name:string){
    super(name)
    this.name=name
  }
  work(){
    console.log(this.name+"在工作");
    
  }
  eat(){
    console.log(this.name+"在吃饭");
    
  }
}


const  w = new Web("小明")
w.work()
w.eat()
w.coding("写代码")

})()