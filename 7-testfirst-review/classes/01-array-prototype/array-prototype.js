/* eslint-disable no-unused-vars */
Array.prototype.maap = function(callback) {
    const result =[];
    this.forEach((el, idx, array) => {
        result.push(callback(el, idx, array));
    });
    return result;
}
Array.prototype.fiilter = function(callback) {
    const res =[];
    this.forEach((element, idx, array) => {
    if(callback(element, idx, array)) {
        res.push(element);
    }
    })
return res;
}

Array.prototype.reeduce = function(callback, initialValue) {
  if (this == null) {
    throw new TypeError('Array.prototype.reeduce called on null or undefined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  const arr = Object(this);
  const len = arr.length;
  let accumulator;
  let startIndex = 0;

  if (initialValue !== undefined) {
    accumulator = initialValue;
  } else {
    if (len === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    accumulator = arr[0];
    startIndex = 1;
  }

  // Use forEach on the sliced array
  arr.slice(startIndex).forEach((element, index) => {
    const actualIndex = index + startIndex;
    accumulator = callback(accumulator, element, actualIndex, arr);
  });

  return accumulator;
};