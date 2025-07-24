/* eslint-disable no-unused-vars */
function presses(string){
    string = string.toLowerCase();
    let first =' adgjmptw*#1234567890';
    let second ='behknqux';
    let third ='cfilorvy'
    let fourth ='sz'
    let press =0
    for (char of string){
        if (first.includes(char)) {press+=1}
        else if(second.includes(char)) { press+=2}
        else if(third.includes(char)) {press+=3}
        else if(fourth.includes(char)){press+=4}

    }
    return press
}