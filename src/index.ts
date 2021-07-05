import ExcelJS from 'exceljs'
import saveAs from 'file-saver'

interface IProps{
    titles: Array<number|string>,
    data: Array<Array<number|string>>
    documentName: string
}
/**
 * 
 * @param titles
 * Ejemplo: titles:['n1', 'n2', 'n3']
 * @param data
 * Ejemplo: data: [[1,2,3],[4,5,6]]
 * @param documentName
 * Ejemplo: documentName: 'prueba'
 * @returns 
 */
const SaveExcel = async ({ titles, data, documentName }:IProps) => {
    try {
        const wb = new ExcelJS.Workbook();
        const ws = wb.addWorksheet();
        const rowHeader = ws.addRow(titles);
        rowHeader.font = { bold: true }

        data.forEach((item) => ws.addRow(item))
        const buf = await wb.xlsx.writeBuffer();
        return saveAs(new Blob([buf]), documentName + '.xlsx');
    } catch (error) {
        return(error)
    }
}

export default SaveExcel