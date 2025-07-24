/* eslint-disable no-unused-vars, no-throw-literal*/

/*
  Refactor the constructor function below and use ES2015 Class Syntax
*/
class RPNCalculator{
  constructor() {
    this.stack=[]
  }
  push(value) {
    this.stack.push(value)
  }
  value() {
    if(this.stack.length===0) {
      return 0;
    }
    return this.stack[this.stack.length-1]
  }
  check() {
    if(this.stack.length<2) {
      throw ('rpnCalculatorInstance is empty')
    }
  }
  plus() {
    this.check()
    const b= this.stack.pop()
    const a =this.stack.pop()
    this.stack.push(a+b)
  }
  minus() {
    this.check()
    const b= this.stack.pop()
    const a =this.stack.pop()
    this.stack.push(a-b)
  }
  times() {
    this.check()
    const b= this.stack.pop()
    const a =this.stack.pop()
    this.stack.push(a*b)
  }
  divide() {
    this.check()
    const b= this.stack.pop()
    const a =this.stack.pop()
    this.stack.push(a/b)
  }

}

