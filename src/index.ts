import dotenv from 'dotenv';
dotenv.config();

import { SheetDownloader } from "./model/SheetDownloader";
import { printSheets } from './model/SheetReader';
import { log, error as logError } from 'console';

const linkDaPlanilha: string = process.env.SHEET_LINK || "";

const downloader = new SheetDownloader(linkDaPlanilha);
const dataBase = downloader.download();

printSheets(dataBase)
  .then(() => log('Leitura da planilha concluída.'))
  .catch((error) => logError('Erro na leitura da planilha:', error));
