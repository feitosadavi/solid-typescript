import { CartItem } from './cart-item';
// Classes coesas são classes que usam seus próprios atributos

// tudo que está aqui é coeso
export interface ShoppingCartProtocol {
  items: Readonly<CartItem[]>;
  addItem(item: CartItem): void;
  removeItem(index: number): void;
  total(): number;
  totalWithDiscount(): number;
  isEmpty(): boolean;
  clear(): void;
}
