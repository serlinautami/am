// membuat file baru di dalam di directory
const fs = require('fs');

let teks = 'kamu membuat file baru tau'
fs.writeFile('./book/bookFile.txt', teks, (err) => {
    if (err) throw err;
    console.log('sukses membuat file!')
});
console.log('yes')