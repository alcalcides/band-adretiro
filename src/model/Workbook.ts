import ExcelJS, { Worksheet } from "exceljs";

export class Workbook {
    private workbook: ExcelJS.Workbook;


    constructor() {
        this.workbook = new ExcelJS.Workbook();
    }

    private async loadWorkbook(database: any): Promise<ExcelJS.Workbook> {
        return await this.workbook.xlsx.load(database);
    }

    public async getSheet(dataBase: any, sheetName: string): Promise<ExcelJS.Worksheet>{
        await this.loadWorkbook(dataBase)
        const worksheet: Worksheet = this.workbook.getWorksheet(sheetName);
        return worksheet;
    }

    public async getCellValue(dataBase: any, sheetName: string, cell: string) {
        const sheet = await this.getSheet(dataBase, sheetName);
        const data = sheet.getCell(cell);
        return data.value
    }
    
    public async printSheets(database: any) {
        await this.workbook.xlsx.load(database);
    
        this.workbook.eachSheet((worksheet) => {
            console.log(`Sheet: ${worksheet.name}`);
        
            worksheet.eachRow((row, rowIndex) => {
            const rowData = row.values;
            console.log(`Row ${rowIndex}:`, rowData);
            });
        
            console.log("---");
        });
    }
}



