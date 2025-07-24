/* eslint-disable no-unused-vars */
function createCalculator() {
    let total=0;
    return {add(num) {
        total +=num;
    },
    subtract(num) {
        total -=num;
    },
    value() {
        return total
    },
    clear() {
        total =0;
    }
    };
}

function addSquareMethod(instances) {
    return instances.map(calculator =>{
        calculator.square = function() {
            const current = this.value();
            return current*current;
        }
        return calculator;
    })
    

}
let human ={
    add(num) {
        this.total+=num
    },
    subtract(num){
        this.total-=num
    },
    value() {
        return this.total
    },
    clear(){this.total =-10

    }
}
function createHumanCalculator() {
    const calc =Object.create(human);
    calc.total =-10
    return calc;
}
