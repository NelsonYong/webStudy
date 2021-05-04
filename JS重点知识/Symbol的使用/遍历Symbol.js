//使用重复的属性
let s1 = Symbol.for('foo');
let s2 = Symbol.for('foo');
s1 === s2 // true


console.log(Symbol.keyFor(s1));
//console.log(s1.description);


let one = Symbol("one")
let two = Symbol("tow")

let test = {
  [one]: "1",
  [two]: '2'
}

console.log(Object.keys(test));
Object.getOwnPropertySymbols(test).forEach(el => {
 console.log(el.description);
});