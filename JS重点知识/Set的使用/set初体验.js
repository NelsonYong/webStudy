let arr = [1,3,5,3,5]
let set = new Set()

arr.forEach(v=>{
  set.add(v)
})

console.log(set);
console.log(set.size);



// console.log(set.values());
// for (const item of set.keys()) {

//   console.log(item);
  
// }

for (const item of set.entries()) {

  console.log(item);
  
}

console.log([...set]);

console.log([...set,8]);

