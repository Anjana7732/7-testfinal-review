/* eslint-disable no-unused-vars */
function pigify(str){
    debugger;
    str = str.split(' ');
    let check ='aeiou';
    for(let i=0; i<str.length; i++){
        let add='';
            let word =str[i];
            if (check.includes(word[0])){
                str[i]+='ay';
            }
            else {
                let index =0;
                while(!check.includes(word[index])){
                    if(word[index] === 'q' && word[index+1]=== 'u'){
                        index+=2;
                        break;
                    }
                    index++;
                }
                str[i] = str[i].slice(index)+str[i].slice(0, index)+'ay';
            }
        
    }
    return str.join(' ');
}
console.log(pigify('square'))