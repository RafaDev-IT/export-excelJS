import ExcelJS from 'exceljs'
import { saveAs } from 'file-saver'

const SaveExcel = ({ TitleFields, Namesfields, data, Namedocument  }) => {
    try {
        const wb = new ExcelJS.Workbook();
        const ws = wb.addWorksheet();
        
        const row = ws.addRow(TitleFields);
        data?.forEach((row) => {
            if (row.attributes.NOMBRE) {
                ws.addRow([
                    row.attributes.NOMBRE, 
                    row.attributes.APELLIDOS, 
                    row.email, 
                    row.attributes.PHONENUMBER, 
                ]);
            }
        })
        row.font = { bold: true }

        wb.xlsx.writeBuffer()
            .then(buf=>saveAs(new Blob([buf]), Namedocument + '.xlsx'));
        
    } catch (error) {
        console.log(error)
    }
}

export default SaveExcel