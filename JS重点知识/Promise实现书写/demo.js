function test(multi) {
  const a = () => {
    console.log("a");
  };
  const b = () => {
    console.log("b");
  };

  try {
    multi(a, b)
  } catch (e) {
    b()
  }


  test.prototype.a = a
  test.prototype.b = b

  multi(a, b)
}


console.log(test(a,b));