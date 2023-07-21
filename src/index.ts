import dotenv from 'dotenv';
dotenv.config();

import { Downloader } from "./model/Downloader";
import { printSheets } from './model/SheetReader';
import { log, error as logError } from 'console';

const linkDaPlanilha: string = process.env.SHEET_LINK || "";

const dataBase = Downloader.get(linkDaPlanilha);

printSheets(dataBase)
  .then(() => log('Leitura da planilha concluída.'))
  .catch((error) => logError('Erro na leitura da planilha:', error));
