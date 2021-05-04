define(function (require, exports, module) {
  const name = "yangjie"
  const age = 18

  function say(name) {
    console.log("你好啊" + name);
  }

  module.exports ={
    name,
    age,
    say
  }
});