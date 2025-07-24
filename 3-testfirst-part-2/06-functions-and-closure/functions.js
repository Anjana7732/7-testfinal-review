/* eslint-disable no-unused-vars */
function concatString() {
    const args=Array.from(arguments)
    return args.join('')
}

function yourFunctionRunner() {
    const funcs = Array.from(arguments)
    return funcs.map(fn => fn()).join('')
}

function makeAdder(num) {
    return function(add) {
        return add+num
    };
}

function once(fn) {
    let call=false
    return function(...args) {
        if(!call){
            result =fn(...args)
            call=true
            return result
        }
        return 'the function has already been called...';
    }
}

function createObjectWithClosures() {
    let val=0
    return {oneIncrementer : function() {
        val+=1;
    },
    tensIncrementer: function() {
        val+=10;
    },
    getValue: function() {
        return val
    },
    setValue:function(now) {
        val=now
    }
    }
}

function dontSpillTheBeans(sec) {
    let secret =sec
    return {
        getSecret: function(){
            return secret;
        },
        setSecret: function(newsec){
            secret = newsec
        }
    }
}