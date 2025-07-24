/* eslint-disable no-unused-vars, no-prototype-builtins */
function longest(s1, s2) {
    debugger
  // your code
  let map={}
  let arr =[]
  for(char of s1){
    if(!map[char]){
    map[char]=1}
  }
  for (char of s2){
    if (map[char]!== undefined){
      arr.push(char)
    }
  }
  return arr.join('')
}
console.log(longest('asjbcjbdc','asjhbdc'))