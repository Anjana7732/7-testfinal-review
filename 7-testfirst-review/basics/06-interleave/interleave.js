function interleave(...str){
    let out='';
    const maxLength = Math.max(...str.map(s =>s.length));

    for (let i =0; i<maxLength; i++) {
        let res = '';
        for(let char of str) {
            res+= char[i] || '';
        }
        out+=res
    }
    return out;
}