console.log(process);
//node index.js yangjie----yangjie为传递过去的参数，argv拿到
console.log(process.argv[2]);

console.clear()
process.argv.forEach(item=>{
  console.log(item);
})