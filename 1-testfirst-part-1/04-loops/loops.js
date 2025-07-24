/* eslint-disable no-unused-vars */
function repeat(str, count) {
    if (count === 0) return ''
    let out=''
    for (let i=0; i<count; i++){
        out+=str;
    }
    return out;

}


function sum(array) {
    let sum=0
    for (let i=0; i<array.length; i++) {
        sum+=array[i]
    }
    return sum
}

function join(array, delimiter='') {
    let out =''
    for(let i =0; i<array.length; i++) {
        out+=array[i]
        if (i<array.length-1){
            out+=delimiter
        }
    }
    return out
}


function gridGenerator(num) {
    
    if(num=== 0) return ''
    let res=''
    for(let i=0; i<num;i++) {
        for (let j=0;j<num;j++) {
            if(!((i+j)%2)) {
                res+='#'
            }
            else {
                res+=' '
            }
            
        }
        res+='\n'
    }
    return res
}
console.log(gridGenerator(2))


function paramifyObjectKeys(obj) {
    let res=''
    let keys =Object.keys(obj).sort()
    for (let i=0; i<keys.length; i++) {
        res+=keys[i]+'='+obj[keys[i]]
        if (i<keys.length-1) {
            res+='&'
        }
    }
    return res
}

function paramify(obj) {
    let res=''
    let arr =[]
    for (let key in obj) { 
    if(obj.hasOwnProperty(key)) {
        res=key+'='+obj[key]
    arr.push(res)
    }
    }
    return arr.sort().join('&')
}

function sort(arr) {
    debugger
  let result = [...arr]; // clone to avoid modifying original array

  for (let i = 1; i < result.length; i++) {
    let current = result[i];
    let j = i - 1;

    // Use > for numbers and strings (both are comparable this way)
    while (j >= 0 && result[j] > current) {
      result[j + 1] = result[j];
      j--;
    }

    result[j + 1] = current;
  }

  return result;
}
let unsorted = ['toad', 'prune', 'pretzel', 'aardvark', 'tuna', 'weasel'];
      let sorted = sort(unsorted);
console.log(sorted)