import dotenv from "dotenv";
dotenv.config();

import { Downloader } from "./model/Downloader";
import { Workbook } from "./model/Workbook";
import { log, error as logError } from "console";

async function go() {
  const linkDaPlanilha: string = process.env.SHEET_LINK || "";

  const dataBase = Downloader.get(linkDaPlanilha);

  const workbook = new Workbook();
  const data = await workbook.getCellValue(dataBase, "Dashboard", "A1");
  log(data);
}

try {
  go();
} catch (error) {
  logError(error);
}
