/* eslint-disable no-unused-vars, no-prototype-builtins */
function soup(str1, str2) {
    
        let count =0
        for (let i=0; i<str1.length;i++) {
            for (let j=0; j<str2.length;j++)
                if (str1[i]===str2[j]){
                    count++
                }
        }
        if (count === str1.length) {
            return true;
        }
        else return false
}
    
