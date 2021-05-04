"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.User = void 0;
var MysqlDB_1 = require("./MysqlDB");
var User = /** @class */ (function () {
    function User(id, name, age) {
        this.id = id;
        this.name = name,
            this.age = age;
    }
    return User;
}());
exports.User = User;
var UserModel = new MysqlDB_1.MysqlDB();
exports.UserModel = UserModel;
