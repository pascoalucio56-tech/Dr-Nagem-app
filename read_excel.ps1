
$excelFile = "c:\Users\Amalia rodrigues\Desktop\Acompanhamento de metas.xlsb"
$excel = New-Object -ComObject Excel.Application
$excel.Visible = $false
$workbook = $excel.Workbooks.Open($excelFile)
$worksheet = $workbook.Sheets.Item(1)

$headers = @()
for ($col = 1; $col -le 20; $col++) {
    $val = $worksheet.Cells.Item(1, $col).Text
    if ($val) { $headers += $val } else { break }
}

$data = @()
for ($row = 2; $row -le 6; $row++) {
    $rowObj = @{}
    for ($col = 1; $col -le $headers.Count; $col++) {
        $rowObj[$headers[$col-1]] = $worksheet.Cells.Item($row, $col).Text
    }
    $data += $rowObj
}

$workbook.Close($false)
$excel.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel) | Out-Null

$headers | ConvertTo-Json
$data | ConvertTo-Json
