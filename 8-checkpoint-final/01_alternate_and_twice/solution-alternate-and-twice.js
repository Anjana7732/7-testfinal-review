/* eslint-disable no-unused-vars, no-prototype-builtins */
function alternate(fn) {
  let callCount =0;
  return function () {
    callCount++;
    if (callCount % 2 === 1){
        return fn();
    }
  };
}
function twice(fn) {
    let callCount = 0;
    return function() {
        if(callCount<2) {
            callCount++
            return fn();
        }
        return 0;
    }
}