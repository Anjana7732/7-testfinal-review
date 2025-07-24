/* eslint-disable no-unused-vars */
function callAll(obj, funcs){
    const res =[];
    for (let i=0; i<funcs.length; i++) {
        const fn =funcs[i];
        const result =fn.call(obj)
        res.push(result)
    }
    return res;
}