/* eslint-disable no-unused-vars */
function reject(array, callback){
debugger
let res =[]
for (let item of array){
    if(!callback(item)){
        res.push(item)
    }
}
return res
}
