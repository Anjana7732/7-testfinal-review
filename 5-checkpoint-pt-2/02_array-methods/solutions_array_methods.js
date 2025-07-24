/* eslint-disable no-unused-vars */
function useMapToUpperCase(string){
    string =string.split(' ')
    return string.map(x => x.toUpperCase())
}
console.log(useMapToUpperCase('Keep It Simple'))

function useFilter(array){
    return array.filter(x => (x.includes('@')))
}
// console.log(useFilter([
//       'emilie.io',
//       'trace.google.com',
//       'kellyscott2@aol.com',
//       'helloWorld.com',
//       'test@apple.com',
//       'snowman@iceland.com',
//     ]))

function sumWithReduce(array,acc){ 
    if(acc === undefined){
        acc=0
    }
    return array.reduce((acc, curr) => acc+curr,acc)
}
// console.log(sumWithReduce([7, 8, 9, 10], 202))

function filterEvensDoubleAndSum(array){
    evens =array.filter(x => x %2 === 0)
    res = evens.map(x => x*2)
    sum =res.reduce((acc, curr) => acc+curr,0)
    return sum
}
console.log(filterEvensDoubleAndSum([1,2,3,4]))