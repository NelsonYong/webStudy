// 独一无二的值 Symbol

let s = Symbol("foo")
let s1 = Symbol("foo")

console.log(s.toString());
console.log(s==s1);//false
console.log(s.description);//获取里面的值

//做为属性名
let mySymbol=Symbol("foo")
// let a = {}
// a[mySymbol]="Hello"

let a = {
  [mySymbol]:"Hello_"
}
console.log(a[mySymbol]);
let b = {}
Object.defineProperty(b,mySymbol,{value:'hello'})
console.log(b[mySymbol]);
