/**
 * Open/closed principle
 * Entidades devem estar abertas para extensão e fechadas para modificação
 *
 * Agora o código está fechado para modificação, mas aberto para extensão,
 * já que eu não preciso mais modificar o shopping cart para adicionar desconto.
 * Tendo que extender o discount para adicionar novos discontos
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
