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

console.log(calculate([5, 0, -5, 20, 88, 17, -32]));
console.log(calculate2([5, 0, -5, 20, 88, 17, -32]));
console.log('Hello');