//使用Symbol的小例子

const ADD = Symbol()
const REDUCE = Symbol()

// const ADD = "1"
// const REDUCE = "2"


function Prograss(pro) {
  switch (pro) {
    case ADD:
      return '+'
    case REDUCE:
      return "-"
    default:
      throw new Error("error")
  }
}

console.log(Prograss(REDUCE));