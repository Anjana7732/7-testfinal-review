/* eslint-disable no-unused-vars */
function mapQuest(arr) {
   const opp ={
    N : 'S',
    E : 'W',
    S : 'N',
    W : 'E'
   }
   return arr.reduce((stack, dir) =>{
    if (stack.length>0 && opp[dir] === stack[stack.length-1]) {
        stack.pop()
    }
    else stack.push(dir);
    return stack;
   }
,[])
}
console.log(mapQuest(['N', 'S']))