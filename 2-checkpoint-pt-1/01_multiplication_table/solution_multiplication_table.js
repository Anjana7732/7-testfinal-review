/* eslint-disable no-unused-vars */
function multiplicationTable(rows, columns) {
    arr=[]
    for (let i=0; i<rows; i++){
        let mul=[];
        let f=i+1;
        for(let j=1; j<=columns;j++) {
            mul[j-1] = f*j;
        }
        arr[i]=mul
    }
    return arr
}
console.log(multiplicationTable(2, 2))