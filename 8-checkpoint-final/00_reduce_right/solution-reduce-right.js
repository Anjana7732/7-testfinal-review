/* eslint-disable no-unused-vars, no-prototype-builtins */
function reduceRight(arr, startIdx, func) {
    let res =startIdx;
    for(let i=arr.length-1; i>=0; i--){
        res= func(res, arr[i])
    }
    return res
}


