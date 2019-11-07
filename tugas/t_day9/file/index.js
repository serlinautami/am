// membuat file baru
const fs = require('fs');

let teks = 'kamu membuat file baru'
fs.writeFile('bookFile.txt', teks, (err) => {
    if (err) throw err;
    console.log('sukses membuat file!')
});
console.log('test')

//read file
fs.readFile('bookFile.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});


//membuat directory
fs.mkdirSync('book', (err) => {
    if (err) throw err;
    console.log('sukses membuat directory')
});