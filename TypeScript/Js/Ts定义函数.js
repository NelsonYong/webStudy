"use strict";
//函数的定义
//es5定义函数的方法
// let a=function(){
// }
// function b(){
// }
//ts中函数声明
(function () {
    var t = function () {
        return 123;
    };
    function tt() {
        return 123;
    }
    //ts方法传参
    function fun(num, str) {
        return str + "\u73B0\u5728" + num + "\u5C81";
    }
    console.log(fun(12, "小明"));
    //无返回值
    function hg() {
    }
    //方法可选参数
    //es5中方法的形参和实参可以不一样，在ts中不行，想要的话必须要配置，可选参数必须要配置到最后面
    function fun1(str, num) {
        if (num) {
            return str + "\u73B0\u5728" + num + "\u5C81";
        }
        else {
            return str + "\u5E74\u9F84\u4FDD\u5BC6";
        }
    }
    console.log(fun1("小明"));
    //默认参数
    //es5没有默认参数
    //es6与ts都有默认参数
    function fun2(str, num) {
        if (num === void 0) { num = 20; }
        return str + "\u73B0\u5728" + num + "\u5C81";
    }
    console.log(fun2("小明"));
    console.log(fun2("小明", 25));
    //剩余参数
    function sum(a, b, c, d) {
        return a + b + c + d;
    }
    //三点运算符
    function Sum() {
        var res = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            res[_i] = arguments[_i];
        }
        var sum = 0;
        res.forEach(function (el) {
            sum = sum + el;
        });
        return sum;
    }
    console.log(Sum(1, 2, 3));
    function getVal(any) {
        if (typeof any === 'string') {
            console.log(any);
        }
        if (typeof any === 'number') {
            console.log(any);
        }
    }
    getVal("dfdsf");
    //重载也可以使用可用参数进行判断
    //箭头函数
    var j = function () {
        return 123;
    };
    console.log(j());
})();
