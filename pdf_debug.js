const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('relatorio.pdf');

pdf(dataBuffer).then(function (data) {
    fs.writeFileSync('pdf_text_debug.txt', data.text);
    console.log('Text extracted to pdf_text_debug.txt');
}).catch(err => {
    console.error('Error parsing PDF:', err);
});
