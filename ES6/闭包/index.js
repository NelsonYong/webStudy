const count = (function () {
  let con = 1
  return function () {
    return con +=1
  }
})()
console.log(count())
console.log(count())
console.log(count())
