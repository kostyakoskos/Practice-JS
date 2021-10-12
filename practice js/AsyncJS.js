console.log('Start');

console.log('Start2');

// ьраузер видит что есть ф-ция settimeout. Браузер регистрирует ф-цию и то
// что она должна быть выполнена через 2с
// setTimeout(function(){
//     console.log('Inside timout')
// },2000);

function timeout2(){
    console.log('timeout after 2 seconds');
}

setTimeout(timeout2, -100);

console.log('Start3');

// Так лучше не писать, т.к. большая вложенность.
// setTimeout(() => {
//     console.log('Preparing data');
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.status = 'not working';
//         console.log('Data recieved', backendData);
//     }, 2000)
// }, 2000);

// const p = new Promice(function(resolve, reject) {
//     setTimeout(() =>  {
//         const back = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve();
//     }, 2000)
// })

// вызовется then когда будет закончена асинхронная операция.
// p.then(() => {
//     console.log('Promise resolved');
// });

let myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        console.log('Preparing data');
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve();
    }, 2000);
});

myFirstPromise.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000)
    })
}).then(clientData => {
    console.log('Data recieved ', clientData)
})

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

sleep(3000).then('After three seconds');