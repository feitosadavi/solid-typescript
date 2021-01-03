type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  // O + converte para number
  total(): number {
    return +this._items.reduce((sum, val) => sum + val.price, 0).toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('O carrinho está vazio');
      return;
    }
    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com total de ${this.total} foi recebido!`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada: ', msg);
  }

  saveOrder(): void {
    console.log('Seu pedido foi salvo com sucesso!');
  }

  clear(): void {
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({ name: 'Camiseta', price: 49.9 });
shoppingCart.addItem({ name: 'Tênis', price: 149.9123 });
shoppingCart.addItem({ name: 'Bermuda', price: 60.0 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());

shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
console.log(shoppingCart.items);
