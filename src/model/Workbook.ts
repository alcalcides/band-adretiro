import ExcelJS from "exceljs";

export class Workbook {
    private workbook: ExcelJS.Workbook;


    constructor() {
        this.workbook = new ExcelJS.Workbook();
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



