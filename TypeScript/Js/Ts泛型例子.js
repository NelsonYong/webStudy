"use strict";
/**
 * 功能:定义一个操作数据库的库，支持MySQL mssql,mongoDb
 * 要求1：功能一样，add get delete get方法
 * 约束统一规范，以及代码重用
 */
(function () {
    //定义一个操作MySQL的类
    var mysql = /** @class */ (function () {
        function mysql() {
            console.log("连接数据库");
        }
        mysql.prototype.add = function (info) {
            console.log(info);
            return true;
        };
        mysql.prototype.updata = function (info, id) {
            console.log(info);
            console.log(id);
            return true;
        };
        mysql.prototype.delete = function (id) {
            throw new Error("Method not implemented.");
        };
        mysql.prototype.get = function () {
            return [{ name: 'aaa', password: 'dsadad' }, { name: 'aaa', password: 'dsadad' }, { name: 'aaa', password: 'dsadad' }];
        };
        return mysql;
    }());
    var mssql = /** @class */ (function () {
        function mssql() {
        }
        mssql.prototype.add = function (info) {
            console.log(info);
            return true;
        };
        mssql.prototype.updata = function (info, id) {
            console.log(info);
            console.log(id);
            return true;
        };
        mssql.prototype.delete = function (id) {
            throw new Error("Method not implemented.");
        };
        mssql.prototype.get = function () {
            throw new Error("Method not implemented.");
        };
        return mssql;
    }());
    var mongoDb = /** @class */ (function () {
        function mongoDb() {
        }
        mongoDb.prototype.add = function (info) {
            console.log(info);
            return true;
        };
        mongoDb.prototype.updata = function (info, id) {
            console.log(info);
            console.log(id);
            return true;
        };
        mongoDb.prototype.delete = function (id) {
            throw new Error("Method not implemented.");
        };
        mongoDb.prototype.get = function () {
            throw new Error("Method not implemented.");
        };
        return mongoDb;
    }());
    //定义一个User类与数据库做映射
    var User = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    var u = new User();
    u.username = "张三";
    u.password = "1231sd";
    var mysqldb = new mysql();
    mysqldb.add(u);
    mysqldb.updata(u, 123);
    console.log(mysqldb.get());
})();
