const { error } = require('node:console');
const fs = require('node:fs');

// fs.readFile('file.txt', 'utf8', (error, data) => {
//     console.log(error, data)
// })

// const a = fs.readFileSync('file.txt')
// console.log(a.toString())

fs.writeFile('file2.txt', 'this is data to write in txt2', () => {
    console.log('written to this file data ')
})

console.log('complete reading the file')
