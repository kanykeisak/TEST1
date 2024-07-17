// Задание 1

// const regExp = /^\d+$/
//
// const containsOnlyDigits = (str) => {
//     return regExp.test(str)
// }
//
// console.log(containsOnlyDigits("12345")); // Выведет true
// console.log(containsOnlyDigits("12a45")); // Выведет false

// Задание 2

// let second = 0
// const interval = setInterval(() => {
//     second++
//     console.log("Прошла секунда: " + second)
//     if (second > 2) {
//         clearInterval(interval);
//     }
// },1000)

// Задание 3

// const count = () => {
//     let i = 1;
//     const interval = setInterval( () => {
//         console.log(i)
//         i++
//         if (i > 10) {
//             clearInterval(interval);
//         }
//     }, 1000);
// }
//
// count()


// Задание 4
//
// const block = document.querySelector('#block');
//
// block.onclick = (event) => {
//     if(event.target.classList.contains('red')){
//         event.target.classList.remove('red')
//     }else {
//         event.target.classList.add('red')
//     }
// }

// Задание 5

// const button = document.querySelector('#btn')
//
// button.onclick = () => {
//     const request = new XMLHttpRequest() // 1 - создание запроса
//     request.open('GET', 'data.json') // 2 - указание метода запроса и пути
//     request.setRequestHeader('Content-type', 'application/json') // 3 - указывание заголовка запроса
//     request.send() // 4 - отправка запроса
//
//     request.onload = () => {
//         const data = JSON.parse(request.response)
//         console.log(data);
//     }
// }


