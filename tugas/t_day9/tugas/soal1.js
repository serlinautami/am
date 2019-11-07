//membuat directory
const fs = require('fs');

fs.mkdir('book', (err) => {
    if (err) throw err;
    console.log('sukses membuat directory')
});