// посчитать сумму всех нечетных числе больше 0.
function calculate(arr) {
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0 && arr[i] > 0) {
            temp += arr[i];
        }
    }
    return temp;
}

// function calculate2(arr2) {
//     return arr2.reduce((total, amount) => {
//         if (amount > 0 && amount % 2 !== 0) {
//             total += amount;
//         }
//         return total;
//     }, 0);
// }

function calculate2(arr2) {
    return arr2.reduce((total, amount) => amount > 0 && amount % 2 !== 0 ?
            total += amount : total, 0);
}

function check(arr, sumD){
    for(let i = 0 ; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === sum){
                return true;
            }
        }
    }
    return false;
}

function sumDigit(num){
    let str1 = num.toString();
    let arr = [...str1];
    return arr.reduce((accumulate, item) => accumulate + +item, 0)
}

// С ананонимной функцией. map нужен для того, чтобыперевести из стринг в number
function sumD(num)
{
    return num.toString()
    .split('')
    .map(Number)
    .reduce(function (a, b) {
        return a + b;
    }, 0);
}

function sumDi(num) {
    return num.toString()
        .split('')
        .reduce((accumulate, item) => accumulate + +item, 0);
}
//console.log(calculate([5, 0, -5, 20, 88, 17, -32]));
//console.log(calculate2([5, 0, -5, 20, 88, 17, -32]));
// console.log(check([10,15,3,7], 17)); // true
// console.log(check([10,15,3,7], 20)); // false
//console.log(sumDigit(123));
console.log('sumD',sumD(124));
console.log(sumDi(125));

function grid(a, str){
    a = 3;
    str = '123'
}
let a = 2, str = '999';
grid(a,str)
console.log(a + str);

// Ссылочный тип object
let obj = { key: 5 };
function addTwoObj(obj) {
 obj.key = obj.key + 2;
}
addTwoObj(obj);
console.log(obj.key); // 7

const arrow = name => console.log('Hello',name);
arrow('andrew');

// принимает неограниченное число параметров
function sumAll(...all){

    return all.reduce((accumulate,item) => accumulate + item,0);
}
console.log(sumAll(1,2,3,5,7));

// пример замыкания
function createMember(name){
    return function(lastName){
        console.log(name + lastName)
    }
}
const logWithLastName = createMember('Name');
logWithLastName('LastName');
logWithLastName('NewLastName');

console.log('Array');

const cars = ['vw','audi','skoda'];
const fib = [1,2,3,5,8];
cars.push('Renault');// добавить элемент в конец
cars.unshift('Lada');// добавить первый элемент в начало
console.log(cars);
cars.shift();
cars.pop();// удалить последний элемент из массива
cars.reverse();// в обратнгом порядке
console.log(cars);

const text = "Hello world";
const arr = text.split('').reverse().join('');
console.log(arr);
const upperCaseCars = cars.map(car => 
    car.toUpperCase());
console.log(upperCaseCars);
const t = fib.filter(num => num > 3);
console.log(t);
const people = [
    {name: 'a', budget: 100},
    {name: 'b', budget: 200},
    {name: 'c', budget: 300},
]
const allBudget = people.filter(i => i.budget >= 200).reduce((accumulate, item) =>
    accumulate + item.budget, 0);
console.log(allBudget);
//
console.log('objects');
const peopson = {
    name: 'Kostya',
    age: 28,
    languages: ['ru', 'en', 'de'],
    greet(){
        console.log('greet from person')
    },
    ['key'  + (1 + 2)]: 'Computed key',
}

console.log('---');
for(let i = 1; i <= 10; i++){
    function foo(x){
    setTimeout(() => {
        console.log(i);
    }, 1000)
}
}