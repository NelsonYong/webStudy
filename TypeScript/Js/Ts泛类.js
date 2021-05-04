"use strict";
(function () {
    var User = /** @class */ (function () {
        function User() {
        }
        return User;
    }());
    // class MysqlDb{
    //   add(user:User):boolean{
    //     return true
    //   }
    // }
    // const u=new User()
    // u.username="张三"
    // u.password="151"
    // const db=new MysqlDb()
    // console.log(db.add(u));
    var Article = /** @class */ (function () {
        function Article() {
        }
        return Article;
    }());
    // class MysqlDb{
    //   add(user:Article):boolean{
    //     console.log(user);
    //     return true
    //   }
    // }
    // const a=new Article()
    // a.title="哈哈哈"
    // a.desc="嘻嘻嘻"
    // a.status=200
    // const db=new MysqlDb()
    // console.log(db.add(a));
    //用泛型解决重复的代码
    var MysqlDb = /** @class */ (function () {
        function MysqlDb() {
        }
        MysqlDb.prototype.add = function (user) {
            console.log(user);
            return true;
        };
        MysqlDb.prototype.updata = function (user, id) {
            console.log(user);
            console.log(id);
            return true;
        };
        return MysqlDb;
    }());
    // const a=new Article()
    // a.title="哈哈哈"
    // a.desc="嘻嘻嘻"
    // a.status=200
    // const db=new MysqlDb<Article>()
    // console.log(db.add(a));
    // const u=new User()
    // u.username="张三"
    // u.password="151"
    // const db1=new MysqlDb<User>()
    // console.log(db1.add(u));
    //定义一个ArticleCate类和数据库进行映射
    var ArticleCate = /** @class */ (function () {
        function ArticleCate(params) {
            this.title = params.title;
            this.desc = params.desc;
            this.status = params.status;
        }
        return ArticleCate;
    }());
    var a = new ArticleCate({
        title: '撒大苏打',
        desc: 'dasdsaihud'
    });
    var db = new MysqlDb();
    console.log(db.add(a));
    console.log(db.updata(a, 123));
})();
