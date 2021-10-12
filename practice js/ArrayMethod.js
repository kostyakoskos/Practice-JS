const people = [
    {name: 'A', age:1, buget:1},
    {name: 'B', age:2, buget:10},
    {name: 'C', age:5, buget:120},
    {name: 'D', age:10, buget:150},
    {name: 'E', age:20, buget:180},
    {name: 'F', age:25, buget:1000},
]

// старый foreach до ES6
// people.forEach(function(person, index, pArr){
//     console.log(person);
//     console.log(index);
//     console.log(pArr);
// })

// Так работает foreach в современном js
// people.forEach(person => console.log(person));

// const newPeople = people.map(person => {
//     return '${person.name}' ;
// })
// console.log(newPeople);

const amount = people.reduce((total, item) => 
total + item.buget, 10000)

console.log(amount);

function fib(num) {
    let a = 1, b = 2, sum = 0;
    for (let i = 3; i < num; i++) {
        sum += a + b;
        a = b;
        b = sum;
    }
    console.log(sum);
}

fib(5);
