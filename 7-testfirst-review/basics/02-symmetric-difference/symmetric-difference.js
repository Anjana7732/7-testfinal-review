// the difference function is pre-declared so it is recognized by the test specs.
// The last spec in symmetricDiff checks to see that difference is called.

// If difference is defined using an assignment expression (with let or const)
// it is not accessible on the "window" object which is where the jasmine `spyOn` function
// checks for the `difference` function.

// Feel free to change the names of the parameters, but if you want your specs to
// pass keep the function// declaration syntax.

/* eslint-disable no-unused-vars */

function difference(arrayA, arrayB) {
    const out = arrayA.filter(item => !arrayB.includes(item));
    return out    
}
// console.log(difference([1, 2, 3, 4, 5, 6],
//   [9, 8, 7, 1, 2, 5, 11]))

function symmetricDiff(arrayA, arrayB){
    const diff1= difference(arrayA, arrayB);
    const diff2= difference(arrayB, arrayA);
    return [...diff1, ...diff2];

}

