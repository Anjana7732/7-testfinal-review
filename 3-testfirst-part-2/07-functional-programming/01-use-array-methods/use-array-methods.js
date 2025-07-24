/* eslint-disable no-unused-vars */
function indexAndValue(arr){
    return arr.map((value, index) => ({index, value}))
}

function capitalize(str) {
    return str.toUpperCase()
}

function swapCase(sent) {
    return sent.split(' ').map((word, index)=> index%2===0? capitalize(word): word).join(' ')
}

function extensionSearch(search, arr) {
    return arr.filter(file => file.endsWith(`${search}`))
}

function getPopulation(arr, select) {
    const sum = select.length? arr.filter(c => select.includes(c.name)): arr;
    return sum.reduce((total, country) => total+country.population, 0)
}

function keyifyArrayOfObjects(key, arr) {
    return arr.reduce((acc, obj)=> {
        acc[obj[key]] =obj;
        return acc;
    }, {})
}

function powerLevelAverage(arr) {
    const total =arr.reduce((sum, hero) => sum+hero.powerLevel, 0)
    return Math.round(total/ arr.length)
}

function mapReduce(arr, fn) {
    return arr.reduce((acc, val, idx, org) => {
        acc.push(fn(val, idx,org))
        return acc
    }, [])
}

function filterReduce(arr, fn) {
    return arr.reduce((acc, val, idx, org) => {
        if (fn(val, idx, org)) {
            acc.push(val)
        }
        return acc;
    }, [])
}
 
function inYourBudget(num, arr) {
   return arr.filter(item=> item.price<= num).map(item => item.item)
}

function separateAndReturnNames(arr, Whichname, num) {
    arr.map(hero => {
        const[first, last] =hero.name.split(' ')
        hero.firstName = first
        hero.lastName = last
        return hero
    })
    return arr.map(hero=>hero[Whichname]).filter(name=> name.length <=num)
}

function priorityTodoDuration(todoList) {
    return todoList.filter(task=> task.priority === 'high').reduce((sum, task) => sum+task.duration, 0)
}