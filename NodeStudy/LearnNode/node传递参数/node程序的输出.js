function one() {
  two()
}

function two() {
  //函数调用栈 
  console.trace()
}

one()