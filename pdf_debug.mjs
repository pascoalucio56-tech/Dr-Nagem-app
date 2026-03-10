import fs from 'fs';
import { PDFParse } from 'pdf-parse';

async function run() {
    try {
        let dataBuffer = fs.readFileSync('relatorio.pdf');
        const parser = new PDFParse({ data: dataBuffer });
        const textResult = await parser.getText();
        fs.writeFileSync('pdf_text_debug.txt', textResult.text);
        console.log('Text extracted to pdf_text_debug.txt');
        await parser.destroy();
    } catch (err) {
        console.error('Error parsing PDF:', err);
    }
}

run();
