/* eslint-disable no-unused-vars, no-throw-literal*/
function RPNCalculator() {
    this.stack=[];
}

RPNCalculator.prototype.push =function(value) {
    this.stack.push(value)
}
RPNCalculator.prototype.value =function() {
    if (this.stack.length===0) {
        return 0;
    }
    return this.stack[this.stack.length-1]
}
function check(stack){
    if (stack.length<2) {
        throw ('rpnCalculatorInstance is empty')
    }
}
RPNCalculator.prototype.plus=function() {
    check(this.stack)
    const b = this.stack.pop()
    const a =this.stack.pop()
    this.stack.push(a+b)
}
RPNCalculator.prototype.minus=function() {
    check(this.stack)
    const b = this.stack.pop()
    const a =this.stack.pop()
    this.stack.push(a-b)
}
RPNCalculator.prototype.times=function() {
    check(this.stack)
    const b = this.stack.pop()
    const a =this.stack.pop()
    this.stack.push(a*b)
}
RPNCalculator.prototype.divide=function() {
    check(this.stack)
    const b = this.stack.pop()
    const a =this.stack.pop()
    this.stack.push(a/b)
}