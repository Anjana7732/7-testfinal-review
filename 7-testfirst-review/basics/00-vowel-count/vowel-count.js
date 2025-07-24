/* eslint-disable no-unused-vars */
function vowelsCount(str) {
    let obj ={
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
        // total: sum(arr)
    };
    let astr = str.toLowerCase();
    for(let char of astr){
        if(char in obj){
            obj[char]++;
            
        }
    }
    // function sum(arr) {
    // return arr.reduce((acc, curr) => acc+curr, 0)}
    obj.total = Object.values(obj).reduce((acc, curr) => acc+curr, 0);
    return obj;

}
console.log(vowelsCount('Hello'))