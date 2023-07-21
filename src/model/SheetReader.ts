import ExcelJS from "exceljs";

export async function printSheets(database: any): Promise<void> {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(database);

  workbook.eachSheet((worksheet) => {
    console.log(`Sheet: ${worksheet.name}`);

    worksheet.eachRow((row, rowIndex) => {
      const rowData = row.values;
      console.log(`Row ${rowIndex}:`, rowData);
    });

    console.log("---");
  });
}
