/* eslint-disable no-unused-vars */
function makeIterator(array){
    let idx =0;
    return {
        getNext() {
            if(idx>= array.length) {
                return { value: undefined, done: true};
            } else {
                const value = array[idx];
                idx++
                return {value : value, done: false};
            }
        },
        getIndex() {
            return idx;
        }
    }
}