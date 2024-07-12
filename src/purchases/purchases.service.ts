import { Injectable } from '@nestjs/common';
import { Purchase, PurchaseBody } from './types';

@Injectable()
export class PurchasesService {
  async getPurchases(): Promise<[]> {
    try {
      const res = {};
      console.log(res);
      return;
    } catch (error) {
      throw error;
    }
  }

  async getPurchaseById(id: string): Promise<Purchase> {
    try {
      const res = {};
      console.log(res);
      return;
    } catch (error) {
      throw error;
    }
  }

  async postPurchase(purchase: PurchaseBody): Promise<void> {
    try {
      const res = {};
      console.log(res);
      return;
    } catch (error) {
      throw error;
    }
  }
}
