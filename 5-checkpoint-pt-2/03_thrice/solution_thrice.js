/* eslint-disable no-unused-vars */
function thrice(fn){
    let count = 0;
    return function(){
        if (count<3){
            count++
            return fn();
        } 
        return undefined;
    }
}