import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Purchase, PurchaseBody } from './types';

@Injectable()
export class PurchasesService {
  async getPurchases(): Promise<[]> {
    try {
      const res = await axios.get(
        `https://api.jsonbin.io/v3/b/${process.env.JSONBIN_PURCHASES_BIN_ID}/latest`,
        {
          headers: {
            'X-Master-Key': process.env.JSONBIN_MASTER_KEY,
          },
        },
      );
      console.log(res);
      return res.data.record;
    } catch (error) {
      throw error;
    }
  }

  async getPurchaseById(id: string): Promise<Purchase> {
    try {
      const res = await axios.get(
        `https://api.jsonbin.io/v3/b/${process.env.JSONBIN_PURCHASES_BIN_ID}/latest`,
        {
          headers: {
            'X-Master-Key': process.env.JSONBIN_MASTER_KEY,
          },
        },
      );
      const purchase = res.data.record.filter(
        (elem: Purchase) => elem.id == id,
      );
      return purchase;
    } catch (error) {
      throw error;
    }
  }

  async postPurchase(purchase: PurchaseBody): Promise<void> {
    try {
      const currentPurchases = await this.getPurchases();

      const res = await axios.put(
        `https://api.jsonbin.io/v3/b/${process.env.JSONBIN_PURCHASES_BIN_ID}`,
        [
          {
            id: Math.random().toString(16).slice(2),
            ...purchase,
          },
          ...currentPurchases,
        ],
        {
          headers: {
            'X-Master-Key': process.env.JSONBIN_MASTER_KEY,
            'Content-Type': 'application/json',
            'X-Access-Key': process.env.JSONBIN_ACCESS_KEY,
          },
        },
      );
      console.log(res);
    } catch (error) {
      throw error;
    }
  }
}
