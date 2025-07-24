/* eslint-disable no-unused-vars */
function forEach(arr, callback) {
    for (let i=0; i<arr.length; i++) {
        callback(arr[i],i,arr)
    }
}

function doubler(num) {
    return num*2
}
function map(arr, callback) {
    let newarr=[]
    for (let i=0; i<arr.length; i++) {
       newarr.push(callback(arr[i], i, arr))
    }
    return newarr
}

function filter(arr, fn) {
    let res=[]
    for (let i=0; i<arr.length; i++) {
        if(fn(arr[i], i, arr)) {
            res.push(arr[i])
        }
    }
    return res
}

function includes(arr, target){
    if (Array.isArray(arr)) {
        for(let i=0; i<arr.length;i++) {
        if (arr[i]=== target) {
            return true
        }
        
    }
    }
    else if(typeof arr === 'object' && arr!==null) {
        for (let key in arr) {
            if(arr[key] === target) {
                return true
            }
        }
    }
    return false;
}

function countWords(num, str){
    let sum=num
    arr=str.split(" ")
    sum+=arr.length
    return sum
}

function reduce(arr, start, fn) {
    let acc=start
    for (let i=0; i<arr.length; i++){
        acc =fn(acc, arr[i])
    }
    return acc
}

function sum(arr){
    return reduce(arr,0, function(a,b){
        return a+b
    })
}

function every(arr,fn) {
    return reduce(arr,true,(acc, curr)=> acc&&fn(curr))
}

function some(arr, fn) {
    for(let i=0; i<arr.length;i++) {
        if(fn(arr[i])) {
            return true
        }
    }
    return false
}

    
   