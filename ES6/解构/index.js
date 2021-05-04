const [a, b, ...c] = [1, 2, 3, 4, 5, 6]
console.log(c)

const obj = {
  name: 'yang',
  age: 18,
  height: 175
}

const {
  name,
  age,
  height
} = obj

console.log(name,age,height)



//块级作用域

for(let item in obj){
  console.log(item)
}


//默认赋值
test(1)
test(1,3)
function test(one,two=0){
  console.log(one,two)
}