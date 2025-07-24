/* eslint-disable no-unused-vars, no-extend-native */
Array.prototype.doNotInclude = function(indices) {
    const arr =this;
    let excludeIndices;
    if(typeof indices === 'number') {
        excludeIndices =[indices];
    } 
    else if(Array.isArray(indices)) {
        excludeIndices = indices;
    }
    else {
        return arr.slice();
    }
    return arr.filter((_, index) => !excludeIndices.includes(index));
}


