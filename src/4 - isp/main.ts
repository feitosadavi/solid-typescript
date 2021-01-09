/**
 * Interface segragation principle
 * Os clientes não devem ser foçados a depender de type, interfaces ou membros abstratas que não utilizam
 * não devemos criar interfaces e etc muito grandes
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
