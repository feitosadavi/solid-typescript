import { CartItem } from './interfaces/cart-item';
import { DiscountProtocol } from './interfaces/discount-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
// Classes coesas são classes que usam seus próprios atributos

// tudo que está aqui é coeso
export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: DiscountProtocol) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  // O + converte para number
  total(): number {
    return +this._items.reduce((sum, val) => sum + val.price, 0).toFixed(2);
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
  }
}
