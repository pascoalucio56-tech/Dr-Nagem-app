
try {
    $excelFile = "c:\Users\Amalia rodrigues\Desktop\Acompanhamento de metas.xlsb"
    $excel = New-Object -ComObject Excel.Application
    $excel.Visible = $false
    $workbook = $excel.Workbooks.Open($excelFile)
    if ($null -eq $workbook) {
        Write-Error "Could not open workbook"
        exit 1
    }
    $worksheet = $workbook.Sheets.Item(1)

    $headers = @()
    for ($col = 1; $col -le 50; $col++) {
        $val = $worksheet.Cells.Item(1, $col).Value2
        if ($null -ne $val -and $val -ne "") { 
            $headers += $val.ToString() 
        }
        else { 
            break 
        }
    }

    $data = @()
    for ($row = 2; $row -le 10; $row++) {
        $rowObj = @{}
        $hasValue = $false
        for ($col = 1; $col -le $headers.Count; $col++) {
            $val = $worksheet.Cells.Item($row, $col).Value2
            if ($null -ne $val) {
                $rowObj[$headers[$col - 1]] = $val.ToString()
                $hasValue = $true
            }
            else {
                $rowObj[$headers[$col - 1]] = ""
            }
        }
        if ($hasValue) { $data += $rowObj }
    }

    $workbook.Close($false)
    $excel.Quit()
    
    $result = @{
        headers = $headers
        data    = $data
    }
    $result | ConvertTo-Json
}
catch {
    Write-Error $_.Exception.Message
}
finally {
    if ($null -ne $excel) {
        [System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel) | Out-Null
    }
}
