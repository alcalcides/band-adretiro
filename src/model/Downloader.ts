import axios from 'axios';

export class Downloader {

  static async get(url: string): Promise<any> {
    try {
      const response = await axios.get(url, { responseType: 'arraybuffer' });
      return response.data;

    } catch (error) {
      throw new Error("Failed download");      
    }
  }
}

