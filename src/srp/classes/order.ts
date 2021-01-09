import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shopping-cart';
// Classes coesas são classes que usam seus próprios atributos

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    // injeção de dependências
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging, // a Order não vai mandar mensagem, mais pedir para outro serviço mandar a mensagem. Ela estará contratando um serviço
    private readonly persistency: Persistency,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('O carrinho está vazio');
      return;
    }
    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Seu pedido com total de ${this.cart.totalWithDiscount()} foi recebido!`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
