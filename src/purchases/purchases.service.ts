import { Injectable } from '@nestjs/common';
import { Purchase, PurchaseInsert } from './types';

@Injectable()
export class PurchasesService {
  async getPurchases(): Promise<Purchase[]> {
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

  async postPurchase(purchase: PurchaseInsert): Promise<PurchaseInsert> {
    try {
      const res = {};
      console.log(res);
      return;
    } catch (error) {
      throw error;
    }
  }
}
