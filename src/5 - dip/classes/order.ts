import { OrderStatus } from './interfaces/order-status';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessagingProtocol } from '../classes/interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';
// Classes coesas são classes que usam seus próprios atributos

export class Order {
  // alto nível
  private _orderStatus: OrderStatus = 'open';

  constructor(
    // injeção de dependências
    private readonly cart: ShoppingCartProtocol, // baixo nível
    private readonly messaging: MessagingProtocol, // (baixo nível) a Order não vai mandar mensagem, mais pedir para outro serviço mandar a mensagem. Ela estará contratando um serviço
    private readonly persistency: PersistencyProtocol, // baixo nível
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
