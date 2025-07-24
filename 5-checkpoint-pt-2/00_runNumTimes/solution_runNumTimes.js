/* eslint-disable no-unused-vars */
function runNumTimes(func, num){
    let out =0
   for (let i=0; i<num; i++){
    res = func()
    out+= res
    
   }
    return out 
    
    
}
console.log(runNumTimes(func, 3))
function func(){
        return 6
    }