const fs = require('fs');
const XLSX = require('xlsx');

// Note: In our previous step we extracted text to pdf_text_debug.txt
const rawText = fs.readFileSync('pdf_text_debug.txt', 'utf-8');
const lines = rawText.split('\n');

const data = [];
let lastDate = '';

// Regex to match a date
const dateRegex = /^(\d{2}\/\d{2}\/\d{2})/;
// Regex to match the OS line format
// It either starts with a date or an OS number (7 digits)
const osLineRegex = /^((\d{2}\/\d{2}\/\d{2})\s+)?(\d{7})/;

lines.forEach(line => {
    const trimmed = line.trim();
    const match = trimmed.match(osLineRegex);

    if (match) {
        let date = match[2]; // Captures DD/MM/YY if present
        let os = match[3];   // Captures the 7-digit OS

        if (date) {
            lastDate = date;
        } else {
            date = lastDate;
        }

        if (date && os) {
            data.push({
                'Data': date,
                'Numero OS': os,
                'Status': 'RPS Gerada'
            });
        }
    }
});

// Create Excel
const ws = XLSX.utils.json_to_sheet(data);
const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, "OS_RPS");

const fileName = 'relatorio_os_rps.xlsx';
XLSX.writeFile(wb, fileName);

console.log(`Excel file created: ${fileName}`);
console.log(`Extracted ${data.length} records.`);

// Provide JSON for the app as well
fs.writeFileSync('os_data.json', JSON.stringify(data, null, 2));
