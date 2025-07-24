function rotater(str) {
    let direction= 'left';

    return function rotate(n) {
        if(n === str.length){
            direction = direction === 'left' ? 'right' : 'left';
            return str;
        }
        const len =str.length;
        const shift = n% len;

        if(direction === 'left') {
            return str.slice(shift)+str.slice(0, shift);
        }
        else {
            return str.slice(-shift) + str.slice(0, -shift);
        }
    };
}