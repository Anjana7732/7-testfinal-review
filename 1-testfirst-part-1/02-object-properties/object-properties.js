/* eslint-disable no-unused-vars */
function setPropsOnObj(object) {
    object.x = 7;
    object['y'] = 8;
    object.onePlus = function(n) {
        return n+1;
    }

}

function setPropsOnArr(arrobj) {
    arrobj.hello = function() {
        return "Hello!"
    };
    arrobj.full = 'stack';
    arrobj[0] = 5;
    arrobj.twoTimes = function(num) {
        return 2 * num;
    };

}

function setPropsOnFunc(obj) {
    obj.year = '20??';
    obj.divideByTwo = function(n) {
        return n/2;
    };
}

function shallowCopy(item1, item2) {
    if (Array.isArray(item1) && Array.isArray(item2)) {
        return [...item1,...item2];
    }
    if (typeof item1 === 'object' && typeof item2) {
        return {...item1,...item2}
    }

}