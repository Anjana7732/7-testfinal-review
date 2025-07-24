var wordPattern = function(pattern, s) {
    debugger
    let map={}
    s=s.split(' ')
    let count=0
    for(let i=0; i<s.length; i++){
    for (let char of pattern){
        if(!map[char]){
            map[char]=s[i]
        }
        else {
            if(map[char]===s[i]){
                count++;
            }
            else return false
            
        }
    }
    }
    if (count>0){ return true}
    
    
};
console.log(wordPattern("abba", "dog cat cat dog"))