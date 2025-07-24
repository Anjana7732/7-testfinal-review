/* eslint-disable no-unused-vars, no-prototype-builtins */
function findObjPropsHasOwn(obj) {
    let arr=[]
    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
            arr.push(key)
        }
    }
    return arr.join(', ')
}

function findObjKeys(obj) {
    return Object.keys(obj).join(', ')
}