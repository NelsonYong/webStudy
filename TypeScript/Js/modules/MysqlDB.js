"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlDB = void 0;
var MysqlDB = /** @class */ (function () {
    function MysqlDB(list) {
        if (list === void 0) { list = []; }
        console.log("数据库连接成功");
        this.list = list;
    }
    MysqlDB.prototype.add = function (info) {
        console.log(info);
        this.list.push(info);
        return true;
    };
    MysqlDB.prototype.updata = function (info, iid) {
        this.list.forEach(function (el) {
            if (iid === el.id) {
                var _a = JSON.parse(JSON.stringify(info)), id = _a.id, name_1 = _a.name, age = _a.age;
                el.id = id;
                el.name = name_1;
                el.age = age;
                console.log("修改成功");
            }
        });
        return true;
    };
    MysqlDB.prototype.delete = function (id) {
        for (var index = 0; index < this.list.length; index++) {
            if (id == this.list[index].id) {
                this.list.splice(index, 1);
                console.log("删除成功");
                return true;
            }
        }
        return true;
    };
    MysqlDB.prototype.getData = function () {
        return this.list;
    };
    return MysqlDB;
}());
exports.MysqlDB = MysqlDB;
