"use strict";
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
(function () {
    //泛型，传入什么就返回什么
    var getData = function (val) {
        return val;
    };
    // console.log(
    //   getData<string>("555"));
    var myData = getData;
    //console.log(myData(6666));//错误
    console.log(myData('6666'));
})();
