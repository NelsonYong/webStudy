"use strict";
(function () {
    //数字类型,只可赋值数字
    var num = 1;
    num = 2;
    num = 2.1;
    console.log(num);
    //字符串类型，只可赋值字符串类型
    var str = "hello ts";
    //布尔类型
    var flag = false;
    flag = true;
    //数组类型
    var arr = [1, 2, 3];
    var arr1 = ["sss", "ko"];
    //全部任意类型
    var arr2 = [1, 23, "dsd"];
    //数组的第二种方法
    var Arr = ["b", "54"];
    //元组类型---可以指定数组里面每个元素的类型
    var arrv = [1, "2", false];
    //枚举类型
    var Flag;
    (function (Flag) {
        Flag[Flag["success"] = 1] = "success";
        Flag[Flag["fail"] = -1] = "fail";
    })(Flag || (Flag = {}));
    console.log(Flag.success); //1
    //null和undefined类型
    var nu;
    nu = 2;
    console.log(nu);
    //es5的定义方法
    // function test(){
    //   console.log("red");
    // }
    //无返回值的void类型
    function test() {
        console.log("red");
    }
    //返回值为数字类型
    function test1() {
        return 666;
    }
    //never类型，其他类型，包括null，underfined,不包含前面的数据类型
    var error = (function () {
        console.log("error");
    })();
})();
