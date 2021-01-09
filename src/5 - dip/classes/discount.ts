import { DiscountProtocol } from './interfaces/discount-protocol';

export abstract class Discount implements DiscountProtocol {
  //abstract getWeekDay(): void;
  abstract calculate(value: number): number;
}

export class PerDayDiscout extends Discount {
  // Lembre de  fazer essa classe e excluir as outras
  private discount = 0.5;

  setDiscount(): number {
    const date = new Date();
    const day = date.getDay();
    switch (day) {
      case 1:
        this.discount = 0.1;
        break;

      case 2:
        this.discount = 0.2;
        break;

      case 3:
        this.discount = 0.3;
        break;

      case 4:
        this.discount = 0.4;
        break;

      case 5:
        this.discount = 0.5;
        break;

      default:
        this.discount = 0;
        break;
    }
    return this.discount;
  }

  calculate(price: number): number {
    const discountSetted = this.setDiscount(); // seta o disconto dinâmico
    return price - price * discountSetted;
  }
}
