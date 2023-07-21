import dotenv from 'dotenv';
dotenv.config();

import { SheetDownloader } from "./model/SheetDownloader";
import { log } from 'console';

const linkDaPlanilha: string = process.env.SHEET_LINK || "";

const downloader = new SheetDownloader(linkDaPlanilha);
const dataBase = downloader.download();

log(typeof dataBase);
