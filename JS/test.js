// Promise.resolve(console.log('first')).then(console.log('second'))

// const request = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('first');
//         reject();
//     }, 2000)
// })

// request.then(() => {
//     console.log('second');
// }, () => {
//     console.log('reject');
// })

// const arr = [24, 43, 54, 23]
// function maxEl(arr) {
//     let max = arr[0]
//     for (i=1; i<=arr.length; i++) {
//         if (arr[i] < max) {
//             max = arr[i]
//         }
//     }
//     return max
// }

// console.log(maxEl(arr))