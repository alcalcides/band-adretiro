import axios from 'axios';

export class SheetDownloader {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  async download(): Promise<any> {
    try {
      const response = await axios.get(this.url, { responseType: 'arraybuffer' });
      return response.data;

    } catch (error) {
      throw new Error("Failed download");      
    }
  }
}

