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
    //1.属性接口
    //2.函数接口
    //3.可索引接口
    //4.类类型接口
    //5.接口拓展
    function Ajax(config) {
        var xhr = new XMLHttpRequest();
        xhr.open(config.type, config.url, config.async);
        xhr.send(config.data);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log('success');
                if (config.dataType == 'json') {
                    console.log(JSON.parse(xhr.responseText));
                }
                else {
                    console.log(xhr.responseText);
                }
            }
        };
    }
    Ajax({
        type: 'get',
        async: true,
        url: 'http://49.234.86.61:8000/BlogDev/Data/SearchText.php',
        dataType: 'json'
    });
    var md5 = function (key, value) {
        //模拟操作
        return key + value;
    };
    console.log(md5("张三", 'hhhh'));
    //let arr1:UserArr=['aaa','bbb']
    var arr = ['aaa', 'bbb'];
    console.log(arr);
    var obj = { name: 'aaa' };
    console.log(obj);
    var Programmer = /** @class */ (function () {
        function Programmer(name) {
            this.name = name;
        }
        Programmer.prototype.coding = function (code) {
            console.log(this.name + "在" + code);
        };
        return Programmer;
    }());
    var Web = /** @class */ (function (_super) {
        __extends(Web, _super);
        function Web(name) {
            var _this = _super.call(this, name) || this;
            _this.name = name;
            return _this;
        }
        Web.prototype.work = function () {
            console.log(this.name + "在工作");
        };
        Web.prototype.eat = function () {
            console.log(this.name + "在吃饭");
        };
        return Web;
    }(Programmer));
    var w = new Web("小明");
    w.work();
    w.eat();
    w.coding("写代码");
})();
