const obj = {
  name: 'yangjie',
  foo : function () {
    return this.name
  }
}


const test = {
  name: "李雷"
}

console.log(obj.foo.call(test));