// const velirano = new Promise((resolve, reject) => {
//     resolve("Miamy")
// })
//
// velirano.then((result => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//         resolve("Holla")
//     })
// })).then(result => {
//     console.log(result)
// })
//
// console.log("hello")

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(res => {
        res.forEach(el => console.log(el.id))
    })
