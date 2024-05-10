import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { Purchase, PurchaseBody } from './types';

@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Get()
  async getPurchases(): Promise<[]> {
    return this.purchasesService.getPurchases();
  }

  @Get('/:id')
  async getPurchaseById(@Param() params: { id: string }): Promise<Purchase> {
    return this.purchasesService.getPurchaseById(params.id);
  }

  @Post()
  async postPurchase(@Body() body: PurchaseBody): Promise<void> {
    console.log(body);

    return this.purchasesService.postPurchase(body);
  }
}
