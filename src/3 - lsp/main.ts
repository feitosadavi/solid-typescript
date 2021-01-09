/**
 * Liskov Substituition Principle
 * Vale para relações de E1. Para classes abstratas
 * Subtipos precisam ser substituíveis por seus tipos de base
 *
 * Se meu programa espera um Animal, algo do tipo Cachorro (que herda de Anima)
 * de servir como qualquer outro Animal
 *
 * Bascicamente, se eu confio que um classe vai retornar um valor de um determinada maneira,
 * todos os seus filhos devem me retornar da mesma maneira
 *
 * Por exemplo: se eu mudar o tipo do retorno de um método filho, estarei quebrando o princípio,
 * já que o método pai deveria retornar outro tipo
 *
 * Eu espero que qualquer subclasse tenha seus métodos e comportamentos no molde de sua classe abstrata
 */
import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { PerDayDiscout } from './classes/discount';

const perDayDiscout = new PerDayDiscout();
const shoppingCart = new ShoppingCart(perDayDiscout);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Tênis', 149.9123));
shoppingCart.addItem(new Product('Bermuda', 60.0));

console.log(shoppingCart.items);
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
