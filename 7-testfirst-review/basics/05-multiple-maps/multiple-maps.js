/* eslint-disable no-unused-vars */
function multipleMaps(array1, array2) {
    return array1.map(value => {
        for (let mapObj of array2){
            if (value in mapObj) {
                return mapObj[value];
            }
        }
    });

}